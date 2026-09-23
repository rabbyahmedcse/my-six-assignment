
import React from 'react';
import PersonsCard from '../component/PersonsCard';
import Link from 'next/link';

const getPersons = async () => {
    try {


        const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    }
    catch (error) {
        console.error("Error fetching Data:", error);
        return [];
    }
}

const WorkoutPage = async () => {
    const allPersons = await getPersons();
    return (
        <div className='mt-10'>
            <div className="bg-[#0b0b0d] px-5 py-3 sm:px-6">

                <div className="container mx-auto">

                    <h2 className="text-[26px] font-black uppercase leading-none text-white">
                        THE LIBRARY
                    </h2>

                    <p className="mt-1 text-[17px] text-gray-400">
                        Twelve lifts covering every major muscle group.
                    </p>

                </div>

            </div>
            <div className='grid grid-cols-3 gap-3 container mx-auto'>
                {
                    allPersons.map((person)=> (
                        <Link
                        key={person.id}
                        href={`/Workout/${person.id}`}>
                    <PersonsCard  person={person}></PersonsCard> 
                    </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default WorkoutPage;