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
            position="relative"
            h='75vh'
        >
            <Overlay />
            <HomeText />
        </Box >
    )
}