import { Divider, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from 'react-icons/bs'

import "../styles/style.css"
import AppHeader from "../components/AppHeader";
import CTA from "./CTA";
import { colors } from "../styles/colors";
// import profileImage from "../assets/surf.jpeg"
import profileImage from "../assets/profilepic.png"
// import profileImage from "../assets/me2.png"
import AppImage from "../components/AppImage";
import AppIconLink from "../components/AppIconLink";

export default function Header() {
    // height="100vh"
    return (
        // <Flex marginTop="4rem" w="100%" justifyContent="center" alignItems="center" flexDir="column" paddingTop="7rem" overflow="hidden">
        <Flex w={["90%", "86%", "75%", "75%"]} justifyContent="center" height={["100vh", "100vh", "68vh", "100%"]}
            position="absolute" textAlign="center" flexDir="column">
            {/* <AppHeader text="Hi I'm" type="h5" /> */}
            <AppHeader size="2rem" text="Yael Tzruia" type="h1" />
            <AppHeader color={colors.light} text="Full-Stack Web Developer" type="h5" />
            <CTA />
            <Flex w="100%" justifyContent="space-evenly">
                <Flex display={["none", "none", "flex", "flex"]} flexDir="column" alignItems="center" gap="0.8rem" position="absolute" left="0" top="25rem">
                    <AppIconLink href="https://www.linkedin.com/in/yael-tzruia-84067b224/" icon={<BsLinkedin />} />
                    <AppIconLink href="https://github.com/YaeliTzruia" icon={<BsGithub />} />


                </Flex>
                <Flex justifyContent="center" paddingTop="5rem" paddingX="1.5rem" overflow="hidden" bgGradient='linear(to-b, primary, transparent)' className="me" position="absolute" borderTopRadius="12rem" borderBottomRadius="1rem" marginTop="4rem" height="25rem" width="20rem" left="calc(50% -11rem)">
                    {/* <AppImage height="23.5rem" image={profileImage} position="absolute" alt="profile image" /> */}
                    {/* <AppImage paddingBottom="65px" paddingRight="30px" transform="scale(1.5)" height="23.5rem" borderBottomRadius="1rem" image={profileImage} position="absolute" alt="profile image" /> */}
                </Flex>
                <Link display={["none", "none", "flex", "flex"]} color={colors.primary} fontWeight={300} fontSize="0.9rem" position="absolute" right="-2.3rem" top="25rem" transform="rotate(90deg)" href="#contact">Scroll Down</Link>
            </Flex>
        </Flex>
        // </Flex>
    )
}