import React from 'react';
import "./OurService.css"
import { FaAngleRight } from 'react-icons/fa';

const OurServices = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <div className='container mx-auto p-10'>
                <h1 className='text-center serviceHead'>Our Services</h1>
                <div className='mt-[50px]'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-between gap-[20px] lg:gap-[120px] mb-[50px]'>
                        <img src="https://i.ibb.co/5Lnwsjc/counselling-One.webp" alt="Our Service List One" className='lg:w-[700px] imageOne' data-aos="fade-right"/>
                        <div data-aos="fade-left">
                            <h3 className='imageHeadingOne'>CONSULTING</h3>
                            <p className='imageHeadingPara'>Creating customized long-term solutions for businesses and guiding them to achieving sustainable results.</p>
                            <div className='mt-[12px]'><button className='flex items-center learnBtn'>Learn More <FaAngleRight/></button></div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-between  gap-[20px] lg:gap-[120px]'>
                        <div data-aos="fade-right">
                            <h3 className='imageHeadingOne leading-[45px]'>MANAGEMENT SYSTEM IMPLEMENTATION</h3>
                            <p className='imageHeadingPara'>Value stream mapping and rapid strategy deployment to achieve project and business goals.</p>
                            <div className='mt-[12px]'><button className='flex items-center learnBtn'>Learn More <FaAngleRight/></button></div>
                        </div>
                        <img src="https://i.ibb.co/nDZdgJS/counseling-Two.webp" data-aos="fade-left" alt="Our Service List One" className='lg:w-[700px] imageOne' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-between gap-[20px] lg:gap-[120px] mb-[50px] mt-[48px]'>
                        <img src="https://i.ibb.co/3fHFqPZ/plan-planning-strategy-bysiness-ideas-concept-min.webp" data-aos="fade-right" alt="Our Service List One" className='lg:w-[700px] imageOne' />
                        <div data-aos="fade-left">
                            <h3 className='imageHeadingOne'>Traning</h3>
                            <p className='imageHeadingPara'>Build customized training modules for organizations for soft skills, time management,lean, six sigma, kaizen, and more.</p>
                            <div className='mt-[12px]'><button className='flex items-center learnBtn'>Learn More <FaAngleRight/></button></div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-between  gap-[20px] lg:gap-[120px]'>
                        <div data-aos="fade-right">
                            <h3 className='imageHeadingOne leading-[45px]'>COACHING & MENTORING</h3>
                            <p className='imageHeadingPara'>One-on-one life coaching for C-level professionals that enhance personal development and professional salability.</p>
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