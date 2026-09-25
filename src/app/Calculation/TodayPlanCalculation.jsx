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

            
            <h1 className="text-xl font-bold uppercase text-white sm:text-2xl">
                MY PLAN
            </h1>

            <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Cap of five lifts for Save. Finish them, then load more.
            </p>


            
            <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#292c32] bg-[#15171c] sm:grid-cols-3">

                
                <div className="p-4 sm:p-5">
                    <p className="text-xs text-gray-400">
                        Exercises
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-lime-400 sm:text-3xl">
                        {save.length}
                    </h2>
                </div>


                
                <div className="border-t border-[#292c32] p-4 sm:border-l sm:border-t-0 sm:p-5">
                    <p className="text-xs text-gray-400">
                        Minutes
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                        {totalMinutes}
                    </h2>
                </div>


               
                <div className="border-t border-[#292c32] p-4 sm:border-l sm:border-t-0 sm:p-5">
                    <p className="text-xs text-gray-400">
                        Calories
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                        {totalCalories}
                    </h2>
                </div>

            </div>

        </div>
    );
};

export default MyTodaySummary;