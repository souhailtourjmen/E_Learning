import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback} from 'react';
import Animated, {
  AnimatedRef,
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';


import {styles} from './styles';

import useNavigationController from '../../navigation/viewController';
import {NavigationItemType} from '../../types';
import { OnboardingData } from '../../screens/onboarding/data';
import { COLORS, IMGS, ROUTES } from '../../constant';


type Props = {
  dataLength: number;
  flatListIndex: SharedValue<number>;
  flatListRef: AnimatedRef<FlatList<OnboardingData>>;
  x: SharedValue<number>;
};

const CustomButton = ({flatListRef, flatListIndex, dataLength, x}: Props) => {

  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const {handleNavigate} = useNavigationController();

  const handleGetStarted = useCallback(
    async ({screen}: NavigationItemType) => {
      handleNavigate({
        screen: screen,
      });
    },
    [handleNavigate],
  );

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width:
        flatListIndex.value === dataLength - 1
          ? withSpring(350)
          : withSpring(60),
          borderColor:'transparent',
      height: 60,
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      width: 30,
      height: 30,
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      textDecorationLine:'underline',
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });
  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      [COLORS.primary, COLORS.darkGray, COLORS.background],
    );

    return {
      backgroundColor: backgroundColor,
    };
  });

  return (
    <TouchableWithoutFeedback
      style={{opacity: 0}}
      onPress={() => {
        if (flatListIndex.value < dataLength - 1) {
          flatListRef.current?.scrollToIndex({index: flatListIndex.value + 1});
        } else {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        handleGetStarted({screen: ROUTES.HomeScreen});
=======
          // handleGetStarted({screen: ROUTES.HomeBottom});
>>>>>>> 5c6f7ff1 (- add new screen onbording)
=======
        handleGetStarted({screen: ROUTES.HomeScreen});
>>>>>>> 4005439c (add Desing Screen course details)
=======
        handleGetStarted({screen: ROUTES.HomeScreen});
=======
          // handleGetStarted({screen: ROUTES.HomeBottom});
>>>>>>> 9c8d4eae (- add new screen onbording)
>>>>>>> af751c6f (- add new screen onbording)
        }
      }}>
      <Animated.View
        style={[styles.container, buttonAnimationStyle, animatedColor]}>
        <Animated.Text style={[styles.textButton, textAnimationStyle, {color: COLORS.primary}]}>
          Continuer comme invité
        </Animated.Text>
        <Animated.Image
          source={IMGS.ArrowIcon}
          style={[styles.arrow, arrowAnimationStyle]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;
