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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9cfb1182 (add Desing Screen course details)
=======
>>>>>>> 11b8c648 (- add dynamic screen details)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useRoute } from "@react-navigation/native";
>>>>>>> 97ed279c (- add dynamic screen details)

type HeaderProps = {
  navigation: any;
};

const CustomHeader = ({ navigation }: HeaderProps) => {
  const route:any=useRoute()
  return (
<<<<<<< HEAD
=======
=======
=======
import { useRoute } from "@react-navigation/native";
>>>>>>> 343adf8e (- add dynamic screen details)
>>>>>>> 11b8c648 (- add dynamic screen details)

type HeaderProps = {
  navigation: any;
};

const CustomHeader = ({ navigation }: HeaderProps) => {
  const route:any=useRoute()
  return (
<<<<<<< HEAD
>>>>>>> 9cfb1182 (add Desing Screen course details)
=======
<<<<<<< HEAD
>>>>>>> 11b8c648 (- add dynamic screen details)
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
<<<<<<< HEAD
>>>>>>> 4005439c (add Desing Screen course details)
=======
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
>>>>>>> 97ed279c (- add dynamic screen details)
=======
>>>>>>> feaa7651 (add Desing Screen course details)
<<<<<<< HEAD
>>>>>>> 9cfb1182 (add Desing Screen course details)
=======
=======
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
>>>>>>> 343adf8e (- add dynamic screen details)
>>>>>>> 11b8c648 (- add dynamic screen details)
  );
};

export default CustomHeader;
