import { Flex, Grid, Link, Stack, Text } from "@chakra-ui/react";
import AOS from "aos";

import AppHeader from "../components/AppHeader"
import AppImage from "../components/AppImage";
import me from "../assets/coffee.jpg"
import AppInfoCard from "../components/AppInfoCard";

import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { TbClipboardCheck } from "react-icons/tb";

import AppLink from "../components/AppLink";
import { colors } from "../styles/colors";
import { useEffect } from "react";


export default function About() {

    // const randomId = Math.floor(Math.random() * 100)

    useEffect(() => {
        AOS.init();
    }, []);

    const ExpCard = [
        { icon: <FaAward />, header: "Experience", text: "1 Year programing", id: 43, href: "#experience" },
        { icon: <VscFolderLibrary />, header: "Projects", text: "1 Year programing", id: 1, href: "#portfolio" },
        { icon: <TbClipboardCheck />, header: "LinkedIn Badges", text: "1 Badge", id: 65, href: "https://www.linkedin.com/in/yael-tzruia-84067b224/" }
    ]

    return (
        <Flex w={["90%", "86%", "75%", "75%"]} justifyContent="center" height={["20vh", "20vh", "20vh", "20vh"]}
            position="absolute" flexDir="column" display="column" top={["36rem", "37rem", "40rem", "45rem"]} id="about">
            <Flex textAlign="center" flexDir="column" marginTop="2rem" marginBottom={["2rem", "2rem", "3rem", "5rem"]}>
                <AppHeader marginBottom="0.5rem" color={colors.light} text="Get To Know" type="h5" size="10px" />
                <AppHeader color={colors.primary} text="About Me" type="h2" />
            </Flex>
            <Flex alignItems="center" display="grid" gridTemplateColumns={["1fr", "1fr", "40% 50%", "30% 50%"]} gap={["0", "0", "15%", "15%"]} >
                <Flex margin={["0rem 1rem 4rem", "0rem 1.5rem 4rem", "2rem auto 4rem", "0"]} borderRadius="2rem" className="about_me" >
                    {/* w={["70%", "70%", "100%", "90%"]}  */}
                    <AppImage height={["17rem", "17rem", "24rem", "27rem"]} transition="all 400ms ease" _hover={{ transform: "rotate(0)" }} borderRadius="2rem" overflow="hidden" transform="rotate(10deg)" image={me} alt="coffee and computer" />
                </Flex>
                <Flex display="column" >
                    <Flex display="column">
                        <Grid transition="all 400ms ease" gap={["1rem", "1rem", "1.5rem", "1.5rem"]} gridTemplateColumns={["1fr 1fr", "1fr 1fr", "repeat(3,1fr)", "repeat(3,1fr)"]}>

                            {ExpCard.map((data) => (

                                <Flex transition="all 400ms ease" key={data.id} cursor="default" backgroundColor={colors.backgroundVariant} border="1px solid" borderColor="transparent" borderRadius="1rem" padding={["0.6rem", "0.6rem", "1rem", "2rem"]} flexDir="column" align="center" textAlign="center" _hover={{ backgroundColor: "transparent", border: `1px solid${colors.primary}` }}>
                                    <Link _hover={{ textDecor: "none" }} href={data.href}>
                                        <AppInfoCard
                                            gap="0.4rem"
                                            cursor="pointer"
                                            alignItems="center"
                                            classname="about-icon"
                                            widthIcon="1rem"
                                            marginBottom="1rem" Iconcolor={colors.primary} textsize="0.7rem"
                                            fontSize="0.8rem" icon={data.icon} header={data.header} type="h5" text={data.text} />
                                    </Link>
                                </Flex>

                            ))}

                        </Grid>
                        <Flex textAlign={["center", "center", "initial", "initial"]} alignItems={["center", "center", "initial", "initial"]} flexDirection="column">
                            <Text fontSize={["0.8rem", "0.8rem", "0.8rem", "1rem"]} marginTop="2rem" marginX="0" marginBottom={["1.5rem", "1.5rem", "1rem", "1rem"]}>
                                My name is Yael Tzruia and I'm a full-stack developer based in Netivot, Israel. I studied full-stack at ITC for 7 months, ending my course with a two-month internship at Sue-App where I got the opportunity to create their website from scratch. Throughout this year I have made several different projects including platforms with user interfaces, tokens, and MongoDB as a database.
                            </Text>
                            <Text marginBottom={["1.5rem", "1.5rem", "1.5rem", "1.5rem"]} fontSize={["0.8rem", "0.8rem", "0.8rem", "1rem"]}>

                                I’m passionate about what I do and want to spend every day enhancing this creative side of mine - to push myself to be the best I can be.
                            </Text>
                            <AppLink fontSize="12px" paddingY="0.5rem" paddingX="0.7rem" color={colors.background} backgroundColor={colors.primary} backHoverColor={colors.white} text="Let's Talk" href="#contact" />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >

    )
}