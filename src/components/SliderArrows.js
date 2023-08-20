import { Box } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
export const LeftArrow = ({ activeSlideIndex }) => {
    return (
        <Box className='custom-prev'
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
            my='auto'
            zIndex='999'
            top='0'
            bottom='0'
        >
            <ChevronLeftIcon boxSize='7' />
        </Box>
    )
}

export const RightArrow = ({ activeSlideIndex, products }) => {
    return (
        <Box className='custom-next'
            w='3.75375rem'
            h='3.75375rem'
            borderRadius='1.87688rem'
            backgroundColor='#EEF7FB'
            alignItems='center'
            justifyContent='center'
            display={[activeSlideIndex <= products.length - 2 ? 'flex' : 'none', activeSlideIndex <= products.length - 3 ? 'flex' : 'none']}
            _hover={{ opacity: '75%' }}
            position='absolute'
            right='-70px'
            my='auto'
            zIndex='9999'
            top='0'
            bottom='0'
        >
            <ChevronRightIcon boxSize='7' />
        </Box>
    )
}