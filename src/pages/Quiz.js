import { Flex, Text, Button } from '@chakra-ui/react';
import { questions } from '../questionsAndAnswers';
export const Quiz = () => {
    return (
        <Flex direction='column' justify='center' align='center'>
            <Text variant='questionTitle' w='36.4375rem'>{questions[0].title}</Text>
            <Flex mt='2rem' gap='0.63rem'>
                {questions[0].answers.map(x => (
                    <Button variant='answer' key={x.id}>{x}</Button>
                )
                )}
            </Flex>
        </Flex >
    )
}