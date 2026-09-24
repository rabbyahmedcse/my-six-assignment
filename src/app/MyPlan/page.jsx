'use client';

import React, { useContext } from 'react';
import { PersonsContext } from '../../context/PersonsContext';
import MyplanCard from './MyplanCard';

const ShowMyPlanData = () => {
    const { todayPlan } = useContext(PersonsContext);

    return (
        <div className='container mx-auto'>
          {/* name of each tab group should be unique */}
<div className="tabs tabs-box bg-[#0b0b0d]">
  <input type="radio" name="my_tabs_6" className="tab rounded-2xl" aria-label="Today's Plan" />
  <div className="tab-content bg-base-100 border-base-300 p-6 space-y-1 bg-[#0a0a0b]">
    
    
    
  {todayPlan.map((plan) => (
                <MyplanCard
                    key={plan.id}
                    plan={plan}
                />
            ))}
    
    
    </div>






  <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

 
        </div>
        </div>
    );
};

export default ShowMyPlanData;