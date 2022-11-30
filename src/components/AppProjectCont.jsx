import { Box, Flex, Heading, Image, Link, Text, useToast } from "@chakra-ui/react";
import { useRef } from "react";


import { colors } from "../styles/colors"

export default function AppProjectCont({ desc, src, type, alt, header, textOne, textTwo, hrefOne, hrefTwo, color, backgroundColor1 = "transparent", backgroundColor2 = colors.primary, hoverColor, backHoverColor, fontSize = "1rem", ...otherProps }) {

    const toastIdErrorRef = useRef()
    const toast = useToast()

    function toastError() {
        toastIdErrorRef.current = toast({
            description: 'some text', position: 'left-bottom', render: () => (
                <Box textAlign="center" color='white' p={3} bg="red.200" borderRadius="0.6rem" border={`1px solid ${colors.primary}`}>
                    <Heading fontSize="1rem" as="h3">Copyright for Sue-App</Heading>
                </Box>
            ),
        })
    }


    return (
        <Flex flexDir="column">
            < Image borderRadius="0.5rem" overflow="hidden" src={src} alt={alt} />
            <Flex alignItems="center" flexDir="column" textAlign="center"  >
                <Heading marginTop={["1rem", "1rem", "1.2rem", "1.2rem"]} fontSize={fontSize} fontWeight={400} type={type}>{header}</Heading>
                <Text marginBottom={["1rem", "1rem", "2rem", "2rem"]} fontSize="10px">{desc}</Text>
                <Flex gap="1rem" marginBottom="1rem">
                    <Link
                        target="_blank"
                        onClick={() =>
                            toastError()
                        }
                        {...otherProps} href={hrefOne} backgroundColor={backgroundColor1} color={color} paddingY="0.75rem" paddingX=" 1.2rem" borderRadius="0.4rem" border="1px solid" borderColor={colors.primary} transition="all 400ms ease" _hover={{ color: hoverColor, textDecoration: "none", backgroundColor: backHoverColor, borderColor: "transparent" }}>{textOne}
                    </Link>

                    <Link
                        target="_blank"
                        {...otherProps} href={hrefTwo} backgroundColor={backgroundColor2} color={color} paddingY="0.75rem" paddingX=" 1.2rem" borderRadius="0.4rem" border="1px solid" borderColor={colors.primary} transition="all 400ms ease" _hover={{ color: hoverColor, textDecoration: "none", backgroundColor: backHoverColor, borderColor: "transparent" }}>{textTwo}
                    </Link>
                </Flex>
            </Flex>
        </Flex >
    )

}