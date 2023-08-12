import { Flex, Text } from '@chakra-ui/react'
export const FirstCard = () => {
    return (
        <Flex
            direction='column'
            p="2.875rem 3.6875rem 3.3125rem 3.75rem"
            alignItems='center'
            backgroundColor='#EEF7FB'
            borderRadius='0.5rem'
            w='21.785rem'
        >
            <Text variant='cardTitle'>Daily routine</Text>
            <Text variant='cardSubtitle'>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</Text>
        </Flex>
    )
}