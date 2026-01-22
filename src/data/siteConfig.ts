export const securityRecs = [
    { label: "VPN", name: "ProtonVPN", url: "https://protonvpn.com/" },
    { label: "Antivirus", name: "BitDefender", url: "https://www.bitdefender.com/en-us/consumer/free-antivirus" },
    { label: "Zero-trust", name: "Cloudflare Access", url: "https://www.cloudflare.com/zero-trust/products/access/" },
    { label: "DNS", name: "NextDNS", url: "https://nextdns.io/" },
    { label: "Passwords", name: "Bitwarden", url: "https://bitwarden.com/" },
    { label: "PwnCheck", name: "Have I Been Pwned", url: "https://haveibeenpwned.com/" },
    { label: "Browser", name: "Brave Browser", url: "https://brave.com/" },
    { label: "Privacy", name: "Operation Privacy", url: "https://www.operationprivacy.com/" },
    { label: "XDR", name: "Wazuh", url: "https://wazuh.com/" },
];

export const getSiteStats = (totalPapers: number, citationCount: string, yearsActive: number) => [
    { label: "Publications", value: totalPapers.toString() },
    { label: "Citations", value: citationCount, href: "https://scholar.google.com/citations?user=49RgkBcAAAAJ&hl=en" },
    { label: "Years in Education and Tech", value: `${yearsActive}` },
    { label: "NSF, NSA, and Internal Funding Awards", value: "9" },
    { label: "Teams Coached", value: "50+" },
];
