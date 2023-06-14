import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    return (
        <div className='container mx-auto p-6'  data-aos="zoom-in-up">
            <div className='grid justify-around lg:grid-cols-2'>
                <div className='flex flex-col'>
                    <img src="https://i.ibb.co/tC7tyS6/nav-Logo-01.png" className='w-[250px]' alt="Mind Works Footer Logo" />
                    <div className='flex items-center gap-[10px] mt-[10px]'>
                        <FaFacebookF className='text-[20px]'/>
                        <FaTwitter className='text-[20px]'/>
                        <FaLinkedinIn className='text-[20px]'/>
                        <FaInstagram className='text-[20px]'/>
                    </div>
                </div>
                <div className='flex gap-[100px]'>
                    <div>
                        <h1 className='text-[#002060] text-[22px] mindWorksHead'>MindWorks</h1>
                        <div>
                            <h4 className='mt-[20px] bangladeshHead text-[#002060]'>Bangladesh</h4>
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
                    <div>
                        <p className='mb-[10px]'>Consulting</p>
                        <p className='mb-[10px]'>Training</p>
                        <p className='mb-[10px]'>SEED</p>
                        <p className='mb-[10px]'>About Us</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
          </div>
    );
};

export default Footer;