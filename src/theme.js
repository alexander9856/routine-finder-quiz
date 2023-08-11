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
            _active: { opacity: '80%' }
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
