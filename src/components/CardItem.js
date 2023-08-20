import { useContext } from 'react'
import { QuizContext } from '../contexts/QuizProvider'
import { Flex, Image, Text, Box, Tooltip, useToast } from "@chakra-ui/react"
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
        <Flex
            direction='column'
            maxW='21.785rem'
            maxH='26.26rem'
            backgroundColor='#fff'
            pos='relative'
            borderRadius='0.5rem'
            alignItems='center'
        >
            <Image
                borderRadius='0.5rem'
                h={['17rem', '18rem', '19rem', "21.5625rem"]}
                w={['17rem', '18rem', '19rem', "21.875rem"]}
                src={imgUrl}
                _hover={{ transform: 'scale(1.01)' }}
                transition='0.1s'
                cursor='pointer'
            />
            <Tooltip
                hasArrow
                arrowSize='5'
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
            <Flex direction='column' mt='0.75rem' w='100%'>
                <Text
                    whiteSpace='nowrap'
                    overflow='hidden'
                    variant='cardTitle'
                    fontSize={['1rem', '0.8rem', '0.7rem', '0.8rem', '1rem']}
                > {title}</Text>
                <Text variant='price'>${price}</Text>
            </Flex>

        </Flex >
    )
}