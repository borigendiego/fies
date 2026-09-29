export default async function getCustomers()  {
    // acf_format=standard makes ACF return the image URL instead of the attachment ID
    const res = await fetch('https://admin.spektrum-holding.de/wp-json/wp/v2/customer?acf_format=standard&per_page=100', {
        cache: 'no-store'
    });

    if(!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const resolved = await res.json();

    const result = resolved
        .filter((customer: any) => customer.status === 'publish')
        .map((customer: any) => ({
            id: customer.id,
            title: customer.title.rendered,
            imageUrl: customer.acf?.image || null,
            redirection: customer.acf?.redirection || null,
        }));

    return result;
}
