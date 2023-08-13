import { Flex, Image, Text, Box, Tooltip, useToast } from "@chakra-ui/react"
import shampoo from '../assets/shampoo.png';
import filled from '../assets/filled.svg';
import favorite from '../assets/favorite.svg';
export const CardItem = () => {
    const toast = useToast()
    const addToWishlist = () => {
        toast({
            title: 'Product added to Wishlist',
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top',
            containerStyle: { borderRadius: '0', fontSize: "13px", fontFamily: 'proxima-nova, sans-serif' },
        })

    }
    return (
        <Flex direction='column' maxW='21.785rem' pos='relative'>
            <Image src={shampoo} h='21.5625rem' />
            <Tooltip
                hasArrow
                label="Add to wishlist"
                bg='blackAlpha.700'
                placement={'top'}
                color={'#fff'}
                fontFamily='proxima-nova, sans-serif'
                letterSpacing='1px'
                fontSize={'0.8em'}
            >
                <Box pos='absolute' right='1rem' top='1.06rem' cursor='pointer' onClick={addToWishlist}>
                    <Image src={favorite} />
                </Box>
            </Tooltip>


            <Text variant='cardTitle' mt='0.75rem'>Milk Body Cleanser</Text>
            <Text variant='price'>$14.00</Text>
        </Flex>
    )
}