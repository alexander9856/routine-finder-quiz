import ResultsIMG from '../assets/ResultsIMG.png'
import { Overlay } from '../components/Overlay'
import { Background } from '../components/Background'
import { ResultsText } from '../components/ResultsText'
import { Stack, SlideFade } from '@chakra-ui/react'
import { FirstCard } from '../components/FirstCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductSlider } from '../components/ProductSlider'
import { useLoaderData, json } from 'react-router-dom'
export const Results = () => {
    const products = useLoaderData();
    return (
        <>
            <Background image={ResultsIMG} page='results'>
                <Overlay page='results' />
                <ResultsText />
            </Background>


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

                <ProductSlider products={products} />
            </Stack >
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