
import TodayPlanButton from '../../component/TodayPlanButton/TodayPlan';
import Image from 'next/image';
import React from 'react';
import SaveButton from '../../component/saveButton/SaveButton';
import { notFound } from 'next/navigation';


const PersonDetailsPage = async({params}) => {
    const {id} = await params;
 const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
 if (!res.ok) {
    notFound();
}
 const persons = await res.json();
 return (
    <div className="min-h-screen bg-[#0d0f12] p-6 text-white pt-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">

            <div className="flex items-center justify-center">
                <Image width={400} height={400}
                    src={persons.image}
                    alt={persons.name}
                    className="h-full max-h-[500px] w-full rounded-lg object-cover"
                />
            </div>

            
            <div>
                
                <h1 className="text-3xl font-bold uppercase">
                    {persons.name}
                </h1>

                
                <p className="mt-2 text-sm text-gray-400">
                    {persons.description}
                </p>

                
                <div className="mt-4 flex gap-2">
                    {persons.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

               
                <div className="mt-4 overflow-hidden rounded-lg border border-gray-700 bg-[#15181e]">

                    <div className="flex justify-between border-b border-gray-700 px-4 py-3 text-sm">
                        <span className="text-gray-400">EQUIPMENT</span>
                        <span className="font-semibold">{persons.equipment}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-700 px-4 py-3 text-sm">
                        <span className="text-gray-400">DIFFICULTY</span>
                        <span className="font-semibold">{persons.difficulty}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-700 px-4 py-3 text-sm">
                        <span className="text-gray-400">SETS</span>
                        <span className="font-semibold">{persons.sets}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-700 px-4 py-3 text-sm">
                        <span className="text-gray-400">REPS</span>
                        <span className="font-semibold">{persons.reps}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-700 px-4 py-3 text-sm">
                        <span className="text-gray-400">DURATION</span>
                        <span className="font-semibold">
                            {persons.duration} min
                        </span>
                    </div>

                    <div className="flex justify-between border-b border-gray-700 px-4 py-3 text-sm">
                        <span className="text-gray-400">CALORIES</span>
                        <span className="font-semibold">
                            {persons.caloriesBurned} kcal
                        </span>
                    </div>

                    <div className="flex justify-between px-4 py-3 text-sm">
                        <span className="text-gray-400">RATING</span>
                        <span className="font-semibold">
                            {persons.rating}
                        </span>
                    </div>

                </div>

                
                <h2 className="mt-5 text-lg font-bold uppercase">
                    INSTRUCTIONS
                </h2>

                <ol className="mt-3 space-y-2 text-sm text-gray-300">
                    {persons.instructions.map((instruction, index) => (
                        <li key={index}>
                            {index + 1}. {instruction}
                        </li>
                    ))}
                </ol>

                
                <div className="mt-6 flex gap-10">
                   <TodayPlanButton person={persons}></TodayPlanButton>

                   <SaveButton person={persons}></SaveButton>
                </div>
            </div>

        </div>
    </div>
);
};

export default PersonDetailsPage;