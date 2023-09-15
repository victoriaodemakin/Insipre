import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { Easing, withSpring, withTiming, useSharedValue, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import styles from '../Welcome/Welcome.style';
const data = [
  {
    id: 1,
    image: require('../../../assets/images/Welcome.png'),
    text: 'Image 1',
    buttonText: 'Button 1',
  },
  {
    id: 2,
    image: require('../../../assets/images/Welcome.png'),
    text: 'Image 2',
    buttonText: 'Button 2',
  },
  {
    id: 3,
    image: require('../../../assets/images/Welcome.png'),
    text: 'Image 3',
    buttonText: 'Button 3',
  },
];

const carouselWidth = 300; // Adjust as needed

function Welcome() {
  const translateX = useSharedValue(0);

  const gestureHandler = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: false }
  );

  const onGestureEnd = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      translateX.value = withSpring(0, { damping: 2, stiffness: 80 });
    }
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={gestureHandler}
        onHandlerStateChange={onGestureEnd}
      >
        <Animated.View style={styles.carousel}>
          <ScrollView
            horizontal
            snapToInterval={carouselWidth}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
          >
            {data.map((item) => (
              <View key={item.id} style={styles.carouselItem}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.text}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>{item.buttonText}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}


export default Welcome;
