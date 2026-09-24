'use client'
import { PersonsContext } from '../../../context/PersonsContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const TodayPlanButton = ({ person }) => {
    const { todayPlan, setTodayPlan } = useContext(PersonsContext);
    const alreadyTodayPlan = todayPlan.find((plan) => plan.id === person.id);
    const handleTodayPlan = () => {
        if (alreadyTodayPlan) {
            toast.warning(`${person.name} is Already Add Today Plan`)
            return;
        }
        setTodayPlan([...todayPlan, person]);
        toast.success(`${person.name} is add to todays plan`);
    }
    console.log(person, "persons");
    return (

        <button onClick={() => handleTodayPlan()} className={`rounded-md px-5 py-2 text-sm font-semibold transition-all duration-300 ${alreadyTodayPlan
                ? "bg-green-600 text-white hover:bg-green-600"
                : "bg-lime-400 text-black hover:bg-lime-300"
            }`}>
            {alreadyTodayPlan ? "✓ Added to today's plan" : "+ Add to today's plan"}
        </button>

    );
};

export default TodayPlanButton;