import { Flex, Text, Button, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { questions } from '../questionsAndAnswers';
import { useParams } from 'react-router-dom'
export const Quiz = () => {
    const params = useParams().id;
    const questionNumber = params - 1
    return (
        <Flex direction='column' justify='center' align='center' pos='relative' w='100vw'>
            <Text variant='questionTitle'>{questions[questionNumber].title}</Text>
            <Flex mt='2rem' gap='0.63rem' maxW='70vw' wrap='wrap' justify='center'>
                {questions[questionNumber].answers.map((x,index) => (
                    <Button variant='answerButton' key={index}>
                        <Text variant='answerText'>{x}</Text>
                    </Button>
                )
                )}
            </Flex>

            <CircularProgress
                value={Number(params) * 20}
                trackColor='#EEF7FB'
                color="#AADDF3"
                pos='absolute'
                top='-5'
                right='7rem'
                size='6.3125rem'
                thickness='4px'
            >
                <CircularProgressLabel
                    color="#1C2635"
                    fontFamily='proxima-nova, sans-serif'
                    fontSize='1.25rem'
                    fontWeight='300'
                >
                    {params + '/5'}
                </CircularProgressLabel>
            </CircularProgress>
        </Flex >
    )
}