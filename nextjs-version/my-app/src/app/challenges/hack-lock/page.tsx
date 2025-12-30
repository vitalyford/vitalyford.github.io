"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

// Extend Window interface for patternLock
declare global {
  interface Window {
    patternLock?: {
      init: () => void;
      generate: (element: HTMLElement) => void;
    };
  }
}

export default function HackLockChallenge() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (scriptLoaded && window.patternLock) {
      // Give a small delay to ensure DOM is ready
      setTimeout(() => {
        const passwordInput = document.getElementById("password");
        if (passwordInput && window.patternLock) {
          window.patternLock.generate(passwordInput);
        }
      }, 100);
    }
  }, [scriptLoaded]);

  const submitform = () => {
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    let p = parseInt(passwordInput.value);

    if (p % 10 === 2) {
      p = (p - (p % 10)) / 10;
      if (p % 10 === 6) {
        p = (p - (p % 10)) / 10;
        if (p % 10 === 8) {
          p = (p - (p % 10)) / 10;
          if (p % 10 === 4) {
            p = (p - (p % 10)) / 10;
            if (p % 10 === 2) {
              p = (p - (p % 10)) / 10;
              if (p % 10 === 3) {
                p = (p - (p % 10)) / 10;
                if (p % 10 === 5) {
                  p = (p - (p % 10)) / 10;
                  if (p % 10 === 1) {
                    // Success message
                    alert("Check out this page: /challenges/hack-lock/fun-done.png");
                    return false;
                  }
                }
              }
            }
          }
        }
      }
    }
    alert("You entered " + passwordInput.value);
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col">
      <div className="container mx-auto px-6 py-8">
        <Link
          href="/challenges"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Challenges
        </Link>

        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Pattern Lock Challenge</h1>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitform();
              }}
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Please Login</h2>

              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="patternlock w-full"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Login
              </button>
            </form>
          </div>

          <div className="mt-8 text-gray-300 text-sm">
            <p>
              💡 Hint: The pattern matters! Try to find the correct sequence to unlock the
              challenge.
            </p>
          </div>
        </div>
      </div>

      <Script
        src="/challenges/hack-lock/js/patternlock.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />

      <style jsx global>{`
        @import url("/challenges/hack-lock/css/patternlock.css");
      `}</style>
    </div>
  );
}
