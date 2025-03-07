import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation, FreeMode, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { assets } from '../assets/assets';


const Slider = () => {
  return (
    <>
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        freeMode={true}
        grabCursor={true}
        scrollbar={{ draggable: true }}
        loop = {true}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Pagination, Navigation, FreeMode, EffectCoverflow]}
        className='w-[100%] lg:h-120 xlg:h-150 md:h-70 m:h-20 flex justify-center items-center bg-transparent my-20'>
        {Array(6).fill('').map((item, index) => (
          <SwiperSlide key={index}>
            <img className='block mt-5 size-auto rounded hover:scale-105 transition-all cursor-grab duration-300'src={assets[`sample_img_${index + 1}`]} alt={item} />
          </SwiperSlide>))}
        </Swiper>
        </>
  );
}

export default Slider;
