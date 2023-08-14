import { useContext } from 'react'
import { QuizContext } from '../contexts/QuizProvider'
import { Flex, Image, Text, Box, Tooltip, useToast } from "@chakra-ui/react"
import shampoo from '../assets/shampoo.png';
import filled from '../assets/filled.svg';
import favorite from '../assets/favorite.svg';
export const CardItem = ({ item }) => {
    const { userWishlist, setUserWishlist } = useContext(QuizContext);
    const { variants, images, title } = item;

    const price = variants[0].price;
    const imgUrl = images[0].src;

    const isInWishlist = userWishlist.includes(title);
    const toast = useToast();

    const updateWishList = (title) => {
        setUserWishlist(title);
        toast({
            title: isInWishlist ? 'Product removed from Wishlist' : 'Product added to Wishlist',
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top',
            containerStyle: { borderRadius: '0', fontSize: "13px", fontFamily: 'proxima-nova, sans-serif' },
        })
    }


    return (
        <Flex direction='column' maxW='21.785rem' h='26.25rem' pos='relative' backgroundColor='#fff' borderRadius='0.5rem'>
            <Image style={{ width: '21.785rem', height: '21.5625rem' }} borderRadius='0.5rem' src={imgUrl} loading='lazy' />
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
                <Box pos='absolute' right='1rem' top='1.06rem' cursor='pointer' onClick={() => updateWishList(title)}>
                    <Image src={isInWishlist ? filled : favorite} />
                </Box>
            </Tooltip>
            <Text variant='cardTitle' mt='0.75rem'>{title}</Text>
            <Text
                width='100%'
                variant='price'
                textAlign='center'
                pos='absolute'
                bottom='-20px'
            >${price}</Text>
        </Flex>
    )
}