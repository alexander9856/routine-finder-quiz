import React, { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { CardItem } from '../components/CardItem';

export const Test = () => {
    const items = [<CardItem />, <CardItem />, <CardItem />, <CardItem />, /* Add more items here */];

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const CustomCarousel = ({ items }) => {
        const chunkedItems = chunkArray(items, 2);
        const [currentIndex, setCurrentIndex] = useState(0);

        const handlePrevSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? chunkedItems.length - 1 : prevIndex - 1));
        };

        const handleNextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === chunkedItems.length - 1 ? 0 : prevIndex + 1));
        };

        return (
            <Box w='100%' display='flex' flexDirection='column' alignItems='center'>
                <Button onClick={handlePrevSlide}>Previous</Button>
                <Flex justifyContent='center'>
                    {chunkedItems[currentIndex].map((item, index) => (
                        <Box key={index} m={2}>
                            <CardItem item={item} />
                        </Box>
                    ))}
                </Flex>
                <Button onClick={handleNextSlide}>Next</Button>
            </Box>
        );
    };

    return (
        <Box w='50%'>
            <CustomCarousel items={items} />
        </Box>
    );
};