import TodayPlanButton from '../../component/TodayPlanButton/TodayPlan';
import Image from 'next/image';
import React from 'react';
import SaveButton from '../../component/saveButton/SaveButton';
import { notFound } from 'next/navigation';

const PersonDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    if (!res.ok) {
        notFound();
    }

    const persons = await res.json();

    return (
        <div className="min-h-screen bg-[#0d0f12] px-4 py-8 pt-10 text-white sm:px-6 lg:px-8">

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">

             
                <div className="flex items-start justify-center">
                    <Image
                        width={400}
                        height={400}
                        src={persons.image}
                        alt={persons.name}
                        className="h-auto max-h-[500px] w-full rounded-lg object-cover"
                    />
                </div>


               
                <div className="min-w-0">

                 
                    <h1 className="text-2xl font-bold uppercase sm:text-3xl">
                        {persons.name}
                    </h1>


                   
                    <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
                        {persons.description}
                    </p>


                   
                    <div className="mt-4 flex flex-wrap gap-2">
                        {persons.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold text-black sm:text-xs"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>


                   
                    <div className="mt-4 overflow-hidden rounded-lg border border-gray-700 bg-[#15181e]">

                        <div className="flex items-center justify-between gap-4 border-b border-gray-700 px-3 py-3 text-xs sm:px-4 sm:text-sm">
                            <span className="text-gray-400">EQUIPMENT</span>
                            <span className="text-right font-semibold">
                                {persons.equipment}
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-4 border-b border-gray-700 px-3 py-3 text-xs sm:px-4 sm:text-sm">
                            <span className="text-gray-400">DIFFICULTY</span>
                            <span className="text-right font-semibold">
                                {persons.difficulty}
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-4 border-b border-gray-700 px-3 py-3 text-xs sm:px-4 sm:text-sm">
                            <span className="text-gray-400">SETS</span>
                            <span className="text-right font-semibold">
                                {persons.sets}
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-4 border-b border-gray-700 px-3 py-3 text-xs sm:px-4 sm:text-sm">
                            <span className="text-gray-400">REPS</span>
                            <span className="text-right font-semibold">
                                {persons.reps}
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-4 border-b border-gray-700 px-3 py-3 text-xs sm:px-4 sm:text-sm">
                            <span className="text-gray-400">DURATION</span>
                            <span className="text-right font-semibold">
                                {persons.duration} min
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-4 border-b border-gray-700 px-3 py-3 text-xs sm:px-4 sm:text-sm">
                            <span className="text-gray-400">CALORIES</span>
                            <span className="text-right font-semibold">
                                {persons.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-4 px-3 py-3 text-xs sm:px-4 sm:text-sm">
                            <span className="text-gray-400">RATING</span>
                            <span className="text-right font-semibold">
                                {persons.rating}
                            </span>
                        </div>

                    </div>


                
                    <h2 className="mt-5 text-base font-bold uppercase sm:text-lg">
                        INSTRUCTIONS
                    </h2>

                    <ol className="mt-3 space-y-2 text-xs leading-relaxed text-gray-300 sm:text-sm">
                        {persons.instructions.map((instruction, index) => (
                            <li key={index}>
                                {index + 1}. {instruction}
                            </li>
                        ))}
                    </ol>


                  
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-5">
                        <TodayPlanButton person={persons} />

                        <SaveButton person={persons} />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default PersonDetailsPage;