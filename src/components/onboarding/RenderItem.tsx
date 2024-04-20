import {StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {styles} from './styles';
import { OnboardingData } from '../../screens/onboarding/data';
import { Text, View } from '..';
import { COLORS } from '../../constant';


type Props = {
  index: number;
  x: SharedValue<number>;
  item: OnboardingData;
};

const RenderItem = ({index, x, item}: Props) => {

  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [200, 0, -200],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{translateY: translateYAnimation}],
    };
  });

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale: scale}],
    };
  });

  return (
    <View style={[styles.itemContainer, {width: SCREEN_WIDTH}]}>
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              borderRadius: SCREEN_WIDTH / 2,
              backgroundColor: item.backgroundColor,
            },
            circleAnimation,
          ]}
        />
      </View>
      <Text style={[styles.itemText, {color: COLORS?.primary}]}>
        {item.text}
      </Text>
      <Text style={[styles.itemSubText, {color: item.descColor}]}>
        {item.desc}
      </Text>
      <Animated.View style={lottieAnimationStyle}>
        <Animated.Image
          source={item.img}
          borderRadius={100}
          style={{
            width: SCREEN_WIDTH * 0.7,
            height: SCREEN_WIDTH * 0.7,

          }}
        />
      </Animated.View>
    </View>
  );
};

export default RenderItem;
