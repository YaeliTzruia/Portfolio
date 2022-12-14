import { Flex, Link } from "@chakra-ui/react";
import CV from "../assets/Yael Tzruia resume.pdf"
import AppLink from "../components/AppLink";
import { colors } from "../styles/colors";
export default function CTA() {


    return (
        <Flex gap="1.2rem" marginTop="1.5rem" justifyContent="center" position="relative" textAlign="center" >
            <AppLink paddingY="0.5rem" paddingX="1rem" fontSize="13px" color={colors.primary} backgroundColor={colors.background} hoverColor={colors.background} backHoverColor={colors.white} text="Download CV" href={CV} download="Yael Tzruia resume.pdf" />

            <AppLink paddingY="0.5rem" paddingX="1rem" fontSize="13px" color={colors.background} backgroundColor={colors.primary} backHoverColor={colors.white} text="Contact" href="#contact" />

        </Flex>
    )
}