const COLORS = {
  primary: "#007BFF",
  secondary: "#444262",
  tertiary: "#FF7754",
  black: '#0B0B0B',

  gray: "#3B3B3B",
  gray2: "#525252",

  white: "#FAFCFF",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: require("../assets/fonts/Poppins-Regular.ttf"),
  bold: require("../assets/fonts/Poppins-Bold.ttf"),
  medium: require("../assets/fonts/Poppins-Medium.ttf"),
  semiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  light: require("../assets/fonts/Poppins-Light.ttf")
}

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
