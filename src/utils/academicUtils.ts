import { publications } from "@/data/publications";

export const getPublicationStats = () => {
    const totalPapers = publications.reduce((acc, pub) => acc + pub.papers.length, 0);
    const yearsActive = new Date().getFullYear() - 2007;

    return {
        totalPapers,
        yearsActive,
    };
};
