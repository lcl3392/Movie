import React, { useRef, useState } from 'react';
import './assets/css/reset.css';
import GlobalStyle from './components/styled/Global';
import Megabox from './components/megabox/Megabox/Megabox';

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './index.css';

// import { EffectCoverflow, Pagination } from 'swiper/modules';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';

const App = () => {
  return (
    <>
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
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MjhfMzIg%2FMDAxNTkwNjMzNjU4NTY1.AA44CNwatjsDegLCgdGTrXi7RB5apR2LI_prXB5gcE0g.jEssafqpydH5yBGGTZmC_HOjEe3LIBlsOQ3Gb6VaUuQg.JPEG.cecile2080%2Fabouttime00000.jpg&type=sc960_832" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.namu.wiki%2Fi%2FhXstlAJrLrAdB8fUvjXbd_UbBvxcIKhXnCv0Fl-vXxgM7oLXRov9GfIySyEusuBKtYwXFrutJD46mrm7ObRg4A.webp&type=sc960_832" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/2d/ac/04/2dac04ebc5734314e327b6dd15c2be42.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/e9/6f/7f/e96f7f3bddb137cf3d7afdc88cb1b68f.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/f6/4f/97/f64f97cc7d886c34c04f47958f93a123.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/7d/6d/0e/7d6d0e163f18299c1bccb18edce7f3f5.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/23/d7/3f/23d73f71bad16219682618d7c1201d5a.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/a4/27/5e/a4275ed306701e5a5cefc661f43e07b4.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/14/93/ad/1493ad8220663def973078a6a76f94d2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20111222_93%2F1324533105861GsJmF_JPEG%2Fmovie_image.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/c2/18/cd/c218cd5ae39666ecb93c3285f98597b8.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/75/3a/ed/753aed11cd2c819e974c68652bf0f895.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/2c/7c/8f/2c7c8f9505f9e5d005abe8c3868a5fd0.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/66/c7/25/66c7251ae739f4b7e0da7c246b3ab1ff.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/7b/97/c4/7b97c4e78a621b71c1986c03e38c1a7d.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/564x/6b/39/99/6b3999271fc60126049cfa3f2a6a805f.jpg" />
      </SwiperSlide>
    </Swiper>
    <div>
      <Megabox />
    </div>
  </>

  );
};

export default App;