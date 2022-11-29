import { Flex, Link, Tooltip } from "@chakra-ui/react";
import { colors } from "../styles/colors";
import { NavLink as RouterLink } from "react";
import { useState } from "react";

export default function AppIconLink({ name, href, icon, color = colors.primary, target = "_blank", colorHover = colors.white, ...otherProps }) {

    const [toolTip, setToolTip] = useState(false)
    return (

        <Link className="tooltip"  {...otherProps} cursor="pointer" _hover={{ color: colorHover }} color={color} href={href} target={target}>
            {name && <Flex fontSize="0.8rem" backgroundColor={colors.backgroundNav} justifyContent="center" className="tooltiptext">{name}</Flex>}

            {/* <Tooltip placement='top-end' label={name} bg='gray.300' color='black'> */}
            {icon}
            {/* </Tooltip> */}
        </Link>

    )
}