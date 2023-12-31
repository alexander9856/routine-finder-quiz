import { Flex, Text } from '@chakra-ui/react'
export const FirstCard = () => {
    return (
        <Flex
            direction='column'
            p={["2.875rem 3.6875rem 3.3125rem 3.75rem","2.875rem 3.6875rem 3.3125rem 3.75rem","2.875rem 3.6875rem 3.3125rem 3.75rem","2.875rem 3.6875rem 3.3125rem 3.75rem","2.875rem 3.6875rem 3.3125rem 3.75rem","2.9947916666666665vw 3.8411458333333335vw 3.4505208333333335vw 3.90625vw"]}
            alignItems='center'
            backgroundColor='#EEF7FB'
            borderRadius='0.5rem'
            maxW={['19rem','21.785rem']}
            minW='349px'
            minH='430px'
            maxH='100%'
            mb='2.8rem'
        >
            <Text variant='cardTitle'>Daily routine</Text>
            <Text variant='cardSubtitle'>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</Text>
        </Flex>
    )
}