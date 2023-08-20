import { useState, useContext } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CardItem } from './CardItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@chakra-ui/react'
import { LeftArrow, RightArrow } from './SliderArrows';

export const ProductSlider = ({ products }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <Box
            maxW={['60%', '82%', '65%', '50%']}
            position='relative'
            mb={products.length <= 2 && '3.5rem'}
        >
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className="mySwiper"
                pagination={
                    {
                        clickable: true,
                        bulletClass: `swiper-pagination-bullet`
                    }
                }
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next'
                }}

                onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}

                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: products.length == 1 ? 1 : 2,
                        spaceBetween: products.length == 1 ? 0 : 20,
                    },
                }}
            >
                {products.map((x, index) => (
                    <SwiperSlide key={index} >
                        <CardItem item={x} />
                    </SwiperSlide>
                ))}



            </Swiper >
            <LeftArrow activeSlideIndex={activeSlideIndex} />
            <RightArrow activeSlideIndex={activeSlideIndex} products={products} />
        </Box >
    )
}