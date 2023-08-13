import { useContext } from 'react';
import { QuizContext } from '../contexts/QuizProvider'
import { Stack, Button, Text } from '@chakra-ui/react';
export const Answers = ({ questions, questionNumber }) => {
    const { setAnswers } = useContext(QuizContext)
    const question = questions[questionNumber];

    const onClickAnswer = (ans) => {
        const answer = ans.split('. ')[1]
        setAnswers({ [questionNumber]: answer })
    }

    return (
        <Stack mt='2rem' gap='0.63rem' maxW='70vw' wrap='wrap' justify='center' direction={['column', 'column', 'row', 'row']}>
            {question.answers.map((x, index) => (
                <Button variant='answerButton' key={index} onClick={() => onClickAnswer(x)} >
                    <Text variant='answerText'>{x}</Text>
                </Button>))}
        </Stack>
    )
}