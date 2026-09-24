import Image from "next/image";
import pic from "../../assets/logo.png";
const Footer = () => {
    return (
        <footer className="w-full border-t border-[#292c32] bg-[#0a0a0b] mt-10 px-5 py-6">

            <div className="container mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center ">
                    <Image
                        src={pic}
                        alt="FitLog"
                        width={70}
                        height={30}
                        className="h-auto w-auto mr-2 rotate-136"
                    />
                     FIT<span className="text-[#d8ff00]">LOG</span>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-500">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>

        </footer>
    );
};

export default Footer;