'use client';

import React, { useContext } from 'react';
import { PersonsContext } from '../../../context/PersonsContext';
import Link from 'next/link';

const SaveCount = () => {
    const { save } = useContext(PersonsContext);

    return (
        <Link href="/MyPlan">
            <div className="flex items-center gap-1.5 rounded-full px-2 py-1 transition-all duration-300 hover:bg-[#151a10]">

                <span className="text-xs text-gray-400 transition-colors duration-300 hover:text-white sm:text-sm">
                    Saved
                </span>

                <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-[#29292d] px-1 text-[8px] text-gray-400 transition-all duration-300 hover:border-[#ccff00] hover:text-[#ccff00] sm:h-5 sm:min-w-5 sm:text-[9px]">
                    {save.length}
                </span>

            </div>
        </Link>
    );
};

export default SaveCount;