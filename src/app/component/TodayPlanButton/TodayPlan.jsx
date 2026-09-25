'use client'
import { PersonsContext } from '../../../context/PersonsContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const TodayPlanButton = ({ person }) => {
    const { todayPlan, setTodayPlan } = useContext(PersonsContext);
    const alreadyTodayPlan = todayPlan.find((plan) => plan.id === person.id);
    const handleTodayPlan = () => {
        if(todayPlan.length < 5){
        if (alreadyTodayPlan) {
            toast.warning(`${person.name} is Already Add Today Plan`)
            return;
        }
        setTodayPlan([...todayPlan, person]);
        toast.success(`${person.name} is add to todays plan`);
    }
   else if (alreadyTodayPlan) {
        toast.warning(`${person.name} is Already Add Today Plan`)
        return;
    }
    else{
        toast.warning(`You  Already Add 5 Today Plan `);
    }
    }
    
    return (


        <button
  onClick={handleTodayPlan}
  className={`rounded-md px-5 py-2 text-sm font-semibold transition-all duration-300 ${
    alreadyTodayPlan
      ? "bg-green-500 text-white"
      : todayPlan.length >= 5
      ? "cursor-not-allowed bg-gray-700 text-gray-500"
      : "bg-lime-400 text-black hover:bg-lime-300"
  }`}
>
  {alreadyTodayPlan
    ? "✓ Added to today's plan"
    : todayPlan.length >= 5
    ? "Today's Plan Full"
    : "+ Add to today's plan"}
</button>

    );
};

export default TodayPlanButton;