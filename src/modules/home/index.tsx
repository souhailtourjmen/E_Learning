import React, { ReactElement, memo, useMemo } from "react";
import { Platform, useWindowDimensions } from "react-native";

import useHomeViewModels from "./viewModel";
import { styles } from "./styles";
import useHomeViewController from "./viewController";
<<<<<<< HEAD
import { FlatList, Link, Loader, ScrollView, Text, View } from "../../components";
import { i18next } from "../../config";
import { COLORS, FONTSIZE, TEXT } from "../../constant";
import { TopNavigationImageTitleShowcase } from "./components/topNavigationImageTitleShowcase";
<<<<<<< HEAD
<<<<<<< HEAD
import { Input, Layout, Spinner } from "@ui-kitten/components";
import RenderIcon from "../../components/renderIcon";
import RenderItemCategory from "./components/renderItemCategory";
import NIVEAUX from "../../mockData/NIVEAUX";
<<<<<<< HEAD
<<<<<<< HEAD
import BigCardCourse from "../../components/bigCardCourse";
=======
import { FlatList, Link, ScrollView, Text, View } from "../../components";
import { i18next } from "../../config";
import { COLORS, FONTSIZE, TEXT } from "../../constant";
import { TopNavigationImageTitleShowcase } from "./components/topNavigationImageTitleShowcase";
import { Input, Layout, Spinner } from "@ui-kitten/components";
import RenderIcon from "../../components/renderIcon";
import RenderItemCategory from "./components/renderItemCategory";
import MOCK_DATA from "../../mockData/MOCK_DATA";
=======
=======
>>>>>>> 2960beef (Add screen filter for course by niveau)
=======
import { Input, Spinner } from "@ui-kitten/components";
=======
import { Input, Layout, Spinner } from "@ui-kitten/components";
>>>>>>> 5bdf0af8 (- ADD element in screen home)
import RenderIcon from "../../components/renderIcon";
import RenderItemCategory from "./components/renderItemCategory";
import MOCK_DATA from "../../mockData/MOCK_DATA";
>>>>>>> d32799fd (screen in progress)
>>>>>>> 7e2863bb (screen in progress)
import BigCardCourse from "./components/bigCardCourse";
<<<<<<< HEAD
>>>>>>> c3fc9c43 (screen in progress)
=======
=======
import BigCardCourse from "../../components/bigCardCourse";
>>>>>>> 525059d7 (Add screen filter for course by niveau)
>>>>>>> 2960beef (Add screen filter for course by niveau)
type HomeProps = {};

const Home = (): ReactElement => {
  const { height, width } = useWindowDimensions();
<<<<<<< HEAD
  const {courses}=useHomeViewModels();
=======
<<<<<<< HEAD
>>>>>>> c3fc9c43 (screen in progress)
=======
>>>>>>> d32799fd (screen in progress)
>>>>>>> 7e2863bb (screen in progress)
  const renderIcon = (name: string) => {
    return <RenderIcon name={name} />;
  };

  const _renderMockData = useMemo(() => {
<<<<<<< HEAD
    if (NIVEAUX) {
      return (
        <FlatList
          horizontal
          data={NIVEAUX}
=======
    if (MOCK_DATA) {
      return (
        <FlatList
          horizontal
          data={MOCK_DATA}
<<<<<<< HEAD
>>>>>>> c3fc9c43 (screen in progress)
=======
>>>>>>> d32799fd (screen in progress)
>>>>>>> 7e2863bb (screen in progress)
          renderItem={({ item }) => <RenderItemCategory item={item} />}
          maxToRenderPerBatch={10}
          windowSize={5}
          initialNumToRender={10}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
<<<<<<< HEAD
<<<<<<< HEAD
    return <Loader />;
=======
    return <Spinner />;
<<<<<<< HEAD
>>>>>>> 7e2863bb (screen in progress)
  }, [NIVEAUX]);
  const _renderTrender = useMemo(() => {
    if (courses) {
      return (
        
=======
<<<<<<< HEAD
    return <Spinner />;
=======
>>>>>>> 7e2863bb (screen in progress)
  }, [MOCK_DATA]);
  const _renderTrender = useMemo(() => {
    if (MOCK_DATA) {
      return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7e2863bb (screen in progress)
=======
>>>>>>> 68f5f074 (- ADD element in screen home)
        <View style={{ marginBottom: 5 }}>
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
                paddingLeft: 20,
                paddingRight: 20,
              },
            ]}
          >
            <Text>{i18next.t(TEXT.HOME.coursAVenir)}</Text>
            <Link text={i18next.t(TEXT.HOME.VoirTout)} />
          </View>
<<<<<<< HEAD
>>>>>>> c3fc9c43 (screen in progress)
=======
        
>>>>>>> 0dd5df8f (- ADD element in screen home)
=======
>>>>>>> d32799fd (screen in progress)
<<<<<<< HEAD
>>>>>>> 7e2863bb (screen in progress)
=======
=======
        
>>>>>>> 5bdf0af8 (- ADD element in screen home)
>>>>>>> 68f5f074 (- ADD element in screen home)
          <View style={[]}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
<<<<<<< HEAD
              data={courses}
=======
              data={MOCK_DATA}
<<<<<<< HEAD
>>>>>>> c3fc9c43 (screen in progress)
=======
>>>>>>> d32799fd (screen in progress)
>>>>>>> 7e2863bb (screen in progress)
              contentContainerStyle={{
                paddingLeft: 20,
                paddingRight: 20,
                marginBottom: Platform.OS === "ios" ? 5 : 0,
              }}
              renderItem={({item}) => <BigCardCourse item={item} />}
              keyExtractor={(item, index) => `${index.toString()}`}
            />
          </View>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7e2863bb (screen in progress)
=======
>>>>>>> 68f5f074 (- ADD element in screen home)
       
      );
    }
    return <Loader />;
  }, [courses]);

  return (
    <ScrollView>
      <Layout style={{ flex: .8 ,height:height*.52}} level="2">
=======
        </View>
<<<<<<< HEAD
<<<<<<< HEAD
=======
       
>>>>>>> 0dd5df8f (- ADD element in screen home)
=======
>>>>>>> 7e2863bb (screen in progress)
=======
=======
       
>>>>>>> 5bdf0af8 (- ADD element in screen home)
>>>>>>> 68f5f074 (- ADD element in screen home)
      );
    }
    return <Spinner />;
  }, [MOCK_DATA]);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <View style={{ flex: .8 }}>
>>>>>>> c3fc9c43 (screen in progress)
=======
    <ScrollView>
      <Layout style={{ flex: .8 ,height:height*.52}} level="2">
>>>>>>> 0dd5df8f (- ADD element in screen home)
=======
    <>
      <View style={{ flex: .8 }}>
>>>>>>> d32799fd (screen in progress)
>>>>>>> 7e2863bb (screen in progress)
=======
    <>
      <View style={{ flex: .8 }}>
>>>>>>> d32799fd (screen in progress)
=======
    <ScrollView>
      <Layout style={{ flex: .8 ,height:height*.52}} level="2">
>>>>>>> 5bdf0af8 (- ADD element in screen home)
>>>>>>> 68f5f074 (- ADD element in screen home)
        <View
          style={{
            width: width + 150,
            alignSelf: "center",
            backgroundColor: "#070576",
            height: height * 0.42,
            borderBottomLeftRadius: width / 2.3,
            borderBottomRightRadius: width / 2.3,
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
              style={{
                backgroundColor: COLORS.transparent,
                alignSelf: "center",
              }}
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
               {i18next.t(TEXT.HOME.welcome)}
              </Text>
            </View>
            <View style={{ backgroundColor: COLORS.transparent, margin: "3%" }}>
              <Input
                placeholder="Place your Text"
                style={{
                  backgroundColor: COLORS.background,
                  opacity: 0.5,
                  borderRadius: 20,
                }}
                textStyle={{
                  // backgroundColor: COLORS.background,
                  color: COLORS.background,
                  height: 40,
                  borderRadius: 20,
                }}
                accessoryLeft={renderIcon("search")}
                accessoryRight={renderIcon("microphone")}
                // value={value}
                // onChangeText={(nextValue) => setValue(nextValue)}
              />
            </View>
            <View
              style={{
                backgroundColor: COLORS.transparent,
                margin: "4%",
                alignSelf: "center",
                // height:height*.15,
              }}
            >
              {_renderMockData}
            </View>
          </View>
        </View>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0dd5df8f (- ADD element in screen home)
=======
>>>>>>> 7e2863bb (screen in progress)
=======
=======
>>>>>>> 5bdf0af8 (- ADD element in screen home)
>>>>>>> 68f5f074 (- ADD element in screen home)
      </Layout>
      <Layout style={{ flex: 0.7 }} level="2">
      <View style={{ marginBottom: 5 }}>
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
                paddingLeft: 20,
                paddingRight: 20,
              },
            ]}
          >
            <Text>{i18next.t(TEXT.HOME.coursAVenir)}</Text>
            <Link text={i18next.t(TEXT.HOME.VoirTout)} />
          </View>
          {_renderTrender}
        </View>
      <View style={{ marginBottom: 5 }}>
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
                paddingLeft: 20,
                paddingRight: 20,
              },
            ]}
          >
            <Text>{i18next.t(TEXT.HOME.recommendedForYOU)}</Text>
            <Link text={i18next.t(TEXT.HOME.VoirTout)} />
          </View>
          {_renderTrender}
        </View>
        
        </Layout>
    </ScrollView>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7e2863bb (screen in progress)
=======
>>>>>>> 68f5f074 (- ADD element in screen home)
=======
      </View>
      <View style={{ flex: 0.7 }}>{_renderTrender}</View>
    </>
<<<<<<< HEAD
>>>>>>> c3fc9c43 (screen in progress)
=======
>>>>>>> 0dd5df8f (- ADD element in screen home)
=======
>>>>>>> d32799fd (screen in progress)
<<<<<<< HEAD
>>>>>>> 7e2863bb (screen in progress)
=======
=======
>>>>>>> 5bdf0af8 (- ADD element in screen home)
>>>>>>> 68f5f074 (- ADD element in screen home)
  );
};

export default memo(Home);
