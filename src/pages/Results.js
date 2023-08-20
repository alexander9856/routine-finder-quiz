import ResultsIMG from '../assets/ResultsIMG.png'
import { Overlay } from '../components/Overlay'
import { Background } from '../components/Background'
import { ResultsText } from '../components/ResultsText'
import { Stack, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { QuizContext } from '../contexts/QuizProvider'
import { FirstCard } from '../components/FirstCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductSlider } from '../components/ProductSlider'
import { useLoaderData, json } from 'react-router-dom'
import { filterProducts } from '../filterProducts'
import { useSortProducts } from '../hooks/useSortProducts';
export const Results = () => {
    const products = useLoaderData();
    const { userAnswers, userWishlist } = useContext(QuizContext);
    const filteredData = filterProducts(products, userAnswers);
    const sorted = useSortProducts(filteredData, userWishlist);
    return (
        <>
            <Background image={ResultsIMG} page='results'>
                <Overlay page='results' />
                <ResultsText />
            </Background>

            {sorted.length > 0 ?
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

                    <ProductSlider products={sorted} />
                </Stack >
                :
                <Text variant='noProducts'>
                    There are no suitable products found for you :(
                </Text>
            }

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