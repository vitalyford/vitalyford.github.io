import { publications } from "@/data/publications";

export const getPublicationStats = () => {
    const totalPapers = publications.reduce((acc, pub) => acc + pub.papers.length, 0);
    const yearsActive = publications.length;

    return {
        totalPapers,
        yearsActive,
    };
};
