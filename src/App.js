import React, { useContext } from "react";
import { ChakraProvider, Box, theme, Flex } from "@chakra-ui/react";
import LandingPage from "./pages/LandingPage";
import useLanguage from "./hooks/useLanguage";
import Navbar from "./misc/Navbar";
import { colors } from "./styles/colors";

function App() {
  const { language } = useLanguage;

  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor={colors.pearlWhite}>
        {/* <div dir={language.side}> */}
        <Navbar />
        <LandingPage />
        {/* </div> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
