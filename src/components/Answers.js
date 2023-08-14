import { useContext } from 'react';
import { QuizContext } from '../contexts/QuizProvider'
import { Stack, Button, Text } from '@chakra-ui/react';
export const Answers = ({ questions, questionNumber }) => {
    const { userAnswers, setUserAnswers } = useContext(QuizContext)
    const { type, answers } = questions[questionNumber];

    const onClickAnswer = (answ) => {
        const answer = answ.split('. ')[1]
        setUserAnswers({ [type]: answer })
    }

    return (
        <Stack mt='2rem' gap='0.63rem' maxW='70vw' wrap='wrap' justify='center' direction={['column', 'column', 'row', 'row']}>
            {answers.map((answerText, index) => {
                const answer = answerText.split('. ')[1];
                const clickedAnswer = userAnswers[questionNumber];
                const isClicked = clickedAnswer && clickedAnswer[type] === answer;
                return (
                    <Button
                        key={index}
                        variant='answerButton'
                        onClick={() => onClickAnswer(answerText)}
                        backgroundColor={isClicked ? '#c3edff' : "#fff"}
                    >
                        <Text variant='answerText'>{answerText}</Text>
                    </Button>
                );
            })}
        </Stack>
    )
}