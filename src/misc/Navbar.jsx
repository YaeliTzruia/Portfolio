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

    const icons = [{ image: <AiOutlineHome />, id: 10, href: "#" }, { image: <AiOutlineUser />, id: 20, href: "#about" }, { image: <BiBook />, id: 30, href: "#experience" }, { image: <RiServiceLine />, id: 40, href: "#services" }, { image: <BiMessageSquareDetail />, id: 50, href: "#contact" }]

    return (
        <Flex backdropFilter="blur(15px)" borderRadius="3rem" gap="0.8rem" bottom="2rem" left="50%" position="fixed" zIndex={2} paddingY="0.7rem" paddingX="1.7rem" width="fit-content" transform="translateX(-50%)" backgroundColor={colors.backgroundNav}>
            {icons.map((item) => <AppIconLink key={item.id}
                onclick={() => {
                    setAcctive(item.id)
                }} target="_self"
                _hover={"rgba(0,0,0,0.4)"} fontSize="1.1rem" color={colors.light} backgroundColor="transparent" padding="0.8rem" href={item.href} icon={item.image} />
            )}



        </Flex>
    )
    // style={{ color: acctive === item.href ? colors.background : colors.light, backgroundColor: acctive === item.id ? colors.background : "transparent" }}
}

