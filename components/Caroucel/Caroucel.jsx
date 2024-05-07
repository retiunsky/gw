import React from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode, Pagination } from 'swiper/modules';
import CategoryItem from './categoryItem';
import { useMediaQuery, useTheme } from '@mui/material';

export default function Caroucel({ categories }) {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));
  const tablet = useMediaQuery(theme.breakpoints.only('sm'));
  const responsive = desktop ? 3 : tablet ? 2 : 1;
  return (
    <div
    >
      <SwiperComponent
        loop={true}
        slidesPerView={responsive}
        spaceBetween={90}
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination]}
        className='swiper_container'
      >
        {categories.data.data.categories.map((category) => {
          return (
            <SwiperSlide key={category.id}>
              <CategoryItem category={category} />
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </div>
  );
}
