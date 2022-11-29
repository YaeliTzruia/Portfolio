import { Box, Flex } from "@chakra-ui/react";
import AppIconLink from "../components/AppIconLink";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { colors } from "../styles/colors";
import { useState } from "react";
import { Tooltip } from '@chakra-ui/react'


// Make a map function! 
//make sure the active design works!

export default function Navbar() {

    const [acctive, setAcctive] = useState(null)

    const icons = [
        { image: <AiOutlineHome />, id: 10, href: "#", name: "Home" },
        { image: <AiOutlineUser />, id: 20, href: "#about", name: "About" },
        { image: <BiBook />, id: 30, href: "#experience", name: "Experience" },
        // { image: <RiServiceLine />, id: 40, href: "#services", name: "Services" }, 
        { image: <BiMessageSquareDetail />, id: 50, href: "#contact", name: "Contact" }]

    return (
        <Flex backdropFilter="blur(15px)" borderRadius="3rem" gap="0.8rem" bottom="2rem" left="50%" position="fixed" zIndex={2} paddingY="0.7rem" paddingX="1.7rem" width="fit-content" transform="translateX(-50%)" backgroundColor={colors.backgroundNav}>
            {icons.map((item) =>
                // <Tooltip zIndex={3} label={item.name} bg='gray.300' color='black'>
                <AppIconLink name={item.name} key={item.id}
                    onClick={() => {
                        setAcctive(item.id)
                    }} target="_self"
                    _hover={{ backgroundColor: "rgba(0,0,0,0.4)" }} fontSize="1.1rem" color={colors.light} backgroundColor="transparent" padding="0.8rem" href={item.href} icon={item.image} />
                // </Tooltip>
            )}


        </Flex>
    )
    // style={{ color: acctive === item.href ? colors.background : colors.light, backgroundColor: acctive === item.id ? colors.background : "transparent" }}
}



