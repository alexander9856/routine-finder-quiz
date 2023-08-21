import { extendTheme, defineStyleConfig } from "@chakra-ui/react";


const Button = defineStyleConfig({
    variants: {
        start: {
            mt: '1.5rem',
            backgroundColor: '#C3EDFF',
            borderRadius: '0.5rem',
            p: '0.875rem 2.5rem',
            fontFamily: 'Proxima-Nova, sans-serif',
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: '500',
            color: "#1C2635",
            _hover: { opacity: '90%', transform: 'scale(1.1)', fontWeight: '600' },
            _active: { opacity: '70%' },

        },
        answerButton: {
            minW: '11.8125rem',
            p: '0.875rem 2.5rem 0.875rem 1.25rem',
            borderRadius: '0.5rem',
            border: '1px solid #5BC1ED',
            display: 'flex',
            justifyContent: 'flex-start',
            whiteSpace: 'unset',
            height: 'auto',
            _hover: { backgroundColor: '#e1f6ff' }

        },
        next: {
            w: '11.8125rem',
            p: '0.875rem 2.5rem',
            borderRadius: '0.5rem',
            backgroundColor: '#C3EDFF',
            _hover: { opacity: '90%' },
            _active: { opacity: '70%' }
        },
        retake: {
            width: '14.875rem',
            padding: '0.875rem 2.5rem',
            borderRadius: '0.5rem',
            fontFamily: 'proxima-nova, sans-serif',
            fontWeight: '500',
            backgroundColor: 'transparent',
            color: '#fff',
            border: '1px solid #fff',
            mt: '2rem',
            _hover: { opacity: '90%', transform: 'scale(1.1)', fontWeight: '600' },

        }
    }
})



const Text = defineStyleConfig({
    variants: {
        title: {
            color: '#fff',
            fontFamily: 'Spectral, sans-serif',
            lineHeight: ['2.8rem','3.75rem'],
            fontSize: ['2.5rem', '2.5rem', '2.8rem', '3.2rem'],
            fontWeight: '500',
            fontStyle: 'normal',
            textAlign: 'center',
            maxW: '45.75rem'
        },
        subTitle: {
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Proxima-Nova, sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            mt: '16px',
            letterSpacing: '1px',
            fontSize: ['0.9rem','1.1rem'],
            maxW: '24.9375rem'
        },
        questionTitle: {
            color: '#1C2635',
            textAlign: 'center',
            fontFamily: 'Spectral, sans-serif',
            fontSize: ['1.5rem', '1.8rem', '2rem', '2.5rem'],
            fontWeight: '500',
            lineHeight: ['1.75rem','1.75rem','2.75rem'],
            w: ['100%', '100%', '36.4375rem', '36.4375rem']
        },
        back: {
            color: '#677487',
            textAlign: 'center',
            fontFamily: 'proxima-nova, sans-serif',
            fontWeight: '500',
            textDecoration: 'underline',
            _hover: { opacity: '90%' },
            _active: { opacity: '70%' },
            cursor: 'pointer'
        },
        answerText: {
            color: '#1C2635',
            fontFamily: 'proxima-nova, sans-serif',
            fontWeight: '400',
            minW: "8.0625rem",
            textAlign: 'left'
        },
        cardTitle: {
            color: '#1C2635',
            fontFamily: 'Spectral, sans-serif',
            fontSize: '1.5rem',
            fontWeight: '600',
            lineHeight: '1.65rem',
            textAlign: 'center',


        },
        cardSubtitle: {
            color: '#1C2635',
            fontFamily: 'proxima-nova, sans-serif',
            fontWeight: '400',
            lineHeight: '1.5rem',
            mt: '1rem',
        },
        price: {
            color: '#1C2635',
            textAlign: 'center',
            fontFamily: 'Spectral, sans-serif',
            fontSize: ['1.125rem', '0.95rem', '0.95rem', '1rem', '1.125rem'],
            fontWeight: '500',
            lineHeight: '1.2375rem',
            mt: '0.5rem',
            // pos: 'absolute',
            // bottom: '-25px',
            width: '100%',
            textAlign: 'center',
        },
        noProducts: {
            textAlign: 'center',
            mt: '2rem',
            mx:'auto',
            fontFamily: 'Spectral, sans-serif',
            fontWeight: '700',
            fontSize: ['1.3rem','1.3rem','1.5rem'],
            maxW:'80%'
        }
    }
})


const theme = extendTheme({
    components: {
        Button,
        Text,
    },
    breakpoints: {
        sm: "30em", // 480px
        md: "48em", // 768px
        lg: "62em", // 992px
        xl: "80em", // 1280px
        "2xl": "96em", // 1536px
        "3xl": "112.5em"
    },
    ThemeConfig: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
});

export default theme;
