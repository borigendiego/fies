export default async function getAllBlogs()  {
    const res = await fetch('https://admin.spektrum-holding.de/wp-json/wp/v2/posts?_embed&per_page=100', {
        cache: 'no-store'
    });
    const resolved = await res.json();

    const result = resolved
        .filter((post: any) => post.status === 'publish')
        .map((post: any) => ({
            id: post.id,
            title: post.title.rendered,
            imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null,
            imageSizes: post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes ?? null,
            slug: post.slug,
            date: post.date,
            content: post.content.rendered,
            link: post.link,
            excerpt: post.excerpt.rendered
        }));

    if(!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return result;
}
