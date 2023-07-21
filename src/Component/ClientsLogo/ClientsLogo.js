import React from 'react';
import "./ClientsLogo.css"
import clientLogos from "../../data/clientLogo"
import clientLogosTwo from '../../data/clientLogos';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ClientsLogo = () => {
    return (
        <div className='p-10 bg-[#d6d6d6]'>
            <h1 className='text-[35px] lg:text-[50px] mb-[50px] text-center font-bold leading-10 text-[#002060]'>Clients And Associates</h1>
            {/* First Section */}
            <div className='container mx-auto'>
                <div className='grid grid-cols-10'>
                    <div className='col-span-10'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={10}
                            autoplay={{ delay: 500, disableOnInteraction: false }}
                            className='flex items-center justify-center'

                        >
                            {clientLogos?.map(cl => (
                                <SwiperSlide key={cl.img}>
                                    <div>
                                        <img src={cl.img} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>




            {/* Second Section */}
            {/* <div className='container mx-auto'>
                <div className='grid grid-cols-10'>
                    <div className='col-span-10'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={10}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            className='flex items-center justify-center swiper-container-reverse' // Apply the CSS class to reverse the container
                            direction="horizontal" // Set direction to horizontal
                            watchOverflow={true} // Ensure slidesPerView is respected even when fewer slides are available
                        // navigation={{ reverse: true }} // Enable reverse navigation
                        >
                            {clientLogos?.map(cl => (
                                <SwiperSlide key={cl.img}>
                                    <div >
                                        <img src={cl.img} alt="" className='sliderImg'/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div> */}



        </div>
    );
};

export default ClientsLogo;