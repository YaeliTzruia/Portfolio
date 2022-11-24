import { Box, Flex, Image } from "@chakra-ui/react";
import stain from "../assets/Color-Stain-Transparent.png"
import profilePic from "../assets/profilepic-fococlipping-standard.png"
import circle from "../assets/KRC-half-circle-transparent.png"
export default function LandingPage() {


    return (
        <Flex h="100%" justifyContent="space-between" w="100%">

            <Flex justifyContent="center" alignItems="center" marginTop="4%" w="100%" align="center" >

                {/* <Flex position="absolute" flexDir="row-reverse" w="90%" align="center">
                    <Flex align="center" flexDir="row-reverse" w="90%">
                        <Image position="relative" src={circle} alt="half-circle" w="40%" />
                        <Image border="20px solid" borderColor="transparent" borderBottomColor="pink.100" borderBottomWidth="100%" marginBottom="20%" marginRight="6%" position="absolute" borderBottomRadius="50%" src={profilePic} w="30%" alt="profile picture" />
                    </Flex>
                </Flex> */}
                <Image position="relative" src={stain} alt="stain" w="50%" />
            </Flex>
        </Flex>
    )
}