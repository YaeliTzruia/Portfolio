import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { Box, Button, color, Flex } from "@chakra-ui/react";
import NavbarLink from "../components/NavbarLink";
import "../styles/styles.css"
import { colors } from "../styles/colors";



export default function Navbar({ text }) {


    return (
        <Flex boxShadow="0 1px 7px 2px #80808024" backgroundColor="white" justifyContent="center" align="center" w="100%" h="60px">
            <Flex w="100%" justifyContent="space-between" >
                <Flex justifyContent="center" alignItems="center" w="15%" >
                    <Flex marginLeft="10%" w="90%" justifyContent="space-between">
                        {/* <FaGithub className="icon" />
                        <FaLinkedin className="icon" />
                        <FaRegEnvelope className="icon" /> */}
                    </Flex>

                </Flex>
                <Flex w="70%" align="center" justifyContent="center">
                    <Flex align="center" justifyContent="space-between" width="30%">
                        <NavbarLink text="Home" />
                        <NavbarLink text="About" />
                        <NavbarLink text="Projects" />
                    </Flex>
                </Flex>
                <Flex justifyContent="space-around" w="15%">
                    <Button fontWeight="5%" cursor="pointer" backgroundColor={colors.turquoise} color={colors.white} _hover={{ backgroundColor: "#07b7fd54", color: "#181818c2" }} w="80%">Download Resume</Button>
                </Flex>
            </Flex>
        </Flex >
    )
}