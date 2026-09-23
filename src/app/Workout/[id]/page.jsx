import Image from 'next/image';
import React from 'react';


const PersonDetailsPage = async({params}) => {
    const {id} = await params;
 const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
 const exercise = await res.json();
 return (
    <div className="min-h-screen bg-[#0d0f12] p-6 text-white pt-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">

            <div className="flex items-center justify-center">
                <Image width={400} height={400}
                    src={exercise.image}
                    alt={exercise.name}
                    className="h-full max-h-[500px] w-full rounded-lg object-cover"
                />
            </div>

            
            <div>
                
                <h1 className="text-3xl font-bold uppercase">
                    {exercise.name}
                </h1>

                
                <p className="mt-2 text-sm text-gray-400">
                    {exercise.description}
                </p>

                
                <div className="mt-4 flex gap-2">
                    {exercise.muscleGroups.map((muscle) => (
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
                        <span className="font-semibold">{exercise.equipment}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-700 px-4 py-3 text-sm">
                        <span className="text-gray-400">DIFFICULTY</span>
                        <span className="font-semibold">{exercise.difficulty}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-700 px-4 py-3 text-sm">
                        <span className="text-gray-400">SETS</span>
                        <span className="font-semibold">{exercise.sets}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-700 px-4 py-3 text-sm">
                        <span className="text-gray-400">REPS</span>
                        <span className="font-semibold">{exercise.reps}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-700 px-4 py-3 text-sm">
                        <span className="text-gray-400">DURATION</span>
                        <span className="font-semibold">
                            {exercise.duration} min
                        </span>
                    </div>

                    <div className="flex justify-between border-b border-gray-700 px-4 py-3 text-sm">
                        <span className="text-gray-400">CALORIES</span>
                        <span className="font-semibold">
                            {exercise.caloriesBurned} kcal
                        </span>
                    </div>

                    <div className="flex justify-between px-4 py-3 text-sm">
                        <span className="text-gray-400">RATING</span>
                        <span className="font-semibold">
                            {exercise.rating}
                        </span>
                    </div>

                </div>

                
                <h2 className="mt-5 text-lg font-bold uppercase">
                    INSTRUCTIONS
                </h2>

                <ol className="mt-3 space-y-2 text-sm text-gray-300">
                    {exercise.instructions.map((instruction, index) => (
                        <li key={index}>
                            {index + 1}. {instruction}
                        </li>
                    ))}
                </ol>

                
                <div className="mt-6 flex gap-3">
                    <button className="rounded-md bg-lime-400 px-5 py-2 text-sm font-semibold text-black hover:bg-lime-300">
                        ＋ Add to today's plan
                    </button>

                    <button className="rounded-md border border-gray-600 px-5 py-2 text-sm hover:bg-gray-800">
                        ♧ Save for later
                    </button>
                </div>
            </div>

        </div>
    </div>
);
};

export default PersonDetailsPage;