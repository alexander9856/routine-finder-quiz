import { Flex, Button, Text, Image } from '@chakra-ui/react'
import { useParams, Link } from 'react-router-dom'
import arrow from '../assets/arrow.svg'
export const QuizNavigation = () => {
    const params = Number(useParams().id);

    const questionNumber = params - 1
    const isAnswered = questionNumber in JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    return (
        <Flex mt='2rem' align='center' gap='1.25rem'>
            <Text variant='back' as={Link} to={params === 1 ? '/' : `/quiz/${params - 1}`}>Back</Text>
            {params !== 5 &&
                (isAnswered ? (
                    <Button
                        rightIcon={<Image src={arrow} />}
                        variant='next'
                        as={Link}
                        to={`/quiz/${params + 1}`}
                    >
                        Next question
                    </Button>
                ) : (
                    <Button
                        rightIcon={<Image src={arrow} />}
                        variant='next'
                        as='button'
                        disabled
                        opacity='50%'
                        _hover={{}}
                    >
                        Next question
                    </Button>
                ))}
            {params === 5 &&
                <Button
                    w='14.875rem'
                    variant='next'
                    as={Link}
                    to='/quiz/results'
                >
                    Discover your results</Button>
            }
        </Flex>
    )
}