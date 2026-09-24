'use client';

import React, { useContext } from 'react';
import { PersonsContext } from '../../context/PersonsContext';

const MyTodaySummary = () => {
    const { save } = useContext(PersonsContext);

    const totalMinutes = save.reduce(
        (total, plan) => total + plan.duration,
        0
    );

    const totalCalories = save.reduce(
        (total, plan) => total + plan.caloriesBurned,
        0
    );

    return (
        <div className="mb-6">
            
            {/* Heading */}
            <h1 className="text-2xl font-bold uppercase text-white">
                MY PLAN
            </h1>

            <p className="mt-1 text-sm text-gray-400">
                Cap of five lifts for Save. Finish them, then load more.
            </p>


            {/* Summary Card */}
            <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-2xl border border-[#292c32] bg-[#15171c]">

                {/* Exercises */}
                <div className="p-5">
                    <p className="text-xs text-gray-400">
                        Exercises
                    </p>

                    <h2 className="mt-1 text-3xl font-bold text-lime-400">
                        {save.length}
                    </h2>
                </div>


                {/* Minutes */}
                <div className="border-l border-[#292c32] p-5">
                    <p className="text-xs text-gray-400">
                        Minutes
                    </p>

                    <h2 className="mt-1 text-3xl font-bold text-white">
                        {totalMinutes}
                    </h2>
                </div>


                {/* Calories */}
                <div className="border-l border-[#292c32] p-5">
                    <p className="text-xs text-gray-400">
                        Calories
                    </p>

                    <h2 className="mt-1 text-3xl font-bold text-white">
                        {totalCalories}
                    </h2>
                </div>

            </div>

        </div>
    );
};

export default MyTodaySummary;