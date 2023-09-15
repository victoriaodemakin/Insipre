import { View, Text, Image, Animated, Easing } from "react-native";
import React, { useEffect } from "react";
import styles from "./SplashScreen.style";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/images/Logo.png";
import Welcome from "../Auth/Welcome/Welcome";

export default function SplashScreen() {
  const navigation = useNavigation();

  // Create an Animated.Value to control the position of the image
  const slideAnimation = new Animated.Value(0);

  useEffect(() => {
    // Start the animation when the component mounts
    Animated.timing(slideAnimation, {
      toValue: 1, // 1 represents the final position (center)
      duration: 1000, // Duration of the animation in milliseconds
      easing: Easing.ease, // Easing function (linear)
      useNativeDriver: false, // Don't use the native driver for this animation
    }).start(() => {
      // Animation completed, wait for 5000ms (5 seconds) before navigating
      setTimeout(() => {
        navigation.navigate("Welcome");
      }, 2000);
    });
  }, [navigation, slideAnimation]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [
              {
                translateX: slideAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-300, 0], // Slide from -300 to 0 (top to center)
                }),
              },
            ],
          },
        ]}
      >
        <Image source={Logo} style={styles.logoImage} />
      </Animated.View>
    </SafeAreaView>
  );
}

