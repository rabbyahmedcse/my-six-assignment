'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import MyplanCard from '../MyPlan/MyplanCard';
import { PersonsContext } from '../../context/PersonsContext';

const ShowCard = ({plans}) => {
    const { todayPlan } = useContext(PersonsContext);

    return (
        <div className="space-y-3 bg-[#0a0a0b] p-1">

            {todayPlan.length > 0 ? (
                plans.map((plan) => (
                    <MyplanCard
                        key={plan.id}
                        plan={plan}
                    />
                ))
            ) : (
                <div className="flex min-h-[250px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#292c32] bg-[#0f1115]">

                    <h2 className="text-lg font-bold uppercase text-white">
                        Nothing Here Yet
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                        href="/Workout"
                        className="mt-5 rounded-full bg-lime-400 px-6 py-2 text-xs font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-300"
                    >
                        Go to workouts
                    </Link>

                </div>
            )}

        </div>
    );
};

export default ShowCard;