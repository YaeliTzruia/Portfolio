import { Flex } from "@chakra-ui/react";
import AppHeader from "../components/AppHeader";
import { colors } from "../styles/colors";
import { BiCheck } from "react-icons/bi";
import AppInfoCard from "../components/AppInfoCard";


export default function Services() {

    const randomId = Math.floor(Math.random() * 100)
    const servicesList = [
        { icon: <BiCheck />, text: "lalala", id: randomId },
        { icon: <BiCheck />, text: "ladfsdfdfdnflnslfxsxsxas xsxs xsxssdsds dsdsd sdsdsd dsd dsfs ds ds  dsdaras dsadas lala", id: randomId },
        { icon: <BiCheck />, text: "lalala", id: randomId },


    ]


    return (

        <Flex w={["90%", "86%", "75%", "75%"]} justifyContent="center" height={["100vh", "100vh", "68vh", "100%"]}
            position="absolute" flexDir="column" display="column"
            top={["205rem", "205rem", "155rem", "155rem"]}
            id="services">
            <Flex flexDir="column" marginTop="2rem" >
                <Flex marginBottom={["2rem", "2rem", "5rem", "5rem"]} flexDir="column" textAlign="center" >
                    <AppHeader marginBottom="0.5rem" color={colors.light} size="10px" text="What I offer" type="h5" />
                    <AppHeader marginBottom="0.5rem" color={colors.primary} text="Services" type="h2" />
                </Flex>
                <Flex display="grid" gridTemplateColumns={[" 1fr", " 1fr", "repeat(3,1fr)", "repeat(3,1fr)"]} gap={["1.5rem", "1.5rem", "3rem", "3rem"]}>
                    <Flex _hover={{ backgroundColor: "transparent", border: `1px solid ${colors.primaryVariant}`, cursor: "default" }} transition="all 400ms ease" height="fit-content" backgroundColor={colors.backgroundVariant} borderBottomRadius="2rem" borderTopRadius="0.5rem" border={`1px solid${colors.primary}`} flexDir="column">
                        <Flex marginBottom={["0.8rem", "0.8rem", "0.8rem", "1.2rem"]} justifyContent="center" borderTopRadius="0.5rem" backgroundColor={colors.primary} padding="1.5rem" borderBottomRadius="1rem" boxShadow="0 2rem 1rem rgba(0,0,0,0.1)">
                            <AppHeader type="h3" color={colors.background} fontsize="1rem" marginBottom="0px" text="UI/UX Design" />
                        </Flex>
                        {servicesList.map((data) =>
                            <Flex paddingX={["0.5rem", "0.5rem", "1.5rem", "2rem"]} align="center" gap="1rem" marginBottom="0.8rem">
                                <AppInfoCard textsize="0.9rem" Iconcolor={colors.primary} key={data.id} text={data.text} icon={data.icon} />
                            </Flex>
                        )}
                    </Flex>

                    <Flex _hover={{ backgroundColor: "transparent", border: `1px solid ${colors.primaryVariant}`, cursor: "default" }} transition="all 400ms ease" height="fit-content" backgroundColor={colors.backgroundVariant} borderBottomRadius="2rem" borderTopRadius="0.5rem" border={`1px solid${colors.primary}`} flexDir="column">
                        <Flex marginBottom={["0.8rem", "0.8rem", "0.8rem", "1.2rem"]} justifyContent="center" borderTopRadius="0.5rem" backgroundColor={colors.primary} padding="1.5rem" borderBottomRadius="1rem" boxShadow="0 2rem 1rem rgba(0,0,0,0.1)">
                            <AppHeader type="h3" color={colors.background} fontsize="1rem" marginBottom="0px" text="Web Development" />
                        </Flex>
                        {servicesList.map((data) =>
                            <Flex paddingX={["0.5rem", "0.5rem", "1.5rem", "2rem"]} align="center" gap="1rem" marginBottom="0.8rem">
                                <AppInfoCard textsize="0.9rem" Iconcolor={colors.primary} key={data.id} text={data.text} icon={data.icon} />
                            </Flex>
                        )}
                    </Flex>

                    <Flex _hover={{ backgroundColor: "transparent", border: `1px solid ${colors.primaryVariant}`, cursor: "default" }} transition="all 400ms ease" height="fit-content" backgroundColor={colors.backgroundVariant} borderBottomRadius="2rem" borderTopRadius="0.5rem" border={`1px solid${colors.primary}`} flexDir="column">
                        <Flex marginBottom={["0.8rem", "0.8rem", "0.8rem", "1.2rem"]} justifyContent="center" borderTopRadius="0.5rem" backgroundColor={colors.primary} padding="1.5rem" borderBottomRadius="1rem" boxShadow="0 2rem 1rem rgba(0,0,0,0.1)">
                            <AppHeader type="h3" color={colors.background} fontsize="1rem" marginBottom="0px" text="Content Creation" />
                        </Flex>
                        {servicesList.map((data) =>
                            <Flex paddingX={["0.5rem", "0.5rem", "1.5rem", "2rem"]} align="center" gap="1rem" marginBottom="0.8rem">
                                <AppInfoCard textsize="0.9rem" Iconcolor={colors.primary} key={data.id} text={data.text} icon={data.icon} />
                            </Flex>
                        )}
                    </Flex>

                </Flex>
            </Flex>
        </Flex >


    )
}