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
        >
            <Text variant='title'>
                Build your everyday self<br /> care routine.
            </Text>

            <Text variant='subTitle' lineHeight='1.5rem' mt='2rem'>
                Perfect for if you're looking for soft, nourished skin, our moisturizing body<br/> washes are made with skin-natural nutrients that work with your skin to<br/> replenish moisture. With a light formula, the bubbly lather leaves your skin<br/> feeling cleansed and cared for. And by choosing relaxing fragrances you can <br/>add a moment of calm to the end of your day.
            </Text>

            <Button variant='retake' as={Link} to='/quiz/1'>Retake the quiz</Button>
        </Flex>
    )
}