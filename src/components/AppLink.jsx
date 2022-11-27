import { Flex, Link } from "@chakra-ui/react";

import { colors } from "../styles/colors"

export default function AppLink({ text, href, download, color, backgroundColor, hoverColor, backHoverColor, paddingY = "0.75rem", paddingX = "1.2rem", borderColor = colors.primary, ...otherProps }) {

    return (
        <Flex textAlign="center">
            <Link {...otherProps} download={download} href={href} backgroundColor={backgroundColor} width="max-content" display="inline-block" color={color} paddingY={paddingY} paddingX={paddingX} borderRadius="0.4rem" border="1px solid" borderColor={borderColor} transition="all 400ms ease" _hover={{ color: hoverColor, textDecoration: "none", backgroundColor: backHoverColor, borderColor: "transparent" }}>{text}</Link>
        </Flex>
    )

}