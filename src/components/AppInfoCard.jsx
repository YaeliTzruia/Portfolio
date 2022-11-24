import { Flex, Heading, Text } from "@chakra-ui/react";


export default function AppInfoCard({ display = "column", classname, Iconcolor, iconSize = "", textColor = "rgba(255,255,255,0.6)", fontSize = "15px", textsize = "small", icon, header, text, type, ...otherProps }) {


    return (

        <>
            <Flex className={classname} color={Iconcolor}>{icon}</Flex>
            <Flex display={display}>
                <Heading {...otherProps} fontSize={fontSize} type={type} >{header}</Heading>
                <Text color={textColor} fontSize={textsize}>{text}</Text>
            </Flex>

        </>
    )
}