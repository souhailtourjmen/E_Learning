import {
  FlatList,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import React, { useCallback } from "react";
import Animated, {
  AnimatedRef,
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { styles } from "./styles";
import useNavigationController from "../../navigation/viewController";
import { NavigationItemType } from "../../types";
import { OnboardingData } from "../../screens/onboarding/data";
import { COLORS, ROUTES, TEXT } from "../../constant";
import i18next from "i18next";

type Props = {
  dataLength: number;
  flatListIndex: SharedValue<number>;
  flatListRef: AnimatedRef<FlatList<OnboardingData>>;
  x: SharedValue<number>;
  type: string;
};

const ActionButton = ({
  flatListRef,
  flatListIndex,
  dataLength,
  x,
  type,
}: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const { handleNavigate } = useNavigationController();

  const handleGetStarted = useCallback(
    async ({ screen }: NavigationItemType) => {
      handleNavigate({
        screen: screen,
        navigationParams: {
          checkedSegment: type === "login" ? 1 : 0,
        },
      });
    },
    [handleNavigate]
  );

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width:
        flatListIndex.value === dataLength - 1
          ? withSpring(350)
          : withSpring(0),
      height:
        flatListIndex.value === dataLength - 1 ? withSpring(60) : withSpring(0),
      marginBottom: 10,
      backgroundColor:
        flatListIndex.value === dataLength - 1
          ? type === "login"
            ? withSpring(COLORS?.primary)
            : withSpring(COLORS?.background)
          : withSpring("transparent"),
      borderColor:
        type === "login"
          ? withSpring("transparent")
          : withSpring(COLORS.primary),
      borderWidth:
        type === "login" ? 0 : flatListIndex.value === dataLength - 1 ? 1 : 0,
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      display:
        flatListIndex.value === dataLength - 1
          ? withTiming("flex")
          : withTiming("none"),
    };
  });

  return (
    <TouchableWithoutFeedback
      style={{ opacity: 0 }}
      onPress={() => {
        handleGetStarted({ screen: ROUTES.LOGIN });
      }}
    >
      <Animated.View style={[styles.container, buttonAnimationStyle, {}]}>
        <Animated.Text
          style={[
            styles.textButton,
            textAnimationStyle,
            { color: type === "login" ? COLORS?.background : COLORS.primary },
          ]}
        >
          {type === "login"
            ? i18next.t(TEXT.Login.SeConnecter)
            : i18next.t(TEXT.Login.Sinscrire)}
        </Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default ActionButton;
