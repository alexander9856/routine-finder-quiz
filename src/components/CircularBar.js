import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export const CircularBar = ({ params }) => {
    return (
        <CircularProgress
            value={Number(params) * 20}
            trackColor='#EEF7FB'
            color="#AADDF3"
            pos={['relative','relative','relative','absolute']}
            top='-5'
            right={['0', '0', '0', '7rem']}
            size='6.3125rem'
            thickness='4px'
        >
            <CircularProgressLabel
                color="#1C2635"
                fontFamily='proxima-nova, sans-serif'
                fontSize='1.25rem'
                fontWeight='300'
                position='absolute'
            >
                {params + '/5'}
            </CircularProgressLabel>
        </CircularProgress>
    )
}