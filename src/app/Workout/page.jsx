import React from 'react';
import PersonsCard from '../component/PersonsCard';
import Link from 'next/link';
import Hero from '../component/Hero';

const getPersons = async () => {
    try {

        const res = await fetch(
            "https://api.abcz.workers.dev/api/fitlog"
        );

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();

    } catch (error) {
        console.error("Error fetching Data:", error);
        return [];
    }
};

const WorkoutPage = async () => {
    const allPersons = await getPersons();

    return (

        <div className="mt-10 bg-[#0b0b0d]">

            <Hero />

          
            <div className="bg-[#0b0b0d] px-4 py-4 sm:px-6 sm:py-5">

                <div className="container mx-auto">

                    <h2 className="text-xl font-black uppercase leading-none text-white sm:text-2xl md:text-[26px]">
                        THE LIBRARY
                    </h2>

                    <p className="mt-1 text-xs text-gray-400 sm:text-sm md:text-[17px]">
                        Twelve lifts covering every major muscle group.
                    </p>

                </div>

            </div>


        
            <div className="container mx-auto grid grid-cols-1 gap-4 px-4 pb-6 sm:grid-cols-2 sm:gap-5 sm:px-6 lg:grid-cols-3">

                {allPersons.map((person) => (

                    <Link
                        key={person.id}
                        href={`/Workout/${person.id}`}
                        className="block"
                    >
                        <PersonsCard person={person} />
                    </Link>

                ))}

            </div>

        </div>
    );
};

export default WorkoutPage;