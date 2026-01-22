import { ContactItem } from "@/data/contact";

interface ContactInfoRowProps {
    item: ContactItem;
    onCopy: (text: string) => void;
}

export default function ContactInfoRow({ item, onCopy }: ContactInfoRowProps) {
    return (
        <div className="contact-row" style={{ padding: "0", borderBottom: "none" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    width: "100%",
                }}
            >
                <div>
                    <div
                        style={{
                            fontFamily: "var(--font-mono), monospace",
                            color: "var(--cyber-cyan)",
                            fontSize: "0.75rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginBottom: "0.25rem",
                        }}
                    >
                        {item.label}
                    </div>
                    <div style={{ color: "var(--text-secondary)" }}>
                        {item.href ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                {item.value}
                            </a>
                        ) : (
                            item.value
                        )}
                    </div>
                </div>
                {item.copyable && (
                    <button
                        className="copy-btn"
                        onClick={() => onCopy(item.value)}
                        aria-label={`Copy ${item.label}`}
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}
