import { Flex, Image, Link } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from 'react-icons/bs'

import "../styles/style.css"
import AppHeader from "../components/AppHeader";
import CTA from "./CTA";
import { colors } from "../styles/colors";
import profileImage from "../assets/profileImg.jpeg"
import cartoon from "../assets/CartoonImg.webp"
import AppImage from "../components/AppImage";
import code from "../assets/code.jpg"
import AppIconLink from "../components/AppIconLink";




export default function Header() {




    return (

        <Flex w={["90%", "86%", "75%", "75%"]} justifyContent="center" height={["100vh", "100vh", "68vh", "100%"]}
            position="absolute" textAlign="center" flexDir="column" >
            {/* <Flex w="4rem" border={`2px solid ${colors.primary}`} borderRadius="50%"> */}
            <Flex align="center" textAlign="center" justifyContent="center">

                <Flex flexDir="column">
                    {/* <Flex flexDir="column"> */}
                    <Flex align="center">
                        <AppHeader marginLeft="1.1rem" marginBottom="0.5rem" size="1.5rem" text="Yael Tzruia" type="h1" />
                        {/* <Image marginLeft="9rem" position="absolute"
                            //  border={`2px solid ${colors.primary}`} 
                            borderRadius="50%" w="60px" src={cartoon} /> */}
                    </Flex>
                    <AppHeader size="0.8rem" color={colors.light} text="Full-Stack Web Developer" type="h5" />
                    {/* </Flex> */}


                </Flex>
            </Flex>
            <CTA />
            <Flex w="100%" justifyContent="space-evenly">
                <Flex display={["none", "none", "flex", "flex"]} flexDir="column" alignItems="center" gap="1rem" position="absolute" left="0" top="25rem">
                    <AppIconLink href="https://www.linkedin.com/in/yael-tzruia-84067b224/" icon={<BsLinkedin />} />
                    <AppIconLink href="https://github.com/YaeliTzruia" icon={<BsGithub />} />


                </Flex>
                <Flex zIndex={2} _hover={{ transform: "rotate(360deg)", transition: "0.5s ease", opacity: 0.1 }} justifyContent="center" overflow="hidden" bgGradient='linear(to-b, primary, transparent)' className="me" position="absolute" borderRadius="60%" marginTop="3rem" height="19rem" width="19rem" left="calc(50% -11rem)">
                    <AppImage transition="0.5s ease" zIndex={2} marginLeft="0.1rem" paddingBottom="1.5rem" height="28rem" width="20rem" image={code} objectFit="cover" position="absolute" alt="profile image" />



                </Flex>
                <Flex justifyContent="center" overflow="hidden" bgGradient='linear(to-b, primary, transparent)' className="me" position="absolute" borderRadius="60%" marginTop="3rem" height="19rem" width="19rem" left="calc(50% -11rem)">

                    <AppImage zIndex={1} marginLeft="0.1rem" paddingBottom="1.5rem" height="28rem" width="20rem" objectFit="cover" image={profileImage} position="absolute" alt="profile image" />

                </Flex>

                <Link display={["none", "none", "flex", "flex"]} color={colors.primary} fontWeight={300} fontSize="0.9rem" position="absolute" right="-2.3rem" top="25rem" transform="rotate(90deg)" href="#contact">Scroll Down</Link>
            </Flex>
        </Flex >

    )
}


// <Flex justifyContent="center" overflow="hidden" bgGradient='linear(to-b, primary, transparent)' className="me" position="absolute" borderRadius="60%" marginTop="3rem" height="19rem" width="19rem" left="calc(50% -11rem)">

// <AppImage zIndex={1} paddingBottom="7.5rem" height="26rem" width="20rem" objectFit="cover" image={cartoon} position="absolute" alt="profile image" />

// </Flex>