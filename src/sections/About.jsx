import { Flex, Grid, Text } from "@chakra-ui/react";
import AppHeader from "../components/AppHeader"
import AppImage from "../components/AppImage";
import me from "../assets/surf.jpeg"
import AppInfoCard from "../components/AppInfoCard";

import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { TbClipboardCheck } from "react-icons/tb";

import AppLink from "../components/AppLink";
import { colors } from "../styles/colors";


export default function About() {

    const randomId = Math.floor(Math.random() * 100)

    const ExpCard = [
        { icon: <FaAward />, header: "Experience", text: "1 Year programing", id: randomId },
        { icon: <VscFolderLibrary />, header: "Projects", text: "1 Year programing", id: randomId },
        { icon: <TbClipboardCheck />, header: "LinkedIn Badges", text: "1 Badge", id: randomId }
    ]

    return (
        <Flex w={["90%", "86%", "75%", "75%"]} justifyContent="center" height={["20vh", "20vh", "20vh", "20vh"]}
            position="absolute" flexDir="column" display="column" top="50rem" id="about">
            <Flex textAlign="center" flexDir="column" marginTop="2rem" marginBottom={["0", "0", "5rem", "5rem"]}>
                <AppHeader marginBottom="0.5rem" color={colors.light} text="Get To Know" type="h5" size="10px" />
                <AppHeader color={colors.primary} text="About Me" type="h2" />
            </Flex>
            <Flex alignItems="center" display="grid" gridTemplateColumns={["1fr", "1fr", "40% 50%", "30% 50%"]} gap={["0", "0", "15%", "15%"]} >
                <Flex margin={["0rem auto 3rem", "0rem auto 3rem", "2rem auto 4rem", "0"]} borderRadius="2rem" w={["70%", "70%", "100%", "100%"]} className="about_me" >
                    <AppImage transition="all 400ms ease" _hover={{ transform: "rotate(0)" }} borderRadius="2rem" overflow="hidden" transform="rotate(10deg)" image={me} alt="profile image about me" />
                </Flex>
                <Flex display="column" >
                    <Flex display="column">
                        <Grid transition="all 400ms ease" gap={["1rem", "1rem", "1.5rem", "1.5rem"]} gridTemplateColumns={["1fr 1fr", "1fr 1fr", "repeat(3,1fr)", "repeat(3,1fr)"]}>

                            {ExpCard.map((data) => (

                                <Flex transition="all 400ms ease" key={data.id} cursor="default" backgroundColor={colors.backgroundVariant} border="1px solid" borderColor="transparent" borderRadius="1rem" padding="2rem" flexDir="column" align="center" textAlign="center" _hover={{ backgroundColor: "transparent", border: `1px solid${colors.primary}` }}>
                                    <AppInfoCard
                                        classname="about-icon"
                                        iconSize="1.4rem"
                                        marginBottom="1rem" Iconcolor={colors.primary}
                                        fontSize="0.95rem" icon={data.icon} header={data.header} type="h5" text={data.text} />
                                </Flex>

                            ))}

                        </Grid>
                        <Flex textAlign={["center", "center", "initial", "initial"]} alignItems={["center", "center", "initial", "initial"]} flexDirection="column">
                            <Text marginTop={["1.5rem", "1.5rem", "2rem", "2rem"]} marginX="0" marginBottom={["2.6rem", "2.6rem", "1.5rem", "1.5rem"]}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                            <AppLink height="3rem" color={colors.background} backgroundColor={colors.primary} backHoverColor={colors.white} text="Let's Talk" href="#contact" />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >

    )
}