// app/api/cron/generate-sitemap/route.js
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import axios from "axios";

// Configuration
const WORDPRESS_BASE_URL = "https://public-api.wordpress.com/rest/v1.1/sites/azarkblog.wordpress.com/posts";
const SITE_URL = process.env.SITE_URL || "https://www.aapc.nyc"; // Set this in your environment variables
const SITEMAP_PATH = path.join(process.cwd(), "public", "sitemap.xml");

export async function GET(request) {
    // Verify that the request is from Vercel Cron
    const authHeader = request.headers.get("authorization");

    // The Vercel Cron system sends a secret token for verification
    // CRON_SECRET should be set in your Vercel project environment variables
    // if (process.env.NODE_ENV === 'production') {
    //     const expectedToken = process.env.CRON_SECRET;
    //     if (!authHeader || authHeader !== `Bearer ${expectedToken}`) {
    //         return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    //     }
    // }

    try {
        console.log("Starting sitemap generation...");
        const postsPerPage = 100; // WordPress API pagination limit

        // Fetch posts from WordPress API
        const response = await axios.get(`${WORDPRESS_BASE_URL}?category=AAPC&number=${postsPerPage}&page=1`); // Adjust number as needed
        const posts = response.data.posts || [];

        // Start building sitemap XML
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

        // Add your static pages
        const staticPages = [
            { url: "/about", changefreq: "monthly", priority: 0.8 },
            { url: "/contact", changefreq: "monthly", priority: 0.8 },
            { url: "/privacy-policy", changefreq: "monthly", priority: 0.8 },
            { url: "/services", changefreq: "monthly", priority: 0.8 },
            { url: "/projects", changefreq: "monthly", priority: 0.8 },


            // Add more static pages as needed
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

        // Add each post to the sitemap
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

        // Close sitemap XML
        sitemap += `
</urlset>`;

        // Make sure the public directory exists
        const publicDir = path.join(process.cwd(), "public");
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
        }

        // Write sitemap to file
        fs.writeFileSync(SITEMAP_PATH, sitemap);

        // Create a log file with the generation timestamp
        const timestamp = new Date().toISOString();
        fs.writeFileSync(path.join(process.cwd(), "public", "sitemap-generated.txt"), `Last generated: ${timestamp} - Included ${posts.length} posts`);

        console.log(`Sitemap generated successfully with ${posts.length} posts at ${timestamp}`);

        return NextResponse.json({
            success: true,
            message: "Sitemap generated successfully",
            timestamp: timestamp,
            postsIncluded: posts.length,
        });
    } catch (error) {
        console.error("Error generating sitemap:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Failed to generate sitemap",
                details: error.message,
            },
            { status: 500 }
        );
    }
}
