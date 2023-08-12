import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export const CircularBar = ({params}) => {
    return (
        <CircularProgress
            value={Number(params) * 20}
            trackColor='#EEF7FB'
            color="#AADDF3"
            pos='absolute'
            top='-5'
            right='7rem'
            size='6.3125rem'
            thickness='4px'
        >
            <CircularProgressLabel
                color="#1C2635"
                fontFamily='proxima-nova, sans-serif'
                fontSize='1.25rem'
                fontWeight='300'
            >
                {params + '/5'}
            </CircularProgressLabel>
        </CircularProgress>
    )
}