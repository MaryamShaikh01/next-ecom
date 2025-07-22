'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import '';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProductSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper mySwiper2 singleProductSwiper2"
      >
        <SwiperSlide>
          <img src="/swiper-banana.png" width={660} height={660}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper-banana.png" />
        </SwiperSlide>
        <SwiperSlide>
                  <img src="swiper-banana.png" />

        </SwiperSlide>
        <SwiperSlide>
               <img src="swiper-banana.png" />

        </SwiperSlide>
        <SwiperSlide>
                   <img src="swiper-banana.png" />

        </SwiperSlide>
        <SwiperSlide>
                    <img src="swiper-banana.png" />

        </SwiperSlide>
        <SwiperSlide>
                 <img src="swiper-banana.png" />

        </SwiperSlide>
        <SwiperSlide>
             <img src="swiper-banana.png" />

        </SwiperSlide>
        <SwiperSlide>
                <img src="swiper-banana.png" />

        </SwiperSlide>
        <SwiperSlide>
                  <img src="swiper-banana.png" />

        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper mySwiper thumbSwiper"
      >
        <SwiperSlide>
          <img src="swiper-banana.png" width={100} height={100}/>

        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper-banana.png" width={100} height={100}/>

        </SwiperSlide>
        <SwiperSlide>
                <img src="swiper-banana.png" width={100} height={100}/>

        </SwiperSlide>
        <SwiperSlide>
                  <img src="swiper-banana.png" width={100} height={100}/>

        </SwiperSlide>
        <SwiperSlide>
              <img src="swiper-banana.png" width={100} height={100} />

        </SwiperSlide>
        <SwiperSlide>
                  <img src="swiper-banana.png" width={100} height={100} />

        </SwiperSlide>
        <SwiperSlide>
            <img src="swiper-banana.png" width={100} height={100} />

        </SwiperSlide>
        <SwiperSlide>
                 <img src="swiper-banana.png" width={100} height={100}/>

        </SwiperSlide>
        <SwiperSlide>
              <img src="swiper-banana.png" width={100} height={100}/>

        </SwiperSlide>
        <SwiperSlide>
                   <img src="swiper-banana.png" width={100} height={100}/>

        </SwiperSlide>
      </Swiper>
    </>
  );
}
