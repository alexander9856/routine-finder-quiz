import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react'
import { QuizNavigation } from '../components/QuizNavigation';
export const QuizRoot = () => {
    return (
        <Flex h='100vh' justify='center' align='center' direction='column'>
            <Outlet />
            <QuizNavigation />
        </Flex>
    );
};
