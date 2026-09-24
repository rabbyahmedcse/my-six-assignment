'use client'
import React, { useContext } from 'react';
import { PersonsContext } from '../../../context/PersonsContext';
import { toast } from 'react-toastify';

const SaveButton = ({ person }) => {
    const { save, setSave } = useContext(PersonsContext);
    const alReadySave = save.find((saveData) => saveData.id === person.id);
    const handleSaveButton = () => {
        if (alReadySave) {
            toast.warning(`${person.name} is Already Add saved`)
            return;
        }
        setSave([...save,person]);
        toast.success(`${person.name} is add to saved`);
    }
    return (
        <div>
            <button onClick={()=> handleSaveButton()}  className={`rounded-md px-5 py-2 text-sm font-medium transition-all duration-300 ${
        alReadySave
            ? "border border-lime-400 bg-lime-400 text-black hover:bg-lime-300"
            : "border border-gray-600 text-white hover:bg-gray-800"
    }`}>
                {alReadySave ? "✓ Saved" : "♧ Save for later"}
            </button>
        </div>
    );
};

export default SaveButton;