export default async function getAllBlogs()  {
    const res = await fetch('https://admin.spektrum-holding.de/wp-json/wp/v2/posts');
    const resolved = await res.json();

    const result = resolved.map((post: any) => {
        if (post.status === 'publish') {
            return (
                {
                    id: post.id,
                    title: post.title.rendered,
                    image: post.fimg_url,
                    slug: post.slug,
                    date: post.date,
                    content: post.content.rendered,
                    link: post.link,
                    excerpt: post.excerpt.rendered
                }
            )
        }
    });

    if(!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return result;
}