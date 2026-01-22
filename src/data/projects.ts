export interface Project {
    title: string;
    description: string;
    href: string;
    badge?: string;
}

export const featuredProjects: Project[] = [
    {
        title: "Netflow",
        description: "Interactive network flow visualization for mastering DNS, web communication, and cybersecurity concepts",
        href: "https://netflow.vford.com/",
        badge: "Interactive",
    },
    {
        title: "CTF Unplugged",
        description: "An unplugged version of a Capture The Flag competition for high schools",
        href: "/ctf-unplugged/CTF_Unplugged_May_2019.docx",
        badge: "Education",
    },
    {
        title: "Pragmatic Cyber Academy",
        description: "Quick knowledge modules and quizzes, designed to get folks interested in cybersecurity (part of NSF grant)",
        href: "https://cysia.vford.com/",
        badge: "Education",
    },
    {
        title: "Engineering Pathways",
        description: "A comprehensive navigator for Arcadia University dual-degree engineering programs with the University of Pittsburgh, Drexel University, Washington University in St. Louis, and others",
        href: "https://areng.vford.com",
        badge: "Academic",
    },
    {
        title: "TeachCyber",
        description: "A library of resources to teach and learn cybersecurity",
        href: "https://teachcyber.vford.com",
        badge: "Education",
    },
    {
        title: "GenCyberCoin",
        description: "Gamified web platform teaching blockchain, digital currency, and cybersecurity principles (part of NSA/NSF grant)",
        href: "https://gencybercoin.vford.com",
        badge: "Open Source",
    },
    {
        title: "Zero-trust Infrastructure",
        description: "Zero-trust network with 30+ applications across 10 servers secured via Cloudflare Access and with its own Wazuh XDR to monitor and respond to security events",
        href: "https://vford.cloudflareaccess.com",
        badge: "Security",
    },
];
