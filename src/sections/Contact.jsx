import { color, Flex } from "@chakra-ui/react";
import AppHeader from "../components/AppHeader";
import AppLink from "../components/AppLink";
import AppInfoCard from "../components/AppInfoCard"
import { colors } from "../styles/colors";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import AppForm from "../components/AppForm";


export default function Contact() {


    const randomId = Math.floor(Math.random() * 100)

    const contactMethods = [
        { id: randomId, icon: <MdOutlineEmail />, header: "Email", text: "tzruia.yael@gmail.com", textLink: "Send a message", href: "mailto:tzruia.yael@gmail.com" },
        // { id: randomId, icon: <></>, header: "LinkedIn", text: "", textLink: "Send a message", href: "https://m.me/linkedin.com/in/yael-tzruia-84067b224/" },
        { id: randomId, icon: <BsWhatsapp />, header: "WhatsApp", text: "+972502700065", textLink: "Send a message", href: "https://web.whatsapp.com/send?phone=+972502700065" },
    ]


    return (
        <>
            <Flex alignItems="center" w={["90%", "86%", "75%", "58%"]} justifyContent="center" height={["100vh", "100vh", "68vh", "100%"]}
                position="absolute" flexDir="column" display="column" top={["368rem", "354rem", "305rem", "300rem"]} id="contact">

                <Flex marginTop="2rem" marginBottom={["2rem", "2rem", "5rem", "5rem"]} flexDir="column" textAlign="center">
                    <AppHeader marginBottom="0.5rem" color={colors.light} size="10px" text="Get In Touch" type="h5" />
                    <AppHeader color={colors.primary} text="Contact Me" type="h2" />
                </Flex>
                <Flex >
                    <Flex w="100%" justifyContent="center" gap="12rem" >
                        {/* <Flex display="grid" gridTemplateColumns="30% 58%" gap="12%"> */}
                        <Flex align="center" gap="1.2rem" flexDir="column">
                            {contactMethods.map((data) =>
                                <Flex w="17rem" alignItems="center" backgroundColor={colors.backgroundVariant} padding="1.2rem" borderRadius="1.2rem" textAlign="center" border="1px solid transparent" transition="all 400ms ease" _hover={{ backgroundColor: "transparent", border: `1px solid ${colors.primaryVariant}` }} flexDir="column" id={data.id}>
                                    <AppInfoCard widthIcon="1.5rem" alignItems="center" gap="1rem" textAlign="center" icon={data.icon} type="h5" header={data.header} text={data.text} />
                                    <AppLink fontSize="0.8rem" display="inline-block" target="_blak" color={colors.primary} paddingY="0" paddingX="0" borderColor="transparent" text={data.textLink} href={data.href} />
                                </Flex>
                            )}

                        </Flex>
                        {/* </Flex> */}
                        <Flex >
                            <AppForm />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

        </>
    )

}