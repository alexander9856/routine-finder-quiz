import { Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { QuizContext } from '../contexts/QuizProvider'
export const ResultsText = () => {
    const { setUserAnswers, setUserWishlist } = useContext(QuizContext);
    const onRetakeClick = () => {
        setUserAnswers(null);
        setUserWishlist(null)
    }
    return (
        <Flex
            position="absolute"
            top="-10"
            left="0"
            right="0"
            bottom="0"
            direction="column"
            justify="center"
            align="center"
            px="1rem"
        >
            <Text variant='title' maxW="36.4375rem" lineHeight='3rem'>
                Build your everyday self care routine.
            </Text>

            <Text variant='subTitle' lineHeight='1.5rem' mt='2rem' maxW='37.1875rem'  fontSize='1rem'>
                Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.
            </Text>

            <Button variant='retake' as={Link} to='/quiz/1' onClick={onRetakeClick}>Retake the quiz</Button>
        </Flex>
    )
}