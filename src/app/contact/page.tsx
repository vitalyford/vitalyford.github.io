"use client";

import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { contactInfo } from "@/data/contact";
import ContactInfoRow from "@/components/contact/ContactInfoRow";

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
      <PageHeader title="Contact" />

      <section className="section" style={{ paddingTop: "2rem" }}>
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
                <ContactInfoRow key={item.label} item={item} onCopy={copyToClipboard} />
              ))}
            </div>
          </div>

          {/* Connect Card */}
          <div className="cyber-card">
            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
              }}
            >
              I&apos;m always interested in discussing research collaborations, cybersecurity
              education, and innovative projects. <br /><br />Ping me!
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href="https://linkedin.com/in/vitalyford"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn"
              >
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/vitalyford"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn"
              >
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="cyber-card">
          <h3 className="section-heading" style={{ marginBottom: "1rem" }}>
            Office Hours
          </h3>
          <p style={{ color: "var(--text-secondary)", margin: 0 }}>
            For office hours and scheduling, please check my <a href="/schedule">schedule page</a>{" "}
            or email me to set up a meeting.
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
