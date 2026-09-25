'use client'
import Link from "next/link";
import React from "react";
import SaveButton from "./saveButton/SaveButton";
import SaveCount from "./CountPlan/SaveCount";
import TodayCount from "./CountPlan/TodayCount";
import { usePathname } from "next/navigation";

const Navbar = () => {
 const pathname = usePathname();
    const links = <>
      
<Link
    href="/Workout"
    className={`rounded-full px-5 py-2 text-[10px] font-semibold transition-all duration-300 ${
        pathname === "/Workout" || pathname === "/"
            ? "bg-[#1a2510] text-[#ccff00] hover:bg-[#202d13]"
            : "text-gray-400 hover:bg-[#151a10] hover:text-white"
    }`}
>
    Workout
</Link>

<Link
    href="/MyPlan"
    className={`rounded-full px-5 py-2 text-[10px] font-semibold transition-all duration-300 ${
        pathname === "/MyPlan" 
            ? "bg-[#1a2510] text-[#ccff00] hover:bg-[#202d13]"
            : "text-gray-400 hover:bg-[#151a10] hover:text-white"
    }`}
>
My Plan
</Link>


        

        
    </>;

    return (
        <section className="sticky top-0 z-50 border-b border-[#1c1c20] bg-[#0b0b0d]/95 backdrop-blur-md">

        <div className="navbar container mx-auto min-h-[64px] px-4 sm:px-6">
    
           
            <div className="navbar-start">
    
               
                <div className="dropdown mr-2 md:hidden">
    
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-sm p-2 text-gray-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
    
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content z-[50] mt-3 w-48 rounded-box border border-[#1c1c20] bg-[#0b0b0d] p-3 shadow-lg"
                    >
                        {links}
                    </ul>
    
                </div>
    
    
               
                <Link
                    href="/"
                    className="text-sm font-extrabold tracking-tight text-white sm:text-base"
                >
                    FIT<span className="text-[#d8ff00]">LOG</span>
                </Link>
    
            </div>
    
    
          
            <div className="navbar-center hidden md:flex">
    
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
    
            </div>
    
    
           
            <div className="navbar-end gap-3 sm:gap-5">
    
                
                <div >
                  <TodayCount></TodayCount>
                </div>
    
    
                
                <div >
                   <SaveCount></SaveCount>
                </div>
    
            </div>
    
        </div>
    
    </section>
    );
};

export default Navbar;