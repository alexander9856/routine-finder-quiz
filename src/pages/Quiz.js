import { Flex, Text, Button, Stack } from '@chakra-ui/react';
import { questions } from '../questionsAndAnswers';
import { useParams } from 'react-router-dom'
import { CircularBar } from '../components/CircularBar';
import { Answers } from '../components/Answers';
export const Quiz = () => {
    const params = useParams().id;
    const questionNumber = params - 1;

    return (
        <Flex
            direction='column'
            justify='center'
            align='center'
            pos='relative'
            w='100vw'
            px='2rem'
        >
            <CircularBar params={params} />
            <Text variant='questionTitle'>{questions[questionNumber].title}</Text>
            <Answers questions={questions} questionNumber={questionNumber} />
        </Flex >
    )
}