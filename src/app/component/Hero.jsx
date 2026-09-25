import Link from "next/link";
import Image from "next/image";
import heroimg from "../../assets/banner.png";

const Hero = () => {
    return (
        <section className="container mx-auto bg-[#0b0b0d] px-3 py-3 sm:px-6 sm:py-4">

            <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center overflow-hidden rounded-xl border border-[#24262c] bg-[#15171c] px-5 py-6 sm:px-8 sm:py-8 md:grid-cols-3 md:px-10 lg:min-h-[235px] lg:px-12">

                <div className="max-w-[600px] md:col-span-2">

                    <p className="mb-3 text-[8px] font-bold uppercase tracking-wide text-[#d8ff00] sm:text-[9px]">
                        Workout Library
                    </p>

                    <h1 className="max-w-[700px] text-2xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-3xl md:text-4xl">
                        Train With Intent. Log
                        <br className="hidden sm:block" />
                        {" "}Every Set.
                    </h1>

                    <p className="mt-3 max-w-[480px] text-[9px] leading-relaxed text-gray-400 sm:text-[10px] md:text-xs">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today's plan, and watch the week's work add up.
                    </p>

                    <Link
                        href="/Workout"
                        className="mt-4 inline-flex items-center rounded-md bg-[#d8ff00] px-4 py-2 text-[9px] font-bold uppercase text-black transition duration-200 hover:scale-105 hover:bg-[#c5eb00] sm:px-5 sm:py-2.5"
                    >
                        Browse Workouts
                    </Link>

                </div>

               
                <div className="relative mt-5 h-[130px] w-full sm:mt-6 sm:h-[160px] md:mt-0 md:h-[200px] lg:h-[210px]">

                    <Image
                        src={heroimg}
                        alt="Workout illustration"
                        fill
                        className="object-contain"
                        priority
                    />

                </div>

            </div>

        </section>
    );
};

export default Hero;