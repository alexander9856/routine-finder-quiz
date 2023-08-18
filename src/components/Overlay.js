import { Box } from '@chakra-ui/react'
export const Overlay = ({ page }) => {
    return (
        <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            backgroundColor={`rgba(0, 0, 0, ${page === 'home' ? '0.35' : '0.55'})`}
        />
    )
}