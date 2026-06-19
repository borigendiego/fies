export default async function getBlog(blogId: number) {
    const res = await fetch(
        `https://admin.spektrum-holding.de/wp-json/wp/v2/posts/${blogId}?_embed`,
        {
        cache: 'no-store'
        }
    );
    const post = await res.json();

    const result = {
        id: post.id,
        title: post.title.rendered,
        imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null,
        imageSizes: post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes ?? null,
        slug: post.slug,
        date: post.date,
        content: post.content.rendered,
        link: post.link,
        excerpt: post.excerpt
    };

    if(!res.ok) throw new Error('Failed to fetch post');

    return result;
}
