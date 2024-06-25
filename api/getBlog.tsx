export default async function getBlog(blogId: number) {
    const res = await fetch(`https://admin.spektrum-holding.de/wp-json/wp/v2/posts/${blogId}`);
    const post = await res.json();

    const result = {
        id: post.id,
        title: post.title.rendered,
        image: post.fimg_url,
        slug: post.slug,
        date: post.date,
        content: post.content.rendered,
        link: post.link,
        excerpt: post.excerpt
    };

    if(!res.ok) throw new Error('Failed to fetch post');

    return result;
}
