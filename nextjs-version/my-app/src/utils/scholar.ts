export async function getScholarCitations(userId: string) {
    try {
        const res = await fetch(`https://scholar.google.com/citations?user=${userId}&hl=en`, {
            next: { revalidate: 86400 }, // Cache for 1 day
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!res.ok) {
            console.error("Failed to fetch scholar profile status:", res.status);
            return null;
        }

        const html = await res.text();
        // The first "gsc_rsb_std" cell usually contains the "All" citations count.
        const match = html.match(/<td class="gsc_rsb_std">(\d+)<\/td>/);
        return match ? match[1] : null;
    } catch (error) {
        console.error("Error fetching scholar citations:", error);
        return null;
    }
}
