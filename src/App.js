import React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";

import "./styles/style.css";
import Header from "./sections/Header";
import Navbar from "./misc/Navbar";
import theme from "./styles/themes";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections//contact/Contact";
import Footer from "./misc/Footer";

import AppButton from "./components/AppButton";
import AppButtonPrimary from "./components/AppButtonPrimary";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        marginTop="2rem"
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        paddingTop="6rem"
        overflow="hidden"
      >
        <Navbar />
        <Header />
        <About />
        <Experience />
        {/* <Services /> */}
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
