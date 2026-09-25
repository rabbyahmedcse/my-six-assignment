import Image from 'next/image';
import React from 'react';

const PersonsCard = ({ person }) => {
    return (
        <div className="w-full overflow-hidden rounded-[20px] border border-[#292c32] bg-[#15171c] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">

            
            <div className="relative h-[200px] w-full sm:h-[230px] md:h-[250px]">
                <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                />
            </div>


            <div className="p-4 sm:p-5 md:p-6">

               
                <div className="mb-4 flex flex-wrap gap-1.5 sm:mb-5 sm:gap-2">

                    {person.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#d8ff00] px-3 py-1 text-[9px] font-bold uppercase text-black sm:px-4 sm:py-1.5 sm:text-[10px] md:text-[11px]"
                        >
                            {muscle}
                        </span>
                    ))}

                </div>


                <h2 className="text-xl font-black uppercase leading-none tracking-tight text-white sm:text-2xl">
                    {person.name}
                </h2>


               
                <p className="mt-2 text-xs text-gray-400 sm:mt-3 sm:text-sm">
                    {person.equipment}
                </p>


                
                <div className="mt-4 grid grid-cols-3 items-center border border-[#24272d] px-2 py-2.5 sm:mt-6 sm:px-3 sm:py-3">

                    
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                        <span className="text-base text-gray-400 sm:text-lg">
                            ◯
                        </span>

                        <span className="text-[10px] text-gray-300 sm:text-xs md:text-sm">
                            {person.duration} min
                        </span>
                    </div>


                    
                    <div className="flex items-center justify-center gap-1.5 border-l border-[#24272d] sm:gap-2">
                        <span className="text-base text-gray-400 sm:text-lg">
                            ●
                        </span>

                        <span className="text-[10px] text-gray-300 sm:text-xs md:text-sm">
                            {person.caloriesBurned} kcal
                        </span>
                    </div>


                  
                    <div className="flex items-center justify-center gap-1.5 border-l border-[#24272d] sm:gap-2">
                        <span className="text-lg text-gray-400 sm:text-xl">
                            ☆
                        </span>

                        <span className="text-[10px] text-gray-300 sm:text-xs md:text-sm">
                            {person.rating}
                        </span>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default PersonsCard;