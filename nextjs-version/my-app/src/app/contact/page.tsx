"use client";

import PageHeader from "@/components/PageHeader";
import { useState } from "react";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
}

const contactInfo: ContactItem[] = [
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
    label: "Profile",
    value: "Arcadia University",
    href: "https://www.arcadia.edu/faculty-and-staff/vitaly-ford/",
  },
];

export default function Contact() {
  const [tooltipText, setTooltipText] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setTooltipText("Copied to clipboard!");
      setTimeout(() => setTooltipText(null), 2000);
    } catch {
      setTooltipText("Failed to copy");
      setTimeout(() => setTooltipText(null), 2000);
    }
  };

  return (
    <div className="animate-fade-in">
      <PageHeader title="Contact" subtitle="Let's connect and collaborate" />

      <section style={{ padding: "2rem 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Contact Info Card */}
          <div className="cyber-card">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-row" style={{ padding: "0", borderBottom: "none" }}>
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
                        onClick={() => copyToClipboard(item.value)}
                        aria-label={`Copy ${item.label}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connect Card */}
          <div className="cyber-card">
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              I&apos;m always interested in discussing research collaborations, cybersecurity education,
              and innovative projects. Feel free to reach out!
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="https://linkedin.com/in/vitalyford"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn"
                style={{ flex: 1, minWidth: "120px" }}
              >
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/vitalyford"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn"
                style={{ flex: 1, minWidth: "120px" }}
              >
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section style={{ padding: "2rem 0" }}>
        <div className="cyber-card">
          <h3 className="section-heading" style={{ marginBottom: "1rem" }}>Office Hours</h3>
          <p style={{ color: "var(--text-secondary)", margin: 0 }}>
            For office hours and scheduling, please check my{" "}
            <a href="/schedule">schedule page</a> or email me to set up a meeting.
          </p>
        </div>
      </section>

      {/* Toast Notification */}
      {tooltipText && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "2rem",
            background: "var(--cyber-surface)",
            border: "1px solid var(--cyber-cyan)",
            color: "var(--cyber-cyan)",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            zIndex: 1000,
            boxShadow: "0 0 20px var(--cyber-cyan-glow)",
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.9rem",
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}
