import Link from "next/link";
import Image from "next/image";
import heroimg from "../../assets/banner.png";
const Hero = () => {
    return (
        <section className="container mx-auto bg-[#0b0b0d] px-4 py-4 sm:px-6">

<div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center overflow-hidden rounded-xl border border-[#24262c] bg-[#15171c] px-6 py-8 sm:px-10 md:grid-cols-3 md:px-12 lg:min-h-[235px]">

<div className="max-w-[600px] md:col-span-2">

    <p className="mb-3 text-[8px] font-bold uppercase tracking-wide text-[#d8ff00] sm:text-[9px]">
        Workout Library
    </p>


    <h1 className="max-w-[700px] text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-4xl">
        Train With Intent. Log
        <br />
        Every Set.
    </h1>


    <p className="mt-3 max-w-[480px] text-[9px] leading-relaxed text-gray-400 sm:text-[10px]">
        FitLog is a dark, no-nonsense gym companion: pick a lift,
        lock it into today's plan, and watch the week's work add up.
    </p>


    <Link
        href="/Workout"
        className="mt-4 inline-flex items-center rounded-md bg-[#d8ff00] px-4 py-2 text-[9px] font-bold uppercase text-black transition duration-200 hover:scale-105 hover:bg-[#c5eb00]"
    >
        Browse Workouts
    </Link>

</div>


<div className="relative col-span-1 hidden h-[190px] w-full shrink-0 sm:block md:h-[210px]">

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