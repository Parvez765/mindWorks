import React from 'react';
import "./Industries.css"
import { FaCheck } from 'react-icons/fa';
import industries from "../../data/industries"

const Industries = () => {
    return (
        <div className='container mx-auto p-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-[140px]'>
                <div>
                    <img src="https://i.ibb.co/9gVh7bN/african-business-male-people-shaking-hands-min.webp" className='handShake' alt="Mind Works Industries Corporate HandShake"/>
                </div>
                <div>
                    <h1 className='text-[50px] font-bold text-[#002060]'>Industries We Serve</h1>
                    <div className='mt-[20px] grid grid-cols-1 md:grid-cols-2'>
                        {
                            industries?.map(ind => <div className='flex items-center gap-[10px]'>
                                <FaCheck className='text-[#006AAC] text-[22px]'/>
                                <h1 className='text-[22px] font-bold text-[#002060]'>{ind.name}</h1>
                            </div>)
                       }
                   </div>
                </div>
           </div>
        </div>
    );
};

export default Industries;