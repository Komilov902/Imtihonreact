// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './swiper.css'
import idk from '../img/ldk.jpg'
import { Navigation } from 'swiper/modules';

function MSwiper({hideHandle2}) {
  return (
    <>
      <div className="modal-w2">
        <div className="modal2">
          <p onClick={hideHandle2} className="closed">
            <svg viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </p>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src={idk} alt="" /></SwiperSlide>
            <SwiperSlide><img src={idk} alt="" /></SwiperSlide>
            <SwiperSlide><img src={idk} alt="" /></SwiperSlide>
            <SwiperSlide><img src={idk} alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default MSwiper;
