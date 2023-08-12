import { Flex, Text, Button, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { questions } from '../questionsAndAnswers';
import { useParams } from 'react-router-dom'
import { CircularBar } from '../components/CircularBar';
export const Quiz = () => {
    const params = useParams().id;
    const questionNumber = params - 1
    return (
        <Flex direction='column' justify='center' align='center' pos='relative' w='100vw'>
            <Text variant='questionTitle'>{questions[questionNumber].title}</Text>
            <Flex mt='2rem' gap='0.63rem' maxW='70vw' wrap='wrap' justify='center'>
                {questions[questionNumber].answers.map((x, index) => (
                    <Button variant='answerButton' key={index}>
                        <Text variant='answerText'>{x}</Text>
                    </Button>
                )
                )}
            </Flex>
            <CircularBar params={params} />
        </Flex >
    )
}