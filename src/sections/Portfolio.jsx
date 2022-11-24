import { Flex } from "@chakra-ui/react";
import AppHeader from "../components/AppHeader";
import AppProjectCont from "../components/AppProjectCont";
import { colors } from "../styles/colors";
import sueApp from "../assets/sueApp.jpeg"

export default function Portfolio() {

    const randomId = Math.floor(Math.random() * 100)
    const projectList = [
        { id: randomId, header: 'Sue App', src: sueApp, alt: "Sue-App", textOne: "Github", textTwo: "Live Demo", hrefOne: "https://github.com/YaeliTzruia/SueApp", hrefTwo: "", disabeld: 'true' },

    ]

    return (
        <Flex
            w={["90%", "86%", "75%", "75%"]} justifyContent="center" height={["100vh", "100vh", "68vh", "100%"]}
            position="absolute" flexDir="column" display="column"
            top={["260rem", "260rem", "188rem", "192rem"]}
            id="services">
            <Flex flexDir="column" marginTop="2rem" >
                <Flex marginBottom={["2rem", "2rem", "5rem", "5rem"]} flexDir="column" textAlign="center" >
                    <AppHeader marginBottom="0.5rem" color={colors.light} size="10px" text="Portfolio" type="h5" />
                    <AppHeader marginBottom="0.5rem" color={colors.primary} text="My Recent Work" type="h2" />
                </Flex>
                <Flex gridTemplateColumns={["1fr", "1fr", "repeat(3,1fr)", "repeat(3,1fr)"]} gap={["1rem", "1rem", "2.5rem", "2.5rem"]} display="grid">
                    {projectList.map((data) =>
                        <Flex backgroundColor={colors.backgroundVariant} padding={["1rem", "1rem", "1.2rem", "1.2rem"]} borderRadius="2rem" border="1px solid transparent" transition="all 400ms ease" _hover={{ border: `1px solid ${colors.primaryVariant}`, backgroundColor: "transparent" }}>
                            <AppProjectCont header={data.header} src={data.src} alt={data.alt} disabeld={data.disabeld} textOne={data.textOne} hrefOne={data.hrefOne} hrefTwo={data.hrefTwo} textTwo={data.textTwo} key={data.id} />
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>


    )
}