export interface ResearchArea {
    title: string;
    image: string;
    description?: string;
}

export interface Project {
    title: string;
    description: string;
    href?: string;
    highlights?: string[];
    presenters?: string;
}

export const researchAreas: ResearchArea[] = [
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

export const interests = [
    "Smart Grid Security",
    "Data Privacy for Advanced Metering Infrastructure",
    "Energy Fraud Detection",
    "Machine Learning and Artificial Intelligence",
    "Cybersecurity",
    "CS Education",
];

export const projects: Project[] = [
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
