import Image from "next/image";
import pic from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="mt-10 w-full border-t border-[#292c32] bg-[#0a0a0b] px-4 py-5 sm:px-5 sm:py-6">

            <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">

               
                <div className="flex items-center">
                    <Image
                        src={pic}
                        alt="FitLog"
                        width={70}
                        height={30}
                        className="mr-2 h-auto w-auto rotate-136"
                    />

                    <span className="text-sm font-bold text-white sm:text-base">
                        FIT<span className="text-[#d8ff00]">LOG</span>
                    </span>
                </div>


                
                <p className="text-center text-[10px] text-gray-500 sm:text-xs">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>

        </footer>
    );
};

export default Footer;