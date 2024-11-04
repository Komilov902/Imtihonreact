// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './modal.css'
import tr from "../img/tr.jpg";
import { Navigation } from 'swiper/modules';

function ModalSwiper({hideHandle}) {
  return (
    <>
      <div className="modal-w">
        <div className="modal">
          <p onClick={hideHandle} className="closed">
            <svg viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </p>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src={tr} alt="" /></SwiperSlide>
            <SwiperSlide><img src={tr} alt="" /></SwiperSlide>
            <SwiperSlide><img src={tr} alt="" /></SwiperSlide>
            <SwiperSlide><img src={tr} alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ModalSwiper;
