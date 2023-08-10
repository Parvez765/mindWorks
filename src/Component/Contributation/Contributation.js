import React from 'react';
import trainingData from "../../data/traningData"
import "./Contributation.css"

const Contrabution = () => {
    return (
        <div className='trainingBg'>
            <div className='container mx-auto'>
                <h1 className="text-center seedText text-[35px] lg:text-[50px]  leading-[60px] mb-[12px] p-10 text-[#002060]">Contribution To <br />Training Industry</h1>
                {/* <p className='lg:w-[850px] block mx-auto text-center font-medium'>We Have Contributed In Industry by Conducting Session, </p> */}
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center text-white'>
                    {
                        trainingData?.map(td => <div className='text-center'>
                            <h2 className='text-[70px] font-bold '>{td.number}</h2>
                            <h2 className='text-[30px] font-medium'>{td.name}</h2>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Contrabution;
