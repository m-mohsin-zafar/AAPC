import axios from "axios";

const WORDPRESS_BASE_URL = "https://public-api.wordpress.com/rest/v1.1/sites/azarkblog.wordpress.com/posts";
const SITE_URL = process.env.SITE_URL || "https://www.aapc.nyc";

export async function GET(request) {
    try {
        const postsPerPage = 100;

        // Fetch WordPress posts
        const response = await axios.get(`${WORDPRESS_BASE_URL}?category=AAPC&number=${postsPerPage}&page=1`);
        const posts = response.data.posts || [];

        // Start XML
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

        // Static pages
        const staticPages = [
            { url: "/about", changefreq: "monthly", priority: 0.8 },
            { url: "/contact", changefreq: "monthly", priority: 0.8 },
            { url: "/privacy-policy", changefreq: "monthly", priority: 0.8 },
            { url: "/services", changefreq: "monthly", priority: 0.8 },
            { url: "/projects", changefreq: "monthly", priority: 0.8 },
        ];

        staticPages.forEach((page) => {
            sitemap += `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
        });

        // Dynamic blog posts
        posts.forEach((post) => {
            const postDate = new Date(post.modified).toISOString();
            const postSlug = post.slug;

            sitemap += `
  <url>
    <loc>${SITE_URL}/blog/${postSlug}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
        });

        sitemap += `
</urlset>`;

        // Return the XML response directly
        return new Response(sitemap, {
            status: 200,
            headers: {
                "Content-Type": "application/xml",
            },
        });
    } catch (error) {
        console.error("Error generating sitemap:", error);
        return new Response(
            `<error>Failed to generate sitemap: ${error.message}</error>`,
            {
                status: 500,
                headers: {
                    "Content-Type": "application/xml",
                },
            }
        );
    }
}
