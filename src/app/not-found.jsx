import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center bg-[#0b0b0d] px-4 text-center">
            
            <h1 className="text-7xl font-black text-[#ccff00]">
                404
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-white">
                Page Not Found
            </h2>

            <p className="mt-2 max-w-md text-sm text-gray-400">
                Sorry, the page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-[#b8e600]"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;