import Script from "next/script";
import GitHubActivityFun from "@/components/GitHubActivityFun";
import AdventOfRustShowcase from "@/components/AdventOfRustShowcase";
import QuotesStream from "@/components/QuotesStream";
import { getPublicationStats } from "@/utils/academicUtils";

import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AchievementsSection from "@/components/home/AchievementsSection";
import AboutSection from "@/components/home/AboutSection";

export const dynamic = 'force-dynamic';

export default function Home() {
  const { totalPapers, yearsActive } = getPublicationStats();
  const citationCount = process.env.SCHOLAR_CITATIONS || "721";
  const isLerliaEnabled = process.env.NEXT_PUBLIC_LERLIA === "true";

  return (
    <div className="animate-fade-in">
      {isLerliaEnabled && (
        <Script
          src="https://privacy-staging.lerlia.com/snippet/v1.js"
          data-key="pk_test_f231055fc9b24bf7879f16f645b39e4b"
          data-privacy-slug="c4ea918e25ee42629550e59a06b7faf4"
        />
      )}
      <HeroSection />

      <StatsSection
        totalPapers={totalPapers}
        citationCount={citationCount}
        yearsActive={yearsActive}
      />

      <div className="cyber-divider" />

      {/* GitHub Activity */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">GitHub Activity</h2>
        <div className="cyber-card" style={{ padding: "1.5rem", overflow: "hidden" }}>
          <GitHubActivityFun username="vitalyford" />
        </div>
      </section>

      <div className="cyber-divider" />

      <AdventOfRustShowcase />

      <div className="cyber-divider" />

      <FeaturedProjects />

      <div className="cyber-divider" />

      <AchievementsSection />

      <div className="cyber-divider" />

      <AboutSection />

      <div className="cyber-divider" />

      <QuotesStream />
    </div>
  );
}
