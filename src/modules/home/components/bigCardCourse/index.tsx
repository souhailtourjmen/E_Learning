import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
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
  console.log(
    "\x1b[34m%s\x1b[0m",
    "src/modules/home/components/bigCardCourse/index.tsx:25 item",
    item
  );
  const { width, height } = useWindowDimensions();
  const renderContent = useMemo(() => {
    if (item) {
      return (
        <View
          style={{
            padding: "5%",
            alignContent: "center",
            alignItems: "center",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text
            category="h5"
            style={{
              alignSelf: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
            numberOfLines={1}
          >
            {item?.matiere}
          </Text>
          <View style={{ alignItems: "center" }}>
            <Text category="p1">{item?.niveau}</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text category="h6">{item?.titre}</Text>
          </View>
        </View>
      );
    }
    return null;
  }, [item]);

  const _displayWithImage = useMemo(() => {
    if (item?.image) {
      return (
        <ImageBackground
          source={{
            uri: item?.image,
          }}
          borderRadius={BORDERRADIUS.radius_15}
          style={{ width: "100%", height: "100%" }}
        >
          {renderContent}
        </ImageBackground>
      );
    }
    return renderContent;
  }, [item?.image, renderContent]);
  return (
    <Layout
      level="2"
      style={[{ width: width * 0.55, height: height * 0.17 }, styles.container]}
    >
      {_displayWithImage}
    </Layout>
  );
};

export default BigCardCourse;
