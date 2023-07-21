import React from 'react';
import "./OurService.css"
import { FaAngleRight } from 'react-icons/fa';

const OurServices = () => {
    return (
        <div className='serviceContainer'>
            <div className='container mx-auto p-10'>
                <h1 className='text-center serviceHead mb-[100px] text-[35px] lg:text-[50px] leading-[50px]'>Our Services</h1>
                <div className='mt-[50px]'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-between gap-[20px] lg:gap-[50px] mb-[50px]'>
                        <img src="https://i.ibb.co/5Lnwsjc/counselling-One.webp" alt="Our Service List One" className='lg:w-[700px] imageOne' data-aos="fade-right"/>
                        <div data-aos="fade-left">
                            <h3 className='imageHeadingOne text-[30px] lg:text-[35px]'>CONSULTING</h3>
                            <p className='imageHeadingPara lg:text-[22px]'>Creating customized long-term solutions for businesses and guiding them to achieving sustainable results.</p>
                            <div className='mt-[12px]'><button className='flex items-center learnBtn'>Learn More <FaAngleRight/></button></div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-[20px] lg:gap-[50px] mt-[100px]'>
                        <div data-aos="fade-right">
                            <h3 className='imageHeadingOne text-[30px] lg:text-[35px]'>MANAGEMENT SYSTEM IMPLEMENTATION</h3>
                            <p className='imageHeadingPara lg:text-[22px]'>Value stream mapping and rapid strategy deployment to achieve project and business goals.</p>
                            <div className='mt-[12px]'><button className='flex items-center learnBtn'>Learn More <FaAngleRight/></button></div>
                        </div>
                        <img src="https://i.ibb.co/nDZdgJS/counseling-Two.webp" data-aos="fade-left" alt="Our Service List One" className='lg:w-[700px] imageOne' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-between gap-[20px] lg:gap-[50px] mt-[100px]'>
                        <img src="https://i.ibb.co/3fHFqPZ/plan-planning-strategy-bysiness-ideas-concept-min.webp" data-aos="fade-right" alt="Our Service List One" className='lg:w-[700px] imageOne' />
                        <div data-aos="fade-left">
                            <h3 className='imageHeadingOne text-[30px] lg:text-[35px]'>Traning</h3>
                            <p className='imageHeadingPara lg:text-[22px]'>Build customized training modules for organizations for soft skills, time management,lean, six sigma, kaizen, and more.</p>
                            <div className='mt-[12px]'><button className='flex items-center learnBtn'>Learn More <FaAngleRight/></button></div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-between  gap-[20px] lg:gap-[50px] mt-[100px]'>
                        <div data-aos="fade-right">
                            <h3 className='imageHeadingOne leading-[45px] text-[30px] lg:text-[35px]'>COACHING & MENTORING</h3>
                            <p className='imageHeadingPara lg:text-[22px]'>One-on-one life coaching for C-level professionals that enhance personal development and professional salability.</p>
                            <div className='mt-[12px]'><button className='flex items-center learnBtn'>Learn More <FaAngleRight/></button></div>
                        </div>
                        <img src="https://i.ibb.co/bXCvwQj/meeting-presentation-planning-graphic-word-min.webp" data-aos="fade-left" alt="Our Service List One" className='lg:w-[700px] imageOne' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;