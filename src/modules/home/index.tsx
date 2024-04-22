import React, { ReactElement, memo, useMemo } from "react";
import { Platform, useWindowDimensions } from "react-native";

import useHomeViewModels from "./viewModel";
import { styles } from "./styles";
import useHomeViewController from "./viewController";
import { ScrollView, Text, View } from "../../components";
import { i18next } from "../../config";
import { COLORS, FONTSIZE, TEXT } from "../../constant";
import { TopNavigationImageTitleShowcase } from "./components/topNavigationImageTitleShowcase";
import { Input } from "@ui-kitten/components";
import RenderIcon from "../../components/renderIcon";

type HomeProps = {};

const Home = (): ReactElement => {
  const { height, width } = useWindowDimensions();
  const renderIcon = (name:string)=>{
    return (<RenderIcon name={name}/>)
  }
  return (
    <View style={{ height, width, flex: 1 }}>
      <View
        style={{
          width: width + 100,
          alignSelf: "center",
          backgroundColor: "#070576",
          height: height * 0.4,
          borderBottomLeftRadius: width / 2,
          borderBottomRightRadius: width / 2,
        }}
      >
        <View
          style={{
            width,
            alignSelf: "center",
            backgroundColor: COLORS.transparent,
          }}
        >
          <View
            style={{
              width,
              alignSelf: "center",
              backgroundColor: COLORS.transparent,
            }}
          >
            <TopNavigationImageTitleShowcase />
          </View>
          <View
            style={{ backgroundColor: COLORS.transparent, alignSelf: "center" }}
          >
            <Text
              category="h1"
              style={{
                padding: "2%",
                textAlign: "justify",
                backgroundColor: COLORS.transparent,
                color: COLORS.background,
              }}
            >
              Find your favorite Course here!
            </Text>
          </View>
          <View style={{ backgroundColor: COLORS.transparent, margin: "10%" }}>
            <Input
              placeholder="Place your Text"
              style={{ backgroundColor: COLORS.background, opacity: 0.5,borderRadius: 20, }}
              textStyle={{
                // backgroundColor: COLORS.background,
                color: COLORS.background,
                height: 40,
                borderRadius: 20,
              }}
              accessoryLeft={renderIcon('search')}
              accessoryRight={renderIcon('microphone')}
              // value={value}
              // onChangeText={(nextValue) => setValue(nextValue)}
            />
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default memo(Home);
