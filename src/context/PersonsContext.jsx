'use client'
import { createContext, useState } from "react";


export const  PersonsContext  = createContext();

const PersonsContextProvider = ({children}) => {
    const [todayPlan, setTodayPlan]= useState([]);
    const [save,setSave] = useState([]);
    const sharePerson={
        todayPlan,
        setTodayPlan,
        save,
        setSave
    }
    return (
       <PersonsContext.Provider value={sharePerson}>{children}</PersonsContext.Provider>
    );
};

export default PersonsContextProvider;