import React from 'react';
import "./ContactUs.css"
import { FaUser } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className='contactUsContainer'>
            <div className='container mx-auto mb-[80px]'>
                <h1 className='text-white flex justify-center items-center text-[35px] lg:text-[50px] text-center font-bold'>Have Some Questions?</h1>
                <p className='text-white lg:w-[850px] block mx-auto text-center'>For more information and enquirers, please get in touch with us on info@mindworksbd.com. You can also fill out the Contact Form below and we shall get in touch with you.</p>
                <div className='flex flex-col-reverse lg:flex-row  justify-center gap-[150px]'>
                    <div className='flex flex-col items-center text-left'>
                        <div>
                            <img src="https://i.ibb.co/7GDpvc7/5124557-01.png" alt="Mind Works Contact Us" className='lg:w-[450px] block mx-auto' />
                        </div>
                        <div>
                            <h2 className='text-[30px] mt-[35px] font-bold text-[#002060]'>Registered Offices:</h2>
                            <p className='mt-[12px]'><span className='font-bold'>Bangladesh</span><br />
                                ¼ Block-C, Lalmatia<br />
                                Dhaka – 1207
                                <br /><br />
                                <span className='font-bold'>India</span><br />
                                Langford Grove, Langford Gardens <br />
                                Bangalore – 560025
                                <br /><br />
                                <span className='font-bold'>Vietnam</span><br />
                                Vinhomes Central Park, Phuong 22, <br />
                                Binh Thanh, Ho Chi Minh City</p>
                        </div>
                    </div>
                    {/* Form */}
                    <div className="lg:w-[600px] mt-[50px] lg:mt-[0px]">
                        <div className="">

                            <div className="card shadow-2xl bg-base-100 ">
                                <div className="card-body formContainer">
                                    <h1 className='text-center font-bold text-[#002060] mb-[15px] text-[35px]'>Get In Touch</h1>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#002060]">Name*</span>
                                        </label>
                                        <input type="text" placeholder="Enter Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#002060]">Company*</span>
                                        </label>
                                        <input type="text" placeholder="Enter Company" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#002060]">Designation*</span>
                                        </label>
                                        <input type="text" placeholder="Enter Designation" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#002060]">Email*</span>
                                        </label>
                                        <input type="email" placeholder="Enter Email" className="input input-bordered" required />
                                    </div>
                                    <label className="label">
                                        <span className="label-text text-[#002060]">Message*</span>
                                    </label>
                                    <textarea className="input input-bordered">

                                    </textarea>
                                    <div className="form-control mt-6">
                                        <button className="btn btnColor">Sumbit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;