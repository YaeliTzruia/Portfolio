import { extendTheme } from "@chakra-ui/react";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>;

const activeLabelStyles = {
  transform: "scale(0.9) translateY(-24px)",
  // w: "850px",
};

const theme = extendTheme({
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`,
  },
  direction: "rtl",
  colors: {
    black: { 50: "#000000ad" },
    green: { 50: "#A2B7AF", 100: "#759084" },
    beige: { 50: "#F7F6F5", 100: "#F2EEE9" },
    // gray: { 50: "#80808042", 100: "#CECECE", 200: "#b9b9b9" },
    // purple: { 50: "#4E67EB", 100: "#5764d8" },
    // white: { 50: "#FFFFFF" },
    // red: { 50: "#be0000bf", 100: "#be0000", 300: "#686868" },
  },
  // fonts: {
  //   heading: 'Lato',
  //   body: 'Lato',
  // },

  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label,select:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              // w: "100%",
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

export default theme;
// sm: "360px",
// md: "414px",
// lg: "1366px",
// xl: "1920px",
