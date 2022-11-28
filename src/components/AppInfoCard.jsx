import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import useComponents from "../hooks/useForm";


export default function AppInfoCard({ flexDir = "column", widthIcon, gap = "0", display = "column", src, alt, classname, Iconcolor, iconSize = "", textColor = "rgba(255,255,255,0.6)", fontSize = "15px", textsize = "small", icon, header, text, type = "h2", ...otherProps }) {

    return (

        <Flex {...otherProps} flexDir={flexDir} gap={gap}>
            <Flex width={widthIcon} className={classname} color={Iconcolor}>{icon}</Flex>
            <Flex display={display}>
                <Heading {...otherProps} fontSize={fontSize} type={type} >{header}</Heading>
                <Text color={textColor} fontSize={textsize}>{text}</Text>
            </Flex>

        </Flex>
    )
}