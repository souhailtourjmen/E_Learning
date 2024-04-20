import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

import Video from "react-native-video";
import { BORDERRADIUS, COLORS, VIDEO } from "../../constant";
import LinearGradient from "react-native-linear-gradient";
import { Text } from "../../components";
import { styles } from "./styles";
const Intro = (): JSX.Element => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <Video
        source={VIDEO.VIDEOINTRO}
        style={styles.container}
        muted={true}
        repeat={true}
        resizeMode={"cover"}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
      />
      <LinearGradient
        colors={[COLORS.primaryDarkGrey, COLORS.transparent]}
        style={[{top:height*.55},styles.gradient]}
        locations={[0, 0.8, 0.9]}
      >
        <Text style={styles.textStyle}>Create a profile</Text>
      </LinearGradient>
    </>
  );
};
export default Intro;
