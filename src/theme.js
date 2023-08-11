import { extendTheme, defineStyleConfig } from "@chakra-ui/react";


const Button = defineStyleConfig({
    variants: {
        start: {
            mt: '1.5rem',
            backgroundColor: '#C3EDFF',
            borderRadius: '0.5rem',
            p: '0.875rem 2.5rem',
            fontFamily: 'proxima-nova, sans-serif',
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: '500',
            color: "#1C2635",
            _hover: { opacity: '90%' },
            _active: { opacity: '70%' }
        },
        answerButton: {
            minW: '11.8125rem',
            p: '0.875rem 2.5rem 0.875rem 1.25rem',
            borderRadius: '0.5rem',
            border: '1px solid #5BC1ED',
        },
        next: {
            w: '11.8125rem',
            p: '0.875rem 2.5rem',
            borderRadius: '0.5rem',
            backgroundColor: '#C3EDFF',
            _hover: { opacity: '90%' },
            _active: { opacity: '70%' }
        }
    }
})



const Text = defineStyleConfig({
    variants: {
        title: {
            color: '#fff',
            fontFamily: 'Grange, sans-serif',
            lineHeight: '2.75rem',
            fontSize: '2.5rem',
            fontWeight: '600',
            fontStyle: 'normal',
            textAlign: 'center'
        },
        subTitle: {
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'proxima-nova, sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            mt: '16px'
        },
        questionTitle: {
            color: '#1C2635',
            textAlign: 'center',
            fontFamily: 'Grange, sans-serif',
            fontSize: '2.5rem',
            fontWeight: '500',
            lineHeight: '2.75rem',
            w:'36.4375rem'
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
            textAlign:'left'
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
    },
    ThemeConfig: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
});

export default theme;
