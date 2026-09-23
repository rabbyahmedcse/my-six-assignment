import Link from "next/link";
import React from "react";

const Navbar = () => {

    const links = <>
        <Link
            href={"/Workout"}
            className="px-4 py-1.5 text-[10px] text-gray-400 hover:text-white"
        >
            Workout
        </Link>

        <Link
            href={"/MyPlan"}
            className="px-4 py-1.5 text-[10px] text-gray-400 hover:text-white"
        >
            My Plan
        </Link>
    </>;

    return (
        <section className="bg-[#0b0b0d] border-b border-[#1c1c20]">

        <div className="navbar container mx-auto min-h-[64px] px-4 sm:px-6">
    
            {/* Left Side */}
            <div className="navbar-start">
    
                {/* Mobile Menu */}
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
    
                    {/* Mobile Dropdown */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content z-[50] mt-3 w-48 rounded-box border border-[#1c1c20] bg-[#0b0b0d] p-3 shadow-lg"
                    >
                        {links}
                    </ul>
    
                </div>
    
    
                {/* Logo */}
                <Link
                    href="/"
                    className="text-sm font-extrabold tracking-tight text-white sm:text-base"
                >
                    FIT<span className="text-[#d8ff00]">LOG</span>
                </Link>
    
            </div>
    
    
            {/* Desktop Menu */}
            <div className="navbar-center hidden md:flex">
    
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
    
            </div>
    
    
            {/* Right Side */}
            <div className="navbar-end gap-3 sm:gap-5">
    
                {/* Plan */}
                <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-medium text-gray-300">
                        Plan
                    </span>
    
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#d8ff00] text-[8px] font-bold text-black">
                        0
                    </span>
                </div>
    
    
                {/* Saved */}
                <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-400">
                        Saved
                    </span>
    
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#29292d] text-[8px] text-gray-400">
                        ○
                    </span>
                </div>
    
            </div>
    
        </div>
    
    </section>
    );
};

export default Navbar;