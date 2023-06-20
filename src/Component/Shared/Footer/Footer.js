import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css"
import SubFooter from './SubFooter';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
             <div className='container mx-auto p-10'  data-aos="zoom-in-up">
            <div className='grid justify-around lg:grid-cols-2'>
                <div className='flex flex-col'>
                    <Link to="/"><img src="https://i.ibb.co/tC7tyS6/nav-Logo-01.png" className='w-[250px]' alt="Mind Works Footer Logo" /></Link>
                    <div className='flex items-center gap-[15px] mt-[20px]'>
                      <a href="https://www.facebook.com/mindworksbangladesh" target='_blank'><FaFacebookF className='text-[30px]' /></a>
                    <a href="https://twitter.com/MindWorks16" target='_blank'><FaTwitter className='text-[30px]'/></a>
                   <a href='https://www.linkedin.com/company/mind-works-bangladesh/' target='_blank'><FaLinkedinIn className='text-[30px]'/></a>
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[100px]'>
                    <div>
                        <h1 className='text-[#002060] text-[16px] 2xl:text-[22px] mindWorksHead mb-[20px]'>Our Location</h1>
                        <div>
                            <h4 className=' bangladeshHead text-[#002060] '>Bangladesh</h4>
                            <p className='mt-[5px]'>1/4 Block-C, Lalmatia, Dhaka-1207</p>
                        </div>
                        <div>
                            <h4 className='mt-[20px] bangladeshHead text-[#002060]'>India</h4>
                            <p className='mt-[5px]'>Langford Grove, Langford Gardens Bangalore – 560025</p>
                            <p>C-20, First Floor, Westend, New Delhi 110021, India</p>
                        </div>
                        <div>
                            <h4 className='mt-[20px] bangladeshHead text-[#002060]'>Vietnam</h4>
                            <p className='mt-[5px]'>Vinhomes Central Park, Phuong 22, Binh Thanh, Ho Chi Minh City</p>
                            {/* <p>C-20, First Floor, Westend, New Delhi 110021, India</p> */}
                        </div>
                    </div>
                    <div className='mt-[50px] lg:mt-[0px]'>
                    <h1 className='text-[#002060] text-[16px] 2xl:text-[22px] mindWorksHead mb-[20px]'>Our Services</h1>
                            <p className='mb-[10px]'>Consulting</p>
                            <p className='mb-[10px]'>MSI</p>
                            <p className='mb-[10px]'>Training</p>
                            <p className='mb-[10px]'>SEED</p>
                            <p className='mb-[10px]'>Lean Transformation</p>
                            <div className='mt-[50px]'>
                            <h1 className='text-[#002060] text-[16px] 2xl:text-[22px] mindWorksHead mb-[20px]'>About Us</h1>
                            <Link to="/whoweare"><p className='mb-[10px]'>Who We Are</p></Link>
                           <Link to="/contact"><p className='mb-[10px]'>Contact Us</p></Link>
                        </div>
                        </div>
                </div>
                </div>
          </div>
               <SubFooter/>
       </div>
    );
};

export default Footer;