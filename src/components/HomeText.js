import { Flex, Text, Button } from '@chakra-ui/react'
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
        >
            <Text variant='title'>
                Build a self care routine<br /> suitable for you
            </Text>
            
            <Text variant='subTitle'>
                Take out test to get a personalised self care<br /> routine based on your needs.
            </Text>

            <Button variant='start'>Start the quiz</Button>
        </Flex>
    )
}