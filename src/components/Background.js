import { Box } from "@chakra-ui/react"

export const Background = ({ image, children }) => {
    return (
        <Box
            backgroundImage={image}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize='cover'
            position="relative"
            h='75vh'
        >
            {children}
        </Box>
    )
}