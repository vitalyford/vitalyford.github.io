export interface ContactItem {
    label: string;
    value: string;
    href?: string;
    copyable?: boolean;
}

export const contactInfo: ContactItem[] = [
    {
        label: "Email",
        value: "fordv@arcadia.edu",
        copyable: true,
    },
    {
        label: "Office",
        value: "Boyer Hall 328",
        copyable: false,
    },
    {
        label: "Address",
        value: "450 S Easton Rd, Glenside, PA 19038",
        copyable: true,
    },
    {
        label: "Profile link",
        value: "Arcadia University",
        href: "https://www.arcadia.edu/faculty-and-staff/vitaly-ford/",
    },
];
