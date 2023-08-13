import { Flex, Text, Button, Stack } from '@chakra-ui/react';
import { questions } from '../questionsAndAnswers';
import { useParams } from 'react-router-dom'
import { CircularBar } from '../components/CircularBar';
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
            <Stack mt='2rem' gap='0.63rem' maxW='70vw' wrap='wrap' justify='center' direction={['column', 'column', 'row', 'row']}>
                {questions[questionNumber].answers.map((x, index) => (
                    <Button variant='answerButton' key={index} >
                        <Text variant='answerText'>{x}</Text>
                    </Button>
                )
                )}
            </Stack>

        </Flex >
    )
}