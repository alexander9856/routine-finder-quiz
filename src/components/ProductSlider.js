import { useState, useContext } from 'react';
import { QuizContext } from '../contexts/QuizProvider'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CardItem } from './CardItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { filterProducts } from '../filterProducts'
export const ProductSlider = ({ products }) => {
    const { userAnswers } = useContext(QuizContext)
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const filteredData = filterProducts(products, userAnswers)
    return (
        <Box maxW={['60%', '60%', '60%', '50%']} position='relative'>
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
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                }}
            >
                {filteredData.map((x, index) => (
                    <SwiperSlide key={index} >
                        <CardItem item={x} />
                    </SwiperSlide>
                ))}

            </Swiper >

            <Box
                className='custom-prev'
                w='3.75375rem'
                h='3.75375rem'
                borderRadius='1.87688rem'
                backgroundColor='#EEF7FB'
                display={activeSlideIndex > 0 ? 'flex' : 'none'}
                alignItems='center'
                justifyContent='center'
                _hover={{ opacity: '75%' }}
                position='absolute'
                left='-35px'
                mt='auto'
                zIndex='999'
                top='0'
                bottom='0'
                mb='auto'
            >
                <ChevronLeftIcon boxSize='7' />
            </Box>

            <Box className='custom-next'
                w='3.75375rem'
                h='3.75375rem'
                borderRadius='1.87688rem'
                backgroundColor='#EEF7FB'
                alignItems='center'
                justifyContent='center'
                display={activeSlideIndex <= filteredData.length - 3 ? 'flex' : 'none'}
                _hover={{ opacity: '75%' }}
                position='absolute'
                right='-70px'
                mt='auto'
                zIndex='9999'
                top='0'
                bottom='0'
                mb='auto'
            >
                <ChevronRightIcon boxSize='7' />
            </Box>

        </Box >

    )
}