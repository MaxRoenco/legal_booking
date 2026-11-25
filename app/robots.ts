import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// /robots.txt: totul poate fi indexat, iar Google află de aici unde e sitemap-ul
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
