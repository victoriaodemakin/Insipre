import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    
  },
  logoContainer: {
margin:"auto",
width:"100%",
height:"19%",
   
  },
  logoImage: {
    width:"75%",
    height:"70%",
    marginHorizontal:"auto"
  },
  
});

export default styles;