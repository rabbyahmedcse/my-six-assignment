'use client'
import { toast } from 'react-toastify';
import { PersonsContext } from '../../context/PersonsContext';
import React, { useContext, useState } from 'react';

const SaveRemoveButton = ({plan}) => {
    const {save,setSave}=useContext(PersonsContext);
    const handleRemove =(id)=>{
        const afterRemove = save.filter((aPlan)=> aPlan.id !== id);
        toast.info(`${plan.name} is remove from Save`);
        setSave(afterRemove);
    }
    return (
        <button
       onClick={()=>handleRemove(plan.id)}
        className="rounded-full p-2 text-gray-400 transition-all duration-300 hover:bg-red-500/10 hover:text-red-400"
        title="Remove"
    >
        ×
    </button>
    );
};

export default SaveRemoveButton;