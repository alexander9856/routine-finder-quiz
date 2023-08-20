import { Flex, Text, Button, SlideFade } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
export const HomeText = () => {
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
            <Text variant='title' maxW='45.75rem'>
                Build a self care routine suitable for you
            </Text>

            <Text variant='subTitle' maxW='24.9375rem'>
                Take out test to get a personalised self care routine based on your needs.
            </Text>

            <Button variant='start' as={Link} to='/quiz/1'>Start the quiz</Button>
        </Flex>
    )
}