'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import TodayPlanRemoveButton from '../RemoveButton/TodayPlanRemoveButton';

const MyplanCard = ({ plan }) => {
    const [isDone, setIsdone] = useState('no');
    const handleReadButton = () => {
        if (isDone === 'no') {
            setIsdone('yes')
            toast.success(`marks the ${plan.name} is done`);
            return;
        }
        toast.warning(` ${plan.name} is already marks `);

    }

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

                    <div>
                        <button
                            onClick={() => handleReadButton()}
                            className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${isDone === 'no'
                                    ? 'bg-lime-400 text-black shadow-sm hover:scale-105 hover:bg-lime-300 hover:shadow-lg'
                                    : 'border border-lime-400 bg-transparent text-lime-400 hover:bg-lime-400 hover:text-black'
                                }`}
                        >
                            {isDone === 'no' ? '✓ Mark as Done' : '✓ Completed'}
                        </button>
                    </div>
                    <div>
                        <TodayPlanRemoveButton plan={plan}></TodayPlanRemoveButton>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyplanCard;