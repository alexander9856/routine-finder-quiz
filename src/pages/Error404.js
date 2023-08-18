import { Box, Heading, Text, Link as ChakraLink, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import errorImage from "../assets/error404.jpg";
export const Error404 = () => {
    return (
        <>
            <Box
                bgColor="#FFFFFD"
                w={[340, 400, 450]}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mx="auto"
                borderRadius="15px"
                boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                pt="30px"
                pb="30px"
                px={[15, 35, 50]}
                mt="60px"
            >

                <Heading
                    fontSize="20px"
                    textAlign="center"
                >
                    Oops, there's nothing here!
                </Heading>
                <Image
                    src={errorImage}
                    mt="5px"
                />
                <Text
                    textAlign="center"
                    mt="15px"
                >
                    Click{" "}
                    <ChakraLink
                        as={Link}
                        to="/"
                        color="airForceBlue"
                        textDecoration="underline"
                        _hover={{ color: "blue" }}
                    >
                        here
                    </ChakraLink>{" "}
                    to go back to the home page!
                </Text>
            </Box>
        </>
    );
};

export default Error404;
