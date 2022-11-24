import { Flex, Heading, Image, Link } from "@chakra-ui/react";

import { colors } from "../styles/colors"

export default function AppProjectCont({ disabeld, src, type, alt, header, textOne, textTwo, hrefOne, hrefTwo, color, backgroundColor1 = "transparent", backgroundColor2 = colors.primary, hoverColor, backHoverColor, fontSize = "25px", ...otherProps }) {

    return (
        <Flex flexDir="column">
            <Image borderRadius="1.5rem" overflow="hidden" src={src} alt={alt} />
            <Heading marginTop={["1rem", "1rem", "1.2rem", "1.2rem"]} marginBottom={["1rem", "1rem", "2rem", "2rem"]} fontSize={fontSize} fontWeight={400} type={type}>{header}</Heading>
            <Flex gap="1rem" marginBottom="1rem">
                <Link
                    target="_blank"
                    disabeld={disabeld}
                    {...otherProps} href={hrefOne} backgroundColor={backgroundColor1} color={color} paddingY="0.75rem" paddingX=" 1.2rem" borderRadius="0.4rem" border="1px solid" borderColor={colors.primary} transition="all 400ms ease" _hover={{ color: hoverColor, textDecoration: "none", backgroundColor: backHoverColor, borderColor: "transparent" }}>{textOne}
                </Link>

                <Link
                    target="_blank"
                    {...otherProps} href={hrefTwo} backgroundColor={backgroundColor2} color={color} paddingY="0.75rem" paddingX=" 1.2rem" borderRadius="0.4rem" border="1px solid" borderColor={colors.primary} transition="all 400ms ease" _hover={{ color: hoverColor, textDecoration: "none", backgroundColor: backHoverColor, borderColor: "transparent" }}>{textTwo}
                </Link>
            </Flex>
        </Flex>
    )

}