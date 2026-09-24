'use client';

import Link from 'next/link';
import React, { useContext } from 'react';
import SaveCard from '../MyPlan/SaveCard';
import { PersonsContext } from '../../context/PersonsContext';

const ShowSavePlan = ({plans}) => {
    const { save } = useContext(PersonsContext);

    return (
        <div className="w-full space-y-3 p-1">

            {save.length > 0 ? (
                plans.map((plan) => (
                    <SaveCard
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
                        Browse the library and add a lift to get saved moving.
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

export default ShowSavePlan;