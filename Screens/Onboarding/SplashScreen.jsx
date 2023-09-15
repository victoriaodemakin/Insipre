import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import styles from "./SplashScreen.style";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    // Set the delay interval (between 5 and 10 seconds)
    // const delayInterval = Math.floor(Math.random() * 6000) + 5000;

    // Wait for the specified delay before navigating
    const delayTimer = setTimeout(() => {
      // Navigate to the next screen
      navigation.navigate("Onboarding"); // Replace 'NextScreen' with the actual screen name
    }, 2500);

    // Clear the timer when the component unmounts
    return () => clearTimeout(delayTimer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
     <View >
      <Image>
        
      </Image>
     </View>
    </SafeAreaView>
  );
}


