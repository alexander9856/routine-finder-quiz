import { Box } from '@chakra-ui/react'
import HomeImg from '../assets/HomeIMG.png'
import { Overlay } from '../components/Overlay'
import { HomeText } from '../components/HomeText'
export const Home = () => {
    return (
        <Box
            backgroundImage={HomeImg}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize='cover'
            h='75vh'
            position="relative"
        >
            <Overlay />
            <HomeText />
        </Box >
    )
}