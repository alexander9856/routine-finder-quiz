import ResultsIMG from '../assets/ResultsIMG.png'
import { Overlay } from '../components/Overlay'
import { Background } from '../components/Background'
import { ResultsText } from '../components/ResultsText'
import { Stack } from '@chakra-ui/react'
import { FirstCard } from '../components/FirstCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductSlider } from '../components/ProductSlider'
export const Results = () => {
    return (
        <>
            <Background image={ResultsIMG} page='results'>
                <Overlay page='results' />
                <ResultsText />
            </Background>

            <Stack
                direction={['column', 'column', 'row', 'row']}
                spacing={10}
                justify={'center'}
                w='100%'
                mb='5.75rem'
                mx='auto'
                mt='-4.5rem'
                zIndex='999'
                pos='relative'
            >
                <FirstCard />
                <ProductSlider />
            </Stack>

        </>
    )
}