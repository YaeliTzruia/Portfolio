import { Flex } from "@chakra-ui/react";
import AppHeader from "../components/AppHeader"
import AppInfoCard from "../components/AppInfoCard"
import { BsPatchCheckFill } from "react-icons/bs";
import { colors } from "../styles/colors";


export default function Experience() {

    // const randomId = Math.floor(Math.random() * 100)
    const expIcon = <BsPatchCheckFill />

    const FrontExpData = [
        { language: "HTML", level: "Proficient", icon: expIcon, id: 2 },
        { language: "CSS", level: "Proficient", icon: expIcon, id: 8 },
        { language: "JavaScript", level: "Competent", icon: expIcon, id: 76 },
        { language: "ES6", level: "Competent", icon: expIcon, id: 555 },
        { language: "React.js", level: "Proficient", icon: expIcon, id: 78 },
        { language: "React Native", level: "Competent", icon: expIcon, id: 34 },
        { language: "Chakra UI", level: "Proficient", icon: expIcon, id: 11 },
        { language: "GIT", level: "Proficient", icon: expIcon, id: 231 },
        { language: "Bootstrap", level: "Proficient", icon: expIcon, id: 654 },
        { language: "responsive design", level: "Proficient", icon: expIcon, id: 65 },
        // { language: "Firebase", level: "Competent", icon: expIcon, id: randomId },

    ]


    const BackExpData = [
        { language: "Node.js", level: "Proficient", icon: expIcon, id: 5 },
        { language: "Express", level: "Proficient", icon: expIcon, id: 54 },
        { language: "SQL(MySQL)", level: "Competent", icon: expIcon, id: 322 },
        { language: "NoSQL (MongoDB)", level: "Proficient", icon: expIcon, id: 5332 },
        { language: "APIs & REST APIs", level: "Proficient", icon: expIcon, id: 78 },
    ]


    return (

        <Flex w={["90%", "86%", "75%", "75%"]} justifyContent="center" height={["100vh", "100vh", "68vh", "100%"]} marginTop="2rem"
            position="absolute" flexDir="column" display="column" top={["107rem", "108rem", "85rem", "95rem"]} id="experience">
            <Flex marginTop="2rem" marginBottom={["2rem", "2rem", "2rem", "5rem"]} flexDir="column" textAlign="center">
                <AppHeader marginBottom="0.5rem" color={colors.light} size="10px" text="What Technical Skills I have" type="h5" />
                <AppHeader color={colors.primary} text="My Experience" type="h2" />
            </Flex>
            <Flex width="100%" justifyContent={["center", "center", "center", "center"]}>
                <Flex width={["100%", "100%", "100%", "90%"]} display="grid" gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr"]} gap="2rem">

                    <Flex transition="all 400ms ease" _hover={{ backgroundColor: "transparent", border: `1px solid ${colors.primaryVariant}`, cursor: "default" }} backgroundColor={colors.backgroundVariant} paddingY={["2rem", "2rem", "1.5rem", "2.4rem"]} paddingX={["1rem", "1rem", "5rem", "5rem"]} borderRadius="2rem" border="1px solid transparent" flexDir="column">

                        <AppHeader color={colors.primary} textAlign="center" marginBottom="2rem" text="Frontend Development" fontSize={["10px", "10px", "15px", "15px"]} type="h3" />

                        <Flex display="grid" gridTemplateColumns="1fr 1fr" rowGap={["1rem", "1rem", "1rem", "2rem"]} flexDir="column">
                            {FrontExpData.map((data) =>
                                <Flex key={data.id} gap="1rem">
                                    <AppInfoCard justifyContent="center" gap="0.4rem" widthIcon={["1rem", "1rem", "2rem", "2rem"]} textsize={["10px", "10px", "12px", "12px"]} Iconcolor={colors.primary} type="h3" fontSize={["11px", "11px", "15px", "15px"]} icon={data.icon} header={data.language} text={data.level} key={data.id} />
                                </Flex>
                            )}

                        </Flex>
                    </Flex>
                    <Flex
                        transition="all 400ms ease" _hover={{ backgroundColor: "transparent", border: `1px solid ${colors.primaryVariant}`, cursor: "default" }} backgroundColor={colors.backgroundVariant} paddingY={["2rem", "2rem", "1.5rem", "2.4rem"]} paddingX={["1rem", "1rem", "5rem", "5rem"]} borderRadius="2rem" border="1px solid transparent" flexDir="column" >

                        <AppHeader color={colors.primary} textAlign="center" marginBottom="2rem" textsize="10px" text="Backend Development" type="h4" />

                        <Flex display="grid" gridTemplateColumns="1fr 1fr" rowGap={["1rem", "1rem", "1rem", "2rem"]} flexDir="column">
                            {BackExpData.map((data) =>
                                <Flex key={data.id} gap="1rem">
                                    <AppInfoCard justifyContent="center" gap="0.4rem" widthIcon={["1rem", "1rem", "2rem", "2rem"]} textsize={["10px", "10px", "12px", "12px"]} Iconcolor={colors.primary} type="h3" fontSize={["11px", "11px", "15px", "15px"]} icon={data.icon} header={data.language} text={data.level} key={data.id} />
                                </Flex>
                            )}

                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>


    )
}