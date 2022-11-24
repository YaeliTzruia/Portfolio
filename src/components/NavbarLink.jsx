import { Flex, Text } from "@chakra-ui/react";

export default function NavbarLink({ text }) {


    return (
        <Flex>
            <Text className="navigation-hover" cursor="pointer" fontWeight="thin" fontSize="20px">{text}</Text>
        </Flex >
    )
}