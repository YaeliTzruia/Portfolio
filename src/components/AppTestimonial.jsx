import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import useComponents from "../hooks/useComponents";
import { colors } from "../styles/colors";


export default function AppTestimonial({ display = "column", src, alt, textColor = "rgba(255,255,255,0.6)", fontSize = "15px", textsize = "small", name, title, text, type }) {

    return (

        <Flex flexDir="column">
            < Flex >
                <Image objectFit="cover" border={`0.2rem solid ${colors.primaryVariant}`} overflow="hidden" margin="0 auto 1rem" borderRadius="50%" w={["7rem", "7rem", "10rem", "10rem"]} src={src} alt={alt} />
            </Flex >
            <Flex alignItems="center" gap="1rem" flexDir="column">
                <Heading fontSize={fontSize} type={type} >{name} - {title}</Heading>


                <Text width="95%" color={textColor} fontSize={textsize}>{text}</Text>
            </Flex>

        </Flex >
    )
}