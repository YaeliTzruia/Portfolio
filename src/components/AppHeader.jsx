import { Heading } from "@chakra-ui/react";
import { colors } from "../styles/colors";

export default function AppHeader({ text, type, color = colors.white, size = "15px", marginBottom = "1.5rem", ...otherProps }) {

    return (
        <Heading {...otherProps} marginBottom={marginBottom} fontSize={size} color={color} as={type}>{text}</Heading>
    )
}