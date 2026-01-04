import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ExternalLink from "@/components/ExternalLink";

interface ResearchArea {
  title: string;
  image: string;
  description?: string;
}

interface Project {
  title: string;
  description: string;
  href?: string;
  highlights?: string[];
  presenters?: string;
}

const researchAreas: ResearchArea[] = [
  {
    title: "Cybersecurity",
    image: "/images/cybersecurity.jpg",
    description: "Network security, penetration testing, and secure systems design",
  },
  {
    title: "Machine Learning",
    image: "/images/machineLearning.jpg",
    description: "AI-powered security solutions and predictive analytics",
  },
  {
    title: "CS Education",
    image: "/images/education.jpg",
    description: "Innovative approaches to teaching computer science",
  },
  {
    title: "Smart Grid Security",
    image: "/images/smartGrid.jpg",
    description: "Privacy and security for advanced metering infrastructure",
  },
];

const interests = [
  "Smart Grid Security",
  "Data Privacy for Advanced Metering Infrastructure",
  "Energy Fraud Detection",
  "Machine Learning and Artificial Intelligence",
  "Cybersecurity",
  "CS Education",
];

const projects: Project[] = [
  {
    title: "An LLM-Augmented AutoML Framework for End-to-End Data Analysis",
    description:
      "We propose an AutoML-LLM Data Analysis Platform that streamlines end-to-end data analysis workflows by automating data ingestion, cleaning, feature engineering, and model selection. It uses Large Language Models for task detection and research question generation, supporting classification, regression, and clustering. The platform also features automated task type detection, imbalanced data handling, and multi-model benchmarking.",
    presenters: "Jie Xu, Xiangchen Jia",
  },
  {
    title: "Automatic Parking Control System Based on Webots Simulation",
    description:
      "This project constructs a virtual experimental environment for automatic parking control using the Webots simulation platform. It integrates manual driving, GPS/compass-based localization, and a trajectory logging module to support data-driven behavioral modeling. The system allows for both real-time manual teleoperation and trajectory-based autonomous replay in a realistic parking lot environment.",
    presenters: "Erchen Qu, TianYu Xu, Zy Kang",
  },
  {
    title: "ASTRO (Arcadia Student Transformed Remote Observatory)",
    description:
      "The ASTRO project involves designing and implementing a new control system for the observatory on the roof of Boyer Hall. This system enables users to remotely capture astronomical data from the Observatory and control the decades-old dome.",
    presenters: "Paul Broccardi, Cole Baugh, Ian Sharp",
  },
  {
    title: "Artistic Nexus",
    description:
      "Artistic Nexus is a web platform designed to foster a community within the art space by blending traditional art with AI. It allows artists to share their work, network, and utilize AI tools to generate inspiration for future compositions.",
    presenters: "Erin MacIver, David Cortez",
  },
  {
    title: "CatNip",
    description:
      "CatNip is a high-performance password-cracking tool designed to expedite the penetration testing process for Red Teams. It utilizes a High-Performance Computing cluster and a front-end GUI to efficiently process and crack password hashes using Hashcat.",
    presenters: "Philip Ryskalczyk, Tyler Kuhl, Chloe Fox",
  },
  {
    title: "Caring for Friends Delivery App",
    description:
      "This mobile application, built with Flutter and AWS, helps volunteer drivers track deliveries and find efficient routes in a non-profit organization that helps people in need. It leverages Google Maps API for route optimization and provides a user-friendly interface for managing delivery logistics.",
    presenters: "Jason Thomas, Alyssa Quisito, Dylan Alexander",
  },
  {
    title: "RoundTable Realms",
    description:
      "RoundTable Realms is a VR RPG application built in Unreal Engine 5 that combines the convenience of online sessions with the immersion of in-person campaigns. It features customizable 3D environments and an accompanying website for managing character sheets, maps, and campaign materials.",
    presenters: "Zachary Albone, Abby Bock, Jamie Conlin, Corey Klevan",
  },
  {
    title: "DevSecOps in Government Aerospace Defense",
    description:
      "This project integrates automated security vulnerability scanning into DevOps workflows by incorporating Black Duck and Coverity into GitLab CI/CD pipelines. It establishes a framework for nightly security scans in Docker environments to ensure real-time vulnerability detection and remediation.",
    presenters: "Benjamin Baron",
  },
  {
    title: "Wy-Fried",
    description:
      "This project demonstrates different vulnerabilities of WiFi networks by conducting various attacks to show how devices can be compromised. Using tools like WiFi Pineapple and custom scripts, it highlights the importance of network security and the risks of public WiFi usage.",
    presenters: "Dalton Smyrl, Jarrett Williams",
  },
  {
    title: "LangKnight",
    description:
      "LangKnight is an interactive game that challenges users to master English through audio input-based gameplay. It helps players improve their pronunciation, sentence structure, and grammar by using their voice to defeat monsters in various levels.",
    presenters: "Morlaye Yansaneh",
  },
  {
    title: "Developing a Web-Based System for Remote Collection and Analysis of Vehicle Electrical Systems Over CANBus Using Carloop",
    description:
      "This project developed a real-time vehicle monitoring system using Carloop (connected to CAN bus in the vehicle), InfluxDB, and Grafana. It collects and visualizes performance data such as speed, RPM, and coolant temperature, allowing for remote analysis and alerts based on predefined thresholds.",
    presenters: "Joshua Valle, Alex-Columna Fuentes",
  },
  {
    title: "Outsourced Worker's Pay Discrepancies in Computer Science Fields",
    description:
      "This research investigates pay discrepancies between outsourced and insourced workers in data science and cybersecurity. By analyzing wages relative to minimum wage and cost of living, it highlights significant inequities in global compensation practices.",
    presenters: "Xavier Dube",
  },
  {
    title: "Osmo: an open-source and automated plant care system",
    description:
      "Osmo is a low-cost, Raspberry Pi-powered automated plant care system that monitors and adjusts soil moisture levels. It features a web interface for real-time data monitoring and live video streaming, enabling remote plant care from any device.",
    presenters: "Thomas Hoy, Brian Torres",
  },
];

export default function Research() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Research Interests" />

      {/* Research Areas Grid */}
      <section style={{ padding: "2rem 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {researchAreas.map((area) => (
            <div key={area.title} className="research-card">
              <div className="research-card-image" style={{ position: "relative", height: "140px" }}>
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="research-card-title">
                <h3 style={{ fontSize: "1rem", margin: 0, marginBottom: "0.25rem" }}>{area.title}</h3>
                {area.description && (
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>
                    {area.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Research Interests */}
      <section style={{ padding: "2rem 0" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          {interests.map((interest) => (
            <span key={interest} className="cyber-badge" style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}>
              {interest}
            </span>
          ))}
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Projects */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">Recent Projects</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {projects.map((project, index) => (
            <div key={project.title} className="cyber-card">
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    color: "var(--cyber-cyan)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  0{index + 1}
                </span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, marginBottom: "0.5rem" }}>
                    {project.href ? (
                      <ExternalLink href={project.href}>
                        {project.title}
                      </ExternalLink>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", margin: 0 }}>{project.description}</p>
                  {project.presenters && (
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                      <strong>Students:</strong> {project.presenters}
                    </p>
                  )}
                </div>
              </div>

              {project.highlights && (
                <ul
                  style={{
                    marginLeft: "2.5rem",
                    marginBottom: 0,
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "0.25rem 1rem",
                  }}
                >
                  {project.highlights.map((highlight) => (
                    <li key={highlight} style={{ fontSize: "0.9rem" }}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="cyber-divider" />

      {/* CTF Unplugged */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">CTF Unplugged</h2>
        <div className="cyber-card">
          <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: "1.7" }}>
            Inspired by the Computer Science Unplugged project, a Capture the Flag (CTF) Unplugged was born as an offline cybersecurity competition for high schools.{" "}
            <ExternalLink href="/ctf-unplugged/CTF_Unplugged_May_2019.docx">
              CTF Unplugged
            </ExternalLink>{" "}
            introduces participants to cybersecurity competitions by engaging in a fun team-based competition without a need for technical preparation. If you are interested in the project or would like to receive the answers to the CTF Unplugged, please contact me.
          </p>
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Collaboration */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">Collaboration</h2>

        <div className="cyber-card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ margin: 0, color: "var(--text-secondary)", flex: 1, minWidth: "200px" }}>
            I am open for collaboration on various cybersecurity, machine learning, and education projects.
          </p>
          <a href="/contact" className="cyber-btn">
            <span>Get in Touch</span>
          </a>
        </div>
      </section>
    </div>
  );
}
