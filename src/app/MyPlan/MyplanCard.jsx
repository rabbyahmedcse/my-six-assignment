'use client';

import Image from 'next/image';
import Link from 'next/link';

const MyplanCard = ({ plan }) => {
    return (
        <div className="w-full rounded-2xl border border-[#292c32] bg-[#15171c] p-3 transition-all duration-300 hover:scale-[1.01] hover:border-lime-400/40">

            <div className="flex items-center gap-4">

                <Image width={400} height={400}
                    src={plan.image}
                    alt={plan.name}
                    className="h-16 w-28 rounded-lg object-cover"
                />

                <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-bold uppercase text-white">
                        {plan.name}
                    </h2>

                    <p className="text-xs text-gray-400">
                        {plan.equipment}
                    </p>

                   
                    <div className="mt-1 flex items-center gap-3 text-xs text-gray-300">

<span className="flex items-center gap-1">
    <span className="text-lime-400">◯</span>
    {plan.duration} min
</span>

<span className="flex items-center gap-1">
    <span className="text-lime-400">♨</span>
    {plan.caloriesBurned} kcal
</span>

<span className="flex items-center gap-1">
    <span className="text-lime-400">☆</span>
    {plan.rating}
</span>

</div>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href={`/Workout/${plan.id}`}
                        className="rounded-full border border-gray-600 px-5 py-2 text-xs text-white hover:border-lime-400"
                    >
                        View Details
                    </Link>

                    <button className="rounded-full bg-lime-400 px-5 py-2 text-xs font-semibold text-black hover:bg-lime-300">
                        Mark as Done
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MyplanCard;