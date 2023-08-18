import { Box } from "@chakra-ui/react"

export const Background = ({ image, page, children }) => {
    return (
        <Box
            backgroundImage={image}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize='cover'
            position="relative"
            h={page === 'home' ? '100vh' : '75vh'}
        >
            {children}
        </Box>
    )
}