import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Challenges | Vitaly Ford",
  description: "Interactive cybersecurity challenges and CTF puzzles for learning and fun",
};

interface Challenge {
  title: string;
  description: string;
  href: string;
  difficulty: "Easy" | "Medium" | "Hard";
  type: "Interactive" | "PDF" | "Resource";
  icon: string;
}

const challenges: Challenge[] = [
  {
    title: "Pattern Lock",
    description: "Can you crack the pattern lock? Test your logic and pattern recognition skills.",
    href: "/challenges/hack-lock",
    difficulty: "Medium",
    type: "Interactive",
    icon: "🔐",
  },
  {
    title: "Mysterious Song",
    description: "Decode the secret message from Eve's machine. Reverse engineering and cryptography skills required.",
    href: "/challenges/mysterious-song",
    difficulty: "Hard",
    type: "Interactive",
    icon: "🎵",
  },
  {
    title: "Catch Me If You Can",
    description: "A challenging PDF puzzle. Can you find what's hidden inside?",
    href: "/challenges/catch-me/if-you-can.pdf",
    difficulty: "Easy",
    type: "PDF",
    icon: "📄",
  },
];

interface Resource {
  title: string;
  description: string;
  href: string;
  icon: string;
}

const ctfResources: Resource[] = [
  {
    title: "CTF Unplugged Guide",
    description: "Complete guide for running unplugged CTF competitions",
    href: "/ctf-unplugged/CTF-Unplugged.pdf",
    icon: "📚",
  },
  {
    title: "CTF Flyer",
    description: "Promotional flyer for CTF events",
    href: "/ctf-unplugged/Flyer-for-CTF.pdf",
    icon: "📢",
  },
  {
    title: "Wireshark Log Appendix",
    description: "Sample Wireshark log for network analysis practice",
    href: "/ctf-unplugged/AppendixA-WiresharkLog.pdf",
    icon: "🔬",
  },
  {
    title: "CTF Unplugged (May 2019)",
    description: "Event documentation from May 2019",
    href: "/ctf-unplugged/CTF_Unplugged_May_2019.docx",
    icon: "📝",
  },
];

export default function ChallengesPage() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/20 text-green-300 border-green-500/50";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/50";
      case "Hard":
        return "bg-red-500/20 text-red-300 border-red-500/50";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/50";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Interactive":
        return "bg-blue-500/20 text-blue-300 border-blue-500/50";
      case "PDF":
        return "bg-purple-500/20 text-purple-300 border-purple-500/50";
      case "Resource":
        return "bg-teal-500/20 text-teal-300 border-teal-500/50";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/50";
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Cybersecurity Challenges
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Test your skills with interactive puzzles, cryptography challenges, and CTF exercises
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="text-4xl mr-3">🎯</span>
            Active Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Link
                key={index}
                href={challenge.href}
                target={challenge.type === "PDF" ? "_blank" : undefined}
                rel={challenge.type === "PDF" ? "noopener noreferrer" : undefined}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{challenge.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {challenge.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(
                      challenge.difficulty
                    )}`}
                  >
                    {challenge.difficulty}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(
                      challenge.type
                    )}`}
                  >
                    {challenge.type}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTF Resources */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="text-4xl mr-3">🏴‍☠️</span>
            CTF Unplugged Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ctfResources.map((resource, index) => (
              <a
                key={index}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-linear-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{resource.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{resource.description}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 group-hover:text-purple-300 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Information Box */}
        <div className="mt-16 bg-cyan-900/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">About These Challenges</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These challenges are designed to help students and cybersecurity enthusiasts develop
                practical skills in various domains including cryptography, reverse engineering,
                forensics, and logical thinking.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Feel free to use these resources in your classroom or for self-study. If you create
                solutions or writeups, please share them with proper attribution!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
