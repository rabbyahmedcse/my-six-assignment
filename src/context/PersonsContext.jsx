'use client';

import { createContext, useEffect, useState } from "react";

export const PersonsContext = createContext();

const PersonsContextProvider = ({ children }) => {

    const [todayPlan, setTodayPlan] = useState([]);
    const [save, setSave] = useState([]);

    
    const [loaded, setLoaded] = useState(false);


    
    useEffect(() => {
        const oldSave = localStorage.getItem("save");
        const oldTodayPlan = localStorage.getItem("todayPlan");

        if (oldSave) {
            setSave(JSON.parse(oldSave));
        }

        if (oldTodayPlan) {
            setTodayPlan(JSON.parse(oldTodayPlan));
        }

      
        setLoaded(true);

    }, []);


  
    useEffect(() => {

        if (!loaded) {
            return;
        }

        localStorage.setItem(
            "save",
            JSON.stringify(save)
        );

    }, [save, loaded]);


   
    useEffect(() => {

        if (!loaded) {
            return;
        }

        localStorage.setItem(
            "todayPlan",
            JSON.stringify(todayPlan)
        );

    }, [todayPlan, loaded]);


    const sharePerson = {
        todayPlan,
        setTodayPlan,
        save,
        setSave
    };


    return (
        <PersonsContext.Provider value={sharePerson}>
            {children}
        </PersonsContext.Provider>
    );
};

export default PersonsContextProvider;