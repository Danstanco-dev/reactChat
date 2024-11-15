import React from 'react'
import close_img from "../assets/sass/images/MinusNew.jpg"
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/sass/imageslider.scss"

const ImageSlider = ({images, onClose}) => {
  return (
    <div className='image-Slider'>  
     <div className="image-slider-close" onClick={onClose}>
       <img src={close_img} alt="" />
     </div>
     <div className="slider-container">
    <Swiper loop={true} navigation={false} pagination={true}
     modules={[Pagination]} spaceBetween={0} slidesPerView={1} >
       { images.map((image, index) => (
          <SwiperSlide key={index}>
           <img src={image}alt="" className='image-slide'/>
          </SwiperSlide>
       ))}
    </Swiper>
     </div>
    </div>
  )
}

export default ImageSlider