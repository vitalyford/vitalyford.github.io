export interface Achievement {
    title: string;
    description: string;
    href?: string;
    year?: string;
}

export const achievements: Achievement[] = [
    {
        title: "CCSC-Eastern Co-Chair",
        description: "Conference Chair for the 41st Annual Eastern Regional Conference",
        href: "https://ccsc-eastern.org",
        year: "2025",
    },
    {
        title: "Ally Award",
        description: "Women in Cybersecurity (WiCyS) Ally Award Winner",
        year: "2024",
    },
    {
        title: "NSF SaTC: EDU Grant Co-PI",
        description: "Cybersecurity Faculty Development for High School Teachers",
        href: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2225470",
        year: "2023-2026",
    },
    {
        title: "WiCyS Global Chapter Coordinator",
        description: "Leading and coordinating Women in Cybersecurity student chapters globally",
        href: "https://www.wicys.org/initiatives/student-chapters/",
        year: "2018-Present",
    },
    {
        title: "Professor of the Year",
        description: "The purpose of the award is to recognize people who, through their outstanding teaching skills, affect the lives and careers of students and contribute to the overall welfare of our society.",
        href: "https://www.arcadia.edu/about-arcadia/leadership/office-provost/faculty-awards/",
        year: "2022",
    },
    {
        title: "NSF Cyberinfrastructure Grant Co-PI",
        description: "NSF CC* Cyberinfrastructure Grant to Advance Arcadia's Research Network, Innovation, and Collaboration",
        href: "https://www.arcadia.edu/academics/college-arts-sciences/computer-science-mathematics/science-dmz/",
        year: "2018-2020",
    },
];
