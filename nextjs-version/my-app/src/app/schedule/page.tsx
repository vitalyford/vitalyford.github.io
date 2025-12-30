import PageHeader from "@/components/PageHeader";

export default function Schedule() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Current Semester Schedule" />

      <section style={{ padding: "2rem 0" }}>
        <div className="cyber-card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "var(--cyber-cyan-glow)",
                border: "1px solid var(--cyber-cyan)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--cyber-cyan)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 style={{ margin: 0, color: "var(--text-primary)" }}>Schedule Notice</h3>
          </div>

          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
            My schedule tends to be in an <span style={{ color: "var(--cyber-cyan)" }}>unstable version</span>.
            <br />
            Email or Discord is the best way to reach me and set up a meeting if there are no appointments below.
          </p>

          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="/et" className="cyber-btn cyber-btn-primary" target="_blank" rel="noopener noreferrer">
              <span>Schedule Meeting</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
