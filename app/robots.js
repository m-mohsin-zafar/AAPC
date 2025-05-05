
export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [""],
        },
        sitemap: "https://www.aapc.nyc/sitemap.xml",
    };
}
