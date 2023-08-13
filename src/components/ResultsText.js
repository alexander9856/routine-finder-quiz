import { Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
export const ResultsText = () => {
    return (
        <Flex
            position="absolute"
            top="-15"
            left="0"
            right="0"
            bottom="0"
            direction="column"
            justify="center"
            align="center"
            px="1rem"
        >
            <Text variant='title' maxW="36.4375rem">
                Build your everyday self care routine.
            </Text>

            <Text variant='subTitle' lineHeight='1.5rem' mt='2rem' maxW='35.1875rem'>
                Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.
            </Text>

            <Button variant='retake' as={Link} to='/quiz/1'>Retake the quiz</Button>
        </Flex>
    )
}