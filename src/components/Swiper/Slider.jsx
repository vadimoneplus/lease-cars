import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css';
import img from "../../images/Rectangle1.jpg";
import React from "react";

export const Slider = () => {
    return (
        <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: true
            }}

            pagination={{
                clickable: true
            }}
            modules={[Pagination, Autoplay]} className="mySwiper">
            <SwiperSlide className='slider-item'>
                <img src={img}/>
            </SwiperSlide>
            <SwiperSlide className='slider-item'>
                <img src={img}/>
            </SwiperSlide>
            <SwiperSlide className='slider-item'>
                <img src={img}/>
            </SwiperSlide>
            <SwiperSlide className='slider-item'>
                <img src={img}/>
            </SwiperSlide>
        </Swiper>
    );
};