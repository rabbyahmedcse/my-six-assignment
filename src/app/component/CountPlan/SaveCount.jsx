'use client'
import React, { useContext } from 'react';

import { PersonsContext } from '../../../context/PersonsContext';
import Link from 'next/link';

const SaveCount = () => {
    const {save}=useContext(PersonsContext);
    return (
       
             <Link href={"/MyPlan"}>
              <div className="flex items-center gap-1.5">
             <span className="text-[14px] text-gray-400">
                        Saved
                    </span>
    
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#29292d] text-[8px] text-gray-400">
                        {
                            save.length
                        }
                    </span>
                    </div>
             </Link>
            
       
    );
};

export default SaveCount;