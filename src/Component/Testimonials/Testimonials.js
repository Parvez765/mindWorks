import React from 'react';
import "./Testinonials.css"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaStar } from 'react-icons/fa';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Testimonials = () => {
    return (
        <div className='container mx-auto p-10'>
            <h1 className='text-[50px] text-center font-bold text-[#002060] leading-[60px]'>What Client Says <br /> About Us</h1>
            <div className='mt-[50px]'>
                <Swiper
                    // install Swiper modules

                    spaceBetween={100}
                    slidesPerView={3}
                    // navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                    <SwiperSlide>
                        <div className='testimonialContainer'>
                            <div className='flex items-center gap-[8px] mb-[10px]'>
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                           </div>
                            <p className='mt-[10px] mb-[20px] lg:h-[360px]'>Mind Works is an excellent center for self development and Truly a  demonstrative training & consulting platform for thriving and blooming people whose excellence kept hidden. My best wishes remains with Mind Works.</p>
                            <div className='flex items-center gap-[12px]'>
                                <img src="https://i.ibb.co/R3bJ6pK/client-One.jpg" className='clientImage' alt="Mind Works Testimonials" />
                                <div>
                                <h4 className='font-bold text-[#002060] text-[16px]'>Nure A. Khan</h4>
                                <p>President, BSAHRP, Asst. Professor- SU & FIU, Head of Factory, Envoy Group & Founder</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className='testimonialContainer'>
                            <div className='flex items-center gap-[8px] mb-[10px]'>
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                           </div>
                            <p className='mt-[10px] mb-[20px] lg:h-[360px]'>Mind Woks conducted 2 training sessions on Japanese 5S for the employees of our corporate office and 03 power plants in Bangladesh. I am pleased that those employees got together and implemented 5S in our work places and improved the efficiency, work performance, cleanness, orderliness at all levels. Training insights were very effective and now we reap the benefits of our investment.</p>
                            <div className='flex items-center gap-[12px]'>
                                <img src="https://i.ibb.co/tzDkhYW/client-Two.jpg" className='clientImage' alt="Mind Works Testimonials" />
                                <div>
                                <h4 className='font-bold text-[#002060] text-[16px]'>Gamini Sarath</h4>
                                <p>Country Director,Lakdhanavi Ltd, Bangladesh Branch</p>
                                </div>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide>
                    <div className='testimonialContainer'>
                            <div className='flex items-center gap-[8px] mb-[10px]'>
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                           </div>
                            <p className='mt-[10px] mb-[20px] lg:h-[360px]'>When things come towards breaking the ice, Mind Works delivers perfectly!! We’ve worked with them in shaping up change-making minds within the leaders of A&E, our organization. If someone is thinking to implement Continuous Improvement culture in any organization, Mind Works will definitely be a wise choice.</p>
                            <div className='flex items-center gap-[12px]'>
                                <img src="https://i.ibb.co/44cHZQc/client-Three.jpg" className='clientImage' alt="Mind Works Testimonials" />
                                <div>
                                <h4 className='font-bold text-[#002060] text-[16px]'>Khan Mohd. Ibrahim</h4>
                                <p>PMP | Manager, Process Improvement & IE | American & Efird (Bangladesh) Ltd.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>  <div className='testimonialContainer'>
                            <div className='flex items-center gap-[8px] mb-[10px]'>
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                           </div>
                            <p className='mt-[10px] mb-[20px] lg:h-[340px]'>What differentiate Mind Works is the focus on helping you achieve your business goals by working at the “Shop floor” and learning by the hands-on use of the lean, six sigma and people management and motivational tools and above all transfers the knowledge and skill. Every minute they spend at your facility adds value that will continue to grow after they leave. It is obvious that their goal is to make you self-sufficient, not to make you dependent on them.</p>
                            <div className='flex items-center gap-[12px]'>
                                <img src="https://i.ibb.co/QMJ7TRX/client-Four.jpg" className='clientImage' alt="Mind Works Testimonials" />
                                <div>
                                <h4 className='font-bold text-[#002060] text-[16px]'>Mr. Tarun Kumar Mistry</h4>
                                <p>DGM and Operations Head of Alim Knit BD Ltd.</p>
                                </div>
                            </div>
                    </div></SwiperSlide>
                    <SwiperSlide>  <div className='testimonialContainer'>
                            <div className='flex items-center gap-[8px] mb-[10px]'>
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                           </div>
                            <p className='mt-[10px] mb-[20px]'>Minds Works has conducted several Session for the Skill and Efficiency Development of Faculty members, staff and students of BGMEA University of Fashion & Technology on the areas of Personal Productivity, Time Management, Six Sigma, Efficiency Improvement Drive etc. All the programs were world class standard and  have given the participants a new insight and energy to progress for their personal and organizational betterments.  I wish success in the endeavor of Minds Works on the enlightening the world.</p>
                            <div className='flex items-center gap-[12px]'>
                                <img src="https://i.ibb.co/TM38p0g/client-Five.jpg" className='clientImage' alt="Mind Works Testimonials" />
                                <div>
                                <h4 className='font-bold text-[#002060] text-[16px]'>Prof. Dr. Engr. Ayub Nabi Khan</h4>
                                <p>Commonwealth Scholar, Pro Vice Chancellor, BUFT</p>
                                </div>
                            </div>
                        </div></SwiperSlide>
                 
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;