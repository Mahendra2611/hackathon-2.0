import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import './slider.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow,Pagination,Navigation} from 'swiper/modules';

import img1 from "../assets/sliding_images/img1.jpg"
import img2 from "../assets/sliding_images/img2.jpg"
import img3 from "../assets/sliding_images/img3.jpg"
import img4 from "../assets/sliding_images/img4.jpg"
import img5 from "../assets/sliding_images/img5.jpg"
import img6 from "../assets/sliding_images/img6.jpg"



const Slider = () => {
  return (
    
    <div className="container flex flex-col space-x-3">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >

        <SwiperSlide>
          <img src={img1} alt="slide_image" className='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slide_image" className='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="slide_image" className='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="slide_image" className='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="slide_image" className='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="slide_image" className='slide_image'/>
        </SwiperSlide>

        <div className="swiper-pagination"></div>
        </Swiper>
        <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
        <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
      </div>
  )
}

export default Slider