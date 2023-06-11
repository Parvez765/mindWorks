import React from 'react';
import './HomeComponent.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeComponent = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={true} // Enable autoplay
        delay={2000} // Set autoplay delay to 2 seconds
      >
        <SwiperSlide>
          <div className='sliderOne'>
              <h1 className='text-white slideOneHead text-center'>Guiding People And Organizations <br/> Towards Excellence</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='sliderTwo'>
                <h1 className='text-white slideOneHead text-center'>Operational excellence through <br/> continuous improvement</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='sliderThree'>
                <h1 className='text-white slideOneHead text-center'>Customized solutions for <br/> your business pain points</h1>
            </div></SwiperSlide>
       
     
      </Swiper>
    </div>
  );
};

export default HomeComponent;
