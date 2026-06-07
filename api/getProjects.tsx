export type GalleryImage = {
    id: number;
    title: string;
    altText: string;
    fullUrl: string;
    thumbnailUrl: string;
    sizes: {
        medium?: string;
        large?: string;
        medium_large?: string;
        full?: string;
    };
};

export type Project = {
    id: number;
    slug: string;
    name: string;
    projectType: string | null;
    images: {
        thumbnail?: string;
        medium?: string;
        large?: string;
        full?: string;
    } | null;
    location: string | null;
    project: string | null;
    services: string | null;
    dates: string | null;
    owner: string | null;
    gallery: GalleryImage[];
};

export default async function getProjects(): Promise<Project[]> {
    const fields = '_fields=id,slug,status,title,acf,_links,featured_media';
    const res = await fetch(
        `https://admin.spektrum-holding.de/wp-json/wp/v2/project?_embed&orderby=menu_order&order=asc&${fields}`,
    );

    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }

    const data = await res.json();

    return data
        .filter((post: any) => post.status === 'publish')
        .map((post: any) => {
            const acf = post.acf && !Array.isArray(post.acf) ? post.acf : {};
            const media = post._embedded?.['wp:featuredmedia']?.[0];
            const sizes = media?.media_details?.sizes ?? null;

            const rawGallery: any[] = (acf.photo_gallery?.gallery ?? []).flat();
            const gallery: GalleryImage[] = rawGallery.map((img: any) => ({
                id: img.id,
                title: img.title ?? '',
                altText: img.alt_text ?? '',
                fullUrl: img.full_image_url ?? '',
                thumbnailUrl: img.thumbnail_image_url ?? '',
                sizes: {
                    medium: img.media_details?.sizes?.medium?.source_url,
                    large: img.media_details?.sizes?.large?.source_url,
                    medium_large: img.media_details?.sizes?.medium_large?.source_url,
                    full: img.full_image_url,
                },
            }));

            return {
                id: post.id,
                slug: post.slug,
                name: post.title.rendered,
                projectType: acf.project_type?.[0] ?? null,
                images: sizes
                    ? {
                          thumbnail: sizes.thumbnail?.source_url,
                          medium: sizes.medium?.source_url,
                          large: sizes.large?.source_url,
                          full: sizes.full?.source_url ?? media?.source_url,
                      }
                    : media?.source_url
                    ? { full: media.source_url }
                    : null,
                location: acf.location ?? null,
                project: acf.project ?? null,
                services: acf.services ?? null,
                dates: acf.dates ?? null,
                owner: acf.owner ?? null,
                gallery,
            };
        });
}
