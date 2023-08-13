import ResultsIMG from '../assets/ResultsIMG.png'
import { Overlay } from '../components/Overlay'
import { Background } from '../components/Background'
import { ResultsText } from '../components/ResultsText'
import { Stack, SlideFade, Box } from '@chakra-ui/react'
import { FirstCard } from '../components/FirstCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductSlider } from '../components/ProductSlider'
import { useLoaderData, json } from 'react-router-dom'
export const Results = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <>
            <Background image={ResultsIMG} page='results'>
                <Overlay page='results' />
                <ResultsText />
            </Background>

            <SlideFade
                in={true}
                offsetY="50px"
                style={{ margin: "0px auto" }}
            >
                <Stack
                    direction={['column', 'column', 'column', 'row']}
                    spacing={10}
                    justify={'center'}
                    alignItems='center'
                    w='100%'
                    mb='5.75rem'
                    mx='auto'
                    mt={['-1rem', '-2.5rem', '-4remrem', '-4.5rem']}
                    zIndex='999'
                    pos='relative'
                >
                    <FirstCard />
                    <ProductSlider />
                </Stack>
            </SlideFade>
        </>
    )
}


export const loader = async () => {
    const res = await fetch('https://jeval.com.au/collections/hair-care/products.json?page=1')
    if (!res.ok) {
        throw json({ message: 'Could not fetch data.' }, { status: 500 });
    } else {
        const data = await res.json();
        return data.products
    }
};