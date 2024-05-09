import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import RenderIcon from "../renderIcon";
import { TouchableOpacity } from "react-native";
import { Text, View } from "..";

type HeaderProps = {
  navigation: any;
  title: string;
};

const CustomHeader = ({ navigation, title }: HeaderProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        height: 60,
        backgroundColor: "#ffffff",
        elevation: 4,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <RenderIcon name="arrow-circle-left" sizeIcon={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
        {title}
      </Text>
      <View style={{ width: 24 }}></View>
    </View>
  );
};

export default CustomHeader;
