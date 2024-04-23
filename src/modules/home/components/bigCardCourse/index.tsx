import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Card, Text } from "../../../../components";
import { Avatar, Layout } from "@ui-kitten/components";
import { styles } from "./styles";

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
      <View
        style={{ padding: "5%", alignContent: "center", alignItems: "center" }}
      >
        {item.image ? (
          <Avatar
            size="large"
            source={{
              uri: item.image,
            }}
          />
        ) : null}
        <Text
          style={{
            alignSelf: "center",
            marginTop: "30%",
          }}
          numberOfLines={1}
        >
          {item?.name}
        </Text>
      </View>
    </Layout>
  );
};

export default BigCardCourse;
