import { Flex, Text } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import AppIconLink from "../components/AppIconLink";

import AppLink from "../components/AppLink";
import { colors } from "../styles/colors";

export default function Footer() {


    // const randomId = Math.floor(Math.random() * 100)

    const links = [
        { id: 10, href: "#", text: "Home" },
        { id: 333, href: "#about", text: "About" },
        { id: 201, href: "#experience", text: "Experience" },
        { id: 594, href: "#services", text: "Services" },
        { id: 976, href: "#testimonials", text: "Recomendations" },
        { id: 554, href: "#contact", text: "Contact" }
    ]
    const socials = [
        { id: 8, href: "https://github.com/YaeliTzruia", icon: <BsGithub /> },
        { id: 8, href: "https://www.linkedin.com/in/yael-tzruia-84067b224/", icon: <BsLinkedin /> },
    ]
    return (

        <Flex textAlign="center" w="100%" height="100%"
            position="absolute" flexDir="column" display="column" top={["330rem", "330rem", "267rem", "300rem"]} id="contact">
            <Flex width="100%" backgroundColor={colors.backgroundVariant} justifyContent="center" paddingTop="4rem" >

                <Flex flexDir="column">
                    <Flex alignItems="center" flexDir={["column", "column", "row", "row"]} gap={["1.5rem", "1.5rem", "2rem", "2rem"]} margin="0 auto 3rem">
                        {links.map((data) =>
                            <AppLink fontSize="0.9rem" borderColor="transparent" color={colors.primary} paddingX="0px" paddingY={["0", "0", "3rem", "3rem"]} key={data.id} text={data.text} href={data.href} />
                        )}
                    </Flex>
                    <Flex justifyContent="center" gap="3rem" marginBottom="4rem">
                        {socials.map((data) =>
                            <AppIconLink _hover={{ backgroundColor: "transparent", color: colors.primaryVariant, border: `1px solid ${colors.background}` }} padding="0.8rem" backgroundColor={colors.background} borderRadius="0.7rem" border="1px solid transparent" color={colors.light} size={20} icon={data.icon} key={data.id} href={data.href} />
                        )}
                    </Flex>
                    <Text color={colors.light} marginBottom="8rem">&copy; Yael Tzruia Portfolio. All rights reserved</Text>
                </Flex>
            </Flex>
        </Flex>

    )
}