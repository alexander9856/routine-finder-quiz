import {useContext} from 'react'
import {QuizContext} from '../contexts/QuizProvider'
import { Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
export const HomeText = () => {
    const { setUserAnswers, setUserWishlist } = useContext(QuizContext);
    const onStartClick = () => {
        setUserAnswers(null);
        setUserWishlist(null)
    }
    return (
        <Flex
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            direction="column"
            justify="center"
            align="center"
            px='2rem'
        >
            <Text variant='title' >
                Build a self care routine suitable for you
            </Text>

            <Text variant='subTitle' >
                Take out test to get a personalised self care routine based on your needs.
            </Text>

            <Button variant='start' onClick={onStartClick} as={Link} to='/quiz/1'>Start the quiz</Button>
        </Flex>
    )
}