import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/effect-coverflow'; // This one is necessary for coverflow effect
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import './3d.css'
import thrd from '../img/rasm.jpg'

SwiperCore.use([EffectCoverflow, Pagination]);

const ThreeDSwiper = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      className="mySwiper2"
    >
      <SwiperSlide>
        <img src={thrd} alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={thrd} alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={thrd} alt="Image 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={thrd} alt="Image 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={thrd} alt="Image 5" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ThreeDSwiper;
