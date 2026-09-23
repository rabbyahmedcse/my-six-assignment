import Image from 'next/image';
import React from 'react';

const PersonsCard = ({person}) => {
    return (
        <div className="w-full overflow-hidden rounded-[20px] border border-[#292c32] bg-[#15171c] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <div className="relative h-[250px] w-full">
                <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                />
            </div>


            <div className="p-6">

               
                <div className="mb-5 flex flex-wrap gap-2">

                    {person.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#d8ff00] px-4 py-1.5 text-[11px] font-bold uppercase text-black"
                        >
                            {muscle}
                        </span>
                    ))}

                </div>


               
                <h2 className="text-2xl font-black uppercase leading-none tracking-tight text-white">
                    {person.name}
                </h2>


               
                <p className="mt-3 text-sm text-gray-400">
                    {person.equipment}
                </p>


               
                <div className="mt-6 flex items-center gap-5 border border-[#24272d] px-3 py-3">

                   
                    <div className="flex items-center gap-2">
                        <span className="text-lg text-gray-400">
                            ◯
                        </span>

                        <span className="text-sm text-gray-300">
                            {person.duration} min
                        </span>
                    </div>


                  
                    <div className="flex items-center gap-2">
                        <span className="text-lg text-gray-400">
                            ●
                        </span>

                        <span className="text-sm text-gray-300">
                            {person.caloriesBurned} kcal
                        </span>
                    </div>


                   
                    <div className="flex items-center gap-2">
                        <span className="text-xl text-gray-400">
                            ☆
                        </span>

                        <span className="text-sm text-gray-300">
                            {person.rating}
                        </span>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default PersonsCard;