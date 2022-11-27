import { Button } from "@chakra-ui/react";

import { colors } from "../styles/colors"

export default function AppButton({ type = "button" }) {

    return (

        <Button type={type} width="max-content" display="inline-block" color={colors.primary} paddingY="0.75rem" paddingX=" 1.2rem" borderRadius="0.4rem" border="1px solid" borderColor={colors.primary} transition="all 400ms ease" _hover={{ backgroundColor: "#fff", color: "#1f1f38", borderColor: "transparent" }}>Lalal</Button>

    )
}