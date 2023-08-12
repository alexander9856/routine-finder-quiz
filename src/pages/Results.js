import ResultsIMG from '../assets/ResultsIMG.png'
import { Overlay } from '../components/Overlay'
import { Background } from '../components/Background'
import { ResultsText } from '../components/ResultsText'
export const Results = () => {
    return (
        <>
            <Background image={ResultsIMG}>
                <Overlay page='results' />
                <ResultsText />
            </Background>
        </>
    )
}