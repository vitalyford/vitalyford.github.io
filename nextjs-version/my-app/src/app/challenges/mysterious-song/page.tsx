import Link from "next/link";

export default function MysteriousSongChallenge() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col">
      <div className="container mx-auto px-6 py-8">
        <Link
          href="/challenges"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-6"
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

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Mysterious Song Challenge
          </h1>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
            <pre className="text-gray-200 whitespace-pre-wrap font-mono text-sm leading-relaxed">
              {`You have been given a task to decode the secret message that was found on Eve's machine.

Eve's machine is quite powerful and has more cores (aka processors) than a normal machine.
Apparently, it has as many cores (aka processors) as half of the ASCII number representing space.
Here is the message:

NTc3OTg1MDg0NzI3OTg1NzE3Mjg0MDg5Nzk4NTA2NTgyNjkwNjg3OTc4NjkzMTA1MjcyNjkwNzA4NTc4MDcyNjU4MzA3NDg1ODM4NDA2NjY5NzE4NTc4MTQwMzg3OTc2NzY3OTg3MDg0NzI2OTA3NjczNzg3NTA4NzczODQ3MjA2NTA4MzczODAwNzk3MDA4OTc5ODU4MjA2ODgyNzM3ODc1MjYwNzI4NDg0ODA4MzI2MTUxNTg2NzA3OTgyNjgxNDc3NjkxNTE4MTcyNDIwMTY2NzE3NjUxOTY5MTk2ODY2MjIyNTY5MTYxNzIwMjAyMTY3MjQyMzI0MTg2NTI1MjU3MDI1NjY

We also found the code that Eve used to encode the message but we failed to find a function that can decode it.
Here is the code for encoding:

import java.util.Base64;

public class SuperSecureSecretSocks {

    public static String messStuffUp(String input) {

        int numberOfCores = Runtime.getRuntime().availableProcessors();
        int[] ascii = new int[input.length()];

        for (int i = 0; i < input.length(); i++) {
            ascii[i] = (int) input.charAt(i);
        }

        for (int i = 0; i < input.length(); i++) {
            ascii[i] = ascii[i] - numberOfCores * 2;
        }

        String asciiString = "";
        for (int i = 0; i < input.length(); i++) {
            asciiString += ascii[i];
        }

        String base64encoded = Base64.getEncoder().withoutPadding().encodeToString(asciiString.getBytes());

        return base64encoded;
    }
}`}
            </pre>
          </div>

          <div className="mt-8 bg-purple-900/30 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Challenge Hints
            </h2>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>🔢 Figure out how many cores Eve&apos;s machine has based on the ASCII value hint</li>
              <li>🔓 The encoding process has three steps - you&apos;ll need to reverse them</li>
              <li>📝 Base64 decode first, then work backwards through the transformations</li>
              <li>🎵 The final message might reveal something musical...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
