'use client';

import React, { useContext, useState } from 'react';
import { PersonsContext } from '../../context/PersonsContext';
import ShowCard from '../ShowToday/ShowCard';
import ShowSavePlan from '../ShowSave/ShowSave';
import MyPlanSummary from '../Calculation/SaveCalculation';
import MyTodaySummary from '../Calculation/TodayPlanCalculation';

const ShowMyPlanData = () => {
    const { todayPlan, save } = useContext(PersonsContext);
    const [activeTab, setActiveTab] = useState('today');
    const [sortBy, setSortBy] = useState("Duration");

    const sortPlan = (person) => {
        const sortedPlan = [...person];

        if (sortBy === 'Duration') {
            sortedPlan.sort((a, b) => b.duration - a.duration);
        }
        else if (sortBy === 'Calories') {
            sortedPlan.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }
        else if (sortBy === 'Rating') {
            sortedPlan.sort((a, b) => b.rating - a.rating);
        }

        return sortedPlan;
    };

    const sortedToday = sortPlan(todayPlan);
    const sortedSave = sortPlan(save);

    return (
        <div className="container mx-auto bg-[#0a0a0b] px-3 py-4 sm:px-5 md:px-6">

            <div>
                {activeTab === 'today' ? (
                    <MyPlanSummary />
                ) : (
                    <MyTodaySummary />
                )}
            </div>


           
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

             
                <div className="flex w-full rounded-xl border border-[#292c32] bg-[#15171c] p-1 sm:w-fit">

                    <button
                        onClick={() => setActiveTab('today')}
                        className={`flex-1 rounded-lg px-4 py-2 text-xs font-medium transition-all duration-300 sm:flex-none sm:px-5 ${
                            activeTab === 'today'
                                ? 'bg-[#252831] text-[#d8ff00] shadow-sm'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Today's Plan
                    </button>

                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`flex-1 rounded-lg px-4 py-2 text-xs font-medium transition-all duration-300 sm:flex-none sm:px-5 ${
                            activeTab === 'saved'
                                ? 'bg-[#252831] text-[#d8ff00] shadow-sm'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Saved
                    </button>

                </div>


            
                <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end">

                    <span className="text-xs text-gray-400">
                        Sort By
                    </span>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="flex-1 rounded-lg border border-[#292c32] bg-[#15171c] px-3 py-2 text-xs text-white outline-none transition-all duration-300 focus:border-lime-400 sm:flex-none sm:px-4"
                    >
                        <option value="Duration">Duration</option>
                        <option value="Calories">Calories</option>
                        <option value="Rating">Rating</option>
                    </select>

                </div>

            </div>


         
            <div className="space-y-3">

                {activeTab === 'today' ? (
                    <ShowCard plans={sortedToday} />
                ) : (
                    <ShowSavePlan plans={sortedSave} />
                )}

            </div>

        </div>
    );
};

export default ShowMyPlanData;