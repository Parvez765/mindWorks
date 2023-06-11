import React from 'react';
import { FaPhoneAlt, FaEnvelopeOpen, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const TopNav = () => {
    return (
        <div className='bg-[#002060] pt-6'>
            <div className='container mx-auto flex justify-end gap-[20px] lg:ml-[166px]'>
                <div className='hidden lg:block'>
                    <div className='flex items-center gap-[20px]'>
                        <div className='flex items-center gap-[8px]'>
                            <FaPhoneAlt className='text-white' />
                        <a href='tel:+91 9629830350' className='text-white text-[12px]'>+91 9629830350</a>
                        </div>
                        <div>
                            <div className='flex items-center gap-[8px]'>
                                <FaEnvelopeOpen className='text-white' />
                                <a href="mailto:info@mindworksbd.com" class="text-white  text-[12px]">info@mindworksbd.com</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[8px]'>
                    <FaFacebook className='text-white' />
                    <FaTwitter className='text-white'/>
                    <FaLinkedin className='text-white'/>
                    <FaInstagram className='text-white'/>
                </div>
            </div>
        </div>
    );
};

export default TopNav;