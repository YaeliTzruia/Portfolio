import { Flex } from "@chakra-ui/react";
import AppHeader from "../components/AppHeader"
import AppInfoCard from "../components/AppInfoCard"
import { BsPatchCheckFill } from "react-icons/bs";
import { colors } from "../styles/colors";


export default function Experience() {

    const randomId = Math.floor(Math.random() * 100)
    const expIcon = <BsPatchCheckFill />

    const FrontExpData = [
        { language: "HTML", level: "Proficient", icon: expIcon, id: randomId },
        { language: "CSS", level: "Proficient", icon: expIcon, id: randomId },
        { language: "JavaScript", level: "Competent", icon: expIcon, id: randomId },
        { language: "ES6", level: "Competent", icon: expIcon, id: randomId },
        { language: "React.js", level: "Proficient", icon: expIcon, id: randomId },
        { language: "React Native", level: "Competent", icon: expIcon, id: randomId },
        { language: "Bootstrap & responsive design", level: "Proficient", icon: expIcon, id: randomId },
        { language: "Chakra UI", level: "Proficient", icon: expIcon, id: randomId },
        { language: "GIT", level: "Proficient", icon: expIcon, id: randomId },
        { language: "Firebase", level: "Competent", icon: expIcon, id: randomId },

    ]


    const BackExpData = [
        { language: "Node.js", level: "Proficient", icon: expIcon, id: randomId },
        { language: "Express", level: "Proficient", icon: expIcon, id: randomId },
        { language: "SQL(MySQL)", level: "Competent", icon: expIcon, id: randomId },
        { language: "NoSQL (MongoDB)", level: "Proficient", icon: expIcon, id: randomId },
        { language: "APIs & REST APIs", level: "Proficient", icon: expIcon, id: randomId },
    ]


    return (

        <Flex w={["90%", "86%", "75%", "75%"]} justifyContent="center" height={["100vh", "100vh", "68vh", "100%"]} marginTop="2rem"
            position="absolute" flexDir="column" display="column" top={["130rem", "130rem", "100rem", "100rem"]} id="experience">
            <Flex marginTop="2rem" marginBottom={["0", "0", "5rem", "5rem"]} flexDir="column" textAlign="center">
                <AppHeader marginBottom="0.5rem" color={colors.light} size="10px" text="What Technical Skills I have" type="h5" />
                <AppHeader color={colors.primary} text="My Experience" type="h2" />
            </Flex>
            <Flex display="grid" gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr"]} gap="2rem">

                <Flex transition="all 400ms ease" _hover={{ backgroundColor: "transparent", border: `1px solid ${colors.primaryVariant}`, cursor: "default" }} backgroundColor={colors.backgroundVariant} paddingY={["2rem", "2rem", "2.4rem", "2.4rem"]} paddingX={["1rem", "1rem", "5rem", "5rem"]} borderRadius="2rem" border="1px solid transparent" flexDir="column">

                    <AppHeader color={colors.primary} textAlign="center" margB="2rem" text="Frontend Development" type="h3" />

                    <Flex display="grid" gridTemplateColumns="1fr 1fr" rowGap="2rem" flexDir="column">
                        {FrontExpData.map((data) =>
                            <Flex gap="1rem">
                                <AppInfoCard textsize="12px" Iconcolor={colors.primary} type="h3" fontSize="15px" icon={data.icon} header={data.language} text={data.level} key={data.id} />
                            </Flex>
                        )}

                    </Flex>
                </Flex>
                <Flex
                    transition="all 400ms ease" _hover={{ backgroundColor: "transparent", border: `1px solid ${colors.primaryVariant}`, cursor: "default" }} backgroundColor={colors.backgroundVariant} paddingY={["2rem", "2rem", "2.4rem", "2.4rem"]} paddingX={["1rem", "1rem", "5rem", "5rem"]} borderRadius="2rem" border="1px solid transparent" flexDir="column" >

                    <AppHeader color={colors.primary} textAlign="center" margBottom="2rem" textsize="10px" text="Backend Development" type="h4" />

                    <Flex display="grid" gridTemplateColumns="1fr 1fr" rowGap="2rem" flexDir="column" className="experience box">
                        {BackExpData.map((data) =>
                            <Flex gap="1rem">
                                <AppInfoCard textsize="12px" Iconcolor={colors.primary} type="h3" fontSize="15px" icon={data.icon} header={data.language} text={data.level} key={data.id} />
                            </Flex>
                        )}

                    </Flex>
                </Flex>
            </Flex>
        </Flex>


    )
}