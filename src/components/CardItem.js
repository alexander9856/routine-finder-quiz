import { Flex, Image, Text } from "@chakra-ui/react"
import shampoo from '../assets/shampoo.png'
export const CardItem = () => {
    return (
        <Flex direction='column' maxW='21.785rem'>
            <Image src={shampoo} h='21.5625rem' />
            <Text variant='cardTitle' mt='0.75rem'>Milk Body Cleanser</Text>
            <Text variant='price'>$14.00</Text>
        </Flex>
    )
}