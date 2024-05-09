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
<<<<<<< HEAD
import { useRoute } from "@react-navigation/native";

type HeaderProps = {
  navigation: any;
};

const CustomHeader = ({ navigation }: HeaderProps) => {
  const route:any=useRoute()
  return (
    // <TouchableOpacity onPress={() => navigation.goBack()}>
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
        <RenderIcon
          name="arrow-circle-left"
          sizeIcon={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
          {route?.params?.name}
        </Text>
        <View style={{ width: 24 }}></View>
      </View>
    // </TouchableOpacity>
=======

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
>>>>>>> 4005439c (add Desing Screen course details)
  );
};

export default CustomHeader;
