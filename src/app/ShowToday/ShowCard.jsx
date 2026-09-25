'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import MyplanCard from '../MyPlan/MyplanCard';
import { PersonsContext } from '../../context/PersonsContext';

const ShowCard = ({ plans }) => {
    const { todayPlan } = useContext(PersonsContext);

    return (
        <div className="w-full space-y-3 bg-[#0a0a0b] p-0 sm:p-1">

            {todayPlan.length > 0 ? (
                plans.map((plan) => (
                    <MyplanCard
                        key={plan.id}
                        plan={plan}
                    />
                ))
            ) : (
                <div className="flex min-h-[220px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#292c32] bg-[#0f1115] px-4 py-8 text-center sm:min-h-[250px]">

                    <h2 className="text-base font-bold uppercase text-white sm:text-lg">
                        Nothing Here Yet
                    </h2>

                    <p className="mt-1 max-w-[280px] text-[10px] leading-relaxed text-gray-500 sm:max-w-md sm:text-xs">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                        href="/Workout"
                        className="mt-4 rounded-full bg-lime-400 px-5 py-2 text-[10px] font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-300 sm:mt-5 sm:px-6 sm:text-xs"
                    >
                        Go to workouts
                    </Link>

                </div>
            )}

        </div>
    );
};

export default ShowCard;