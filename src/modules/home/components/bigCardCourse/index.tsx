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
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { Card, Text } from "../../../../components";
import { Avatar, Layout } from "@ui-kitten/components";
import { styles } from "./styles";
import { BORDERRADIUS } from "../../../../constant";
import useBigCardCourseViewController from "./viewController";

type BigCardCourseProps = {
  item: any;
};

const BigCardCourse = ({ item }: BigCardCourseProps): ReactElement => {
  const { width, height } = useWindowDimensions();
  const { handleNavigateToDetatils } = useBigCardCourseViewController();
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
    if (item?.photo) {
      return (
        <ImageBackground
          source={{
            uri: item?.photo,
          }}
          borderRadius={BORDERRADIUS.radius_15}
          style={{ width: "100%", height: "100%" }}
        >
          {renderContent}
        </ImageBackground>
      );
    }
    return renderContent;
  }, [item?.photo, renderContent]);
  return (
    <Layout
      level="2"
      style={[{ width: width * 0.55, height: height * 0.17 }, styles.container]}
    >
      <TouchableOpacity onPress={() => handleNavigateToDetatils(item?.id,item?.titre)}>
        {_displayWithImage}
      </TouchableOpacity>
    </Layout>
  );
};

export default BigCardCourse;
