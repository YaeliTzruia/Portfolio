import { Flex, Link } from "@chakra-ui/react";
import { colors } from "../styles/colors";
import { NavLink as RouterLink } from "react";

export default function AppIconLink({ href, icon, color = colors.primary, target = "_blank", colorHover = colors.white, ...otherProps }) {
    return (

        <Link  {...otherProps} cursor="pointer" _hover={{ color: colorHover }} color={color} href={href} target={target}>{icon}</Link>

    )
}