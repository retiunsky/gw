import React from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode, Pagination } from 'swiper/modules';
import CategoryItem from './categoryItem';

export default function Caroucel({ categories }) {
  return (
    <div
    >
      <SwiperComponent
        loop={true}
        slidesPerView={3}
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
