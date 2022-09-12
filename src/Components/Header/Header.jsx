import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import styles from '../Header/Header.css'

import slide1 from '../../assets/laptop.jpg';
import slide2 from '../../assets/tablet.jpg';
import slide3 from '../../assets/smart-watch.jpg';

function Header() {
    return (
     <div className='container'>
        <Swiper
            modules={[Navigation, EffectFade]}
            navigation
            effect
            speed={900}
            slidesPerView={1}
            loop
            className='carousel'
            >
            <SwiperSlide className='slides' >
                <img src={slide1} className='images' />
            </SwiperSlide>
            <SwiperSlide className='slides'>
                <img src={slide2} className='images' />
            </SwiperSlide>
            <SwiperSlide className='slides'>
                <img src={slide3} className='images' />
            </SwiperSlide>

            </Swiper>
     </div>
   
    )
}

export default Header;