'use client'
import Link from 'next/link';
import { PersonsContext } from '../../../context/PersonsContext';
import React, { useContext } from 'react';

const TodayCount = () => {
    const {todayPlan}=useContext(PersonsContext)
    return (
       <Link href={"/MyPlan"}>
        <div className="flex items-center gap-1.5">
              <span className="text-[14px] font-medium text-gray-300">
                                    Plan
                                </span>
                
                                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ccff00] text-[10px] font-bold text-black">
                                   {todayPlan.length}
                                </span>
        </div>
       
       </Link>
    );
};

export default TodayCount;