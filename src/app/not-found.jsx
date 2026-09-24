import Link from "next/link";

export default function NotFound() {
    return (
      <div className="min-h-screen bg-[#0b0b0d] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-[#d8ff00]">
            404
          </h1>
  
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Page Not Found
          </h2>
  
          <p className="mt-2 text-gray-400">
            The page you are looking for does not exist.
          </p>
  
          <Link
            href="/"
            className="inline-block mt-6 rounded-full bg-[#d8ff00] px-6 py-3 text-sm font-semibold text-black hover:bg-[#c5eb00]"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }