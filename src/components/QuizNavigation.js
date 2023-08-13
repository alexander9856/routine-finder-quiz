import { useContext } from 'react'
import { QuizContext } from '../contexts/QuizProvider'
import { Flex, Button, Text, Image } from '@chakra-ui/react'
import { useParams, Link } from 'react-router-dom'
import arrow from '../assets/arrow.svg'
export const QuizNavigation = () => {
    const params = Number(useParams().id);
    const { answers } = useContext(QuizContext);

    const questionNumber = params - 1;
    const isAnswered = answers[questionNumber];
    return (
        <Flex mt='2rem' align='center' gap='1.25rem'>
            <Text variant='back' as={Link} to={params === 1 ? '/' : `/quiz/${params - 1}`}>Back</Text>

            {params !== 5 &&
                <Button
                    rightIcon={<Image src={arrow} />}
                    variant='next'
                    as={isAnswered ? Link : 'button'}
                    to={`/quiz/${params + 1}`}
                    disabled={!isAnswered}
                    opacity={!isAnswered ? '50%' : '100%'}
                    _hover={{}}
                >
                    Next question
                </Button>
            }

            {params === 5 &&
                <Button
                    w='14.875rem'
                    variant='next'
                    as={isAnswered ? Link : 'button'}
                    to='/quiz/results'
                    disabled={!isAnswered}
                    opacity={!isAnswered ? '50%' : '100%'}
                    _hover={{}}
                >
                    Discover your results</Button>
            }
        </Flex>
    )
}