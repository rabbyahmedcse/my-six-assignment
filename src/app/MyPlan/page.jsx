'use client';

import React, { useContext, useState } from 'react';
import { PersonsContext } from '../../context/PersonsContext';
import MyplanCard from './MyplanCard';
import SaveCard from './SaveCard';
import Link from 'next/link';
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
    }
    const sortedToday = sortPlan(todayPlan);
    const sortedSave = sortPlan(save);
    return (
        <div className="container mx-auto bg-[#0a0a0b] p-4">

            <div>

                {activeTab === 'today' ? (
                    <MyPlanSummary></MyPlanSummary>
                ) : (
                    <MyTodaySummary></MyTodaySummary>
                )}
            </div>

            {/* Top Bar */}
            <div className="mb-5 flex items-center justify-between">

                {/* Tabs */}
                <div className="flex w-fit rounded-xl border border-[#292c32] bg-[#15171c] p-1">

                    <button
                        onClick={() => setActiveTab('today')}
                        className={`rounded-lg px-5 py-2 text-xs font-medium transition-all duration-300 ${activeTab === 'today'
                                ? 'bg-[#252831] text-[#d8ff00] shadow-sm'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Today's Plan
                    </button>

                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`rounded-lg px-5 py-2 text-xs font-medium transition-all duration-300 ${activeTab === 'saved'
                                ? 'bg-[#252831] text-[#d8ff00] shadow-sm'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Saved
                    </button>

                </div>


                {/* Sort */}
                <div className="flex items-center gap-2">

                    <span className="text-xs text-gray-400">
                        Sort By
                    </span>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="rounded-lg border border-[#292c32] bg-[#15171c] px-4 py-2 text-xs text-white outline-none focus:border-lime-400"
                    >
                        <option value="Duration">Duration</option>
                        <option value="Calories">Calories</option>
                        <option value="Rating">Rating</option>
                    </select>

                </div>

            </div>


            {/* Content */}
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