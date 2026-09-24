'use client'
import { PersonsContext } from '../../context/PersonsContext';
import React, { useContext } from 'react';

const ShowMyPlanData = () => {
    const {save, todayPlan}= useContext(PersonsContext);

    return (
        <div>
     {/* name of each tab group should be unique */}
<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan" />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  
  
  <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>


</div>
        </div>
    );
};

export default ShowMyPlanData;