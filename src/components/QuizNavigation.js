import { Flex, Button, Text } from '@chakra-ui/react'
export const QuizNavigation = () => {
    return (
        <Flex mt='2rem' align='center'gap='1.25rem'>
            <Text variant='back'>Back</Text>
            <Button variant='next'>Next question</Button>
        </Flex>
    )
}