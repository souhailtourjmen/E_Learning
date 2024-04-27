import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { Card, Text } from "../../../../components";
import { Avatar, Layout } from "@ui-kitten/components";
import { styles } from "./styles";
import { BORDERRADIUS } from "../../../../constant";

type BigCardCourseProps = {
  item: any;
};

const BigCardCourse = ({ item }: BigCardCourseProps): ReactElement => {
  const { width, height } = useWindowDimensions();
  return (
    <Layout
      level="2"
      style={[{ width: width * 0.55, height: height * 0.17 }, styles.container]}
    >
      <ImageBackground
        source={{
          uri: item.image,
        }}
        borderRadius={ BORDERRADIUS.radius_15}
        style={{width: "100%", height: "100%",}}
      >
        <View
          style={{
            padding: "5%",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text
          category="h6"
            style={{
              alignSelf: "center",
              marginTop: "30%",
              color: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            
              elevation: 5,
            }}
            numberOfLines={1}
          >
            {item?.name}
          </Text>
        </View>
      </ImageBackground>
    </Layout>
  );
};

export default BigCardCourse;
