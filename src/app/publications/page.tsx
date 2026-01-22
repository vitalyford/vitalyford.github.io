import PageHeader from "@/components/PageHeader";
import { publications } from "@/data/publications";
import ExternalLink from "@/components/ExternalLink";
import { getPublicationStats } from "@/utils/academicUtils";

export default function Publications() {
  const { totalPapers, yearsActive } = getPublicationStats();

  return (
    <div className="animate-fade-in">
      <PageHeader title="Publications" />

      {/* Stats */}
      <section className="section" style={{ padding: "1rem 0 2rem" }}>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--cyber-cyan)",
              }}
            >
              {totalPapers}
            </span>
            <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem" }}>Publications</span>
          </div>
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--cyber-cyan)",
              }}
            >
              {yearsActive}
            </span>
            <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem" }}>Years Active</span>
          </div>
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Publications by Year */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        {publications.map((pub, index) => (
          <div
            key={pub.year}
            style={{ marginBottom: index < publications.length - 1 ? "2.5rem" : 0 }}
          >
            {/* Year Header */}
            <div className="publication-year">
              <span style={{ fontFamily: "var(--font-mono), monospace" }}>{pub.year}</span>
            </div>

            {/* Papers */}
            <div
              style={{
                borderLeft: "2px solid var(--cyber-border)",
                paddingLeft: "1.5rem",
                marginLeft: "5px",
              }}
            >
              {pub.papers.map((paper, paperIndex) => (
                <div key={paperIndex} className="publication-item">
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      margin: 0,
                      lineHeight: 1.7,
                    }}
                  >
                    {paper.url && paper.url !== "" && paper.url !== "#" ? (
                      <ExternalLink href={paper.url} style={{ fontWeight: 500 }}>
                        {paper.name}
                      </ExternalLink>
                    ) : (
                      <span style={{ color: "var(--text-primary)" }}>{paper.name}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
