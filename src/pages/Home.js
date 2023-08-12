import HomeImg from '../assets/HomeIMG.png'
import { Overlay } from '../components/Overlay'
import { HomeText } from '../components/HomeText'
import { Background } from '../components/Background'
export const Home = () => {
    return (
        <Background image={HomeImg}>
            <Overlay page='home' />
            <HomeText />
        </Background>
    )
}