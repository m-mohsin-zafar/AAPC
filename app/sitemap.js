import axios from 'axios';

export default async function sitemap() {
    const WORDPRESS_BASE_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/azarkblog.wordpress.com/posts';
    const SITE_URL = 'https://www.aapc.nyc'; // Replace with your actual site URL

    // Initialize array to store all posts
    let allPosts = [];
    const postsPerPage = 100; // WordPress API pagination limit
    let page = 1;
    let totalPosts = 0;

    // First request to get total number of posts
    const initialResponse = await axios.get(`${WORDPRESS_BASE_URL}?category=AAPC&number=${postsPerPage}&page=1`);
    totalPosts = initialResponse.data.found;
    allPosts = allPosts.concat(initialResponse.data.posts || []);
    // Calculate number of pages needed
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    // Fetch the remaining pages
    for (page = 2; page <= totalPages; page++) {
        try {
            const response = await axios.get(`${WORDPRESS_BASE_URL}?category=AAPC&number=${postsPerPage}&page=${page}`);
            allPosts = allPosts.concat(response.data.posts || []);
        } catch (error) {
            console.error(`Error fetching page ${page}:`, error);
        }
    }

    console.log(`Fetched ${allPosts.length} posts out of ${totalPosts} total posts`);

    // Create sitemap entries for each post
    const postEntries = allPosts.map((post, index) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.modified),
        changeFrequency: 'weekly',
        priority: 1,
    }));

    // Add static pages
    const staticPages = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/projects`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        // Add other static pages as needed
    ];

    // Combine all entries
    return [...staticPages, ...postEntries];
}

// <?xml version='1.0' encoding='UTF-8'?>
// <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
//     <url>
//         <loc>https://www.aapc.nyc/</loc>
//         <lastmod>2024-04-01T12:51:38+00:00</lastmod>
//         <priority>1.00</priority>
//     </url>
//     <url>
//         <loc>https://www.aapc.nyc/contact</loc>
//         <lastmod>2024-04-01T12:51:38+00:00</lastmod>
//         <priority>0.60</priority>
//     </url>
//     <url>
//         <loc>https://www.aapc.nyc/privacy-policy</loc>
//         <lastmod>2024-04-01T12:51:38+00:00</lastmod>
//         <priority>0.10</priority>
//     </url>
//     <url>
//         <loc>https://www.aapc.nyc/projects</loc>
//         <lastmod>2024-04-01T12:51:38+00:00</lastmod>
//         <priority>0.80</priority>
//     </url>
//     <url>
//         <loc>https://www.aapc.nyc/services</loc>
//         <lastmod>2024-04-01T12:51:38+00:00</lastmod>
//         <priority>0.80</priority>
//     </url>
// </urlset>