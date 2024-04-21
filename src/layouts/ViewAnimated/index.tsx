import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
    FadeInUp,
    FadeOutUp,
} from "react-native-reanimated";
type propsLayoutAnimated = {
  children:any;
};
const LayoutAnimated = ({ children }: propsLayoutAnimated): ReactElement => {

  return (
    <View style={{ flex: 1 }}>
      <Animated.View  entering={FadeInUp}
      exiting={FadeOutUp}
       style={[ { flex: 1 }]}>
        {children}
      </Animated.View>
    </View>
  );
};
export default memo(LayoutAnimated);
