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

  return (
    <div className="animate-fade-in">
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
