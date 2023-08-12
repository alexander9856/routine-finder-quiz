import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CardItem } from './CardItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@chakra-ui/react'
export const ProductSlider = () => {
    return (
        <Box w='50%'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide >
                    <CardItem />
                </SwiperSlide>

                <SwiperSlide >
                    <CardItem />
                </SwiperSlide>

                <SwiperSlide >
                    <CardItem />
                </SwiperSlide>

                <SwiperSlide >
                    <CardItem />
                </SwiperSlide>
            </Swiper>
        </Box>

    )
}