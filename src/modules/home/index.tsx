import React, { ReactElement, memo, useMemo } from "react";
import { Platform, useWindowDimensions } from "react-native";

import useHomeViewModels from "./viewModel";
import { styles } from "./styles";
import useHomeViewController from "./viewController";
import { FlatList, Link, ScrollView, Text, View } from "../../components";
import { i18next } from "../../config";
import { COLORS, FONTSIZE, TEXT } from "../../constant";
import { TopNavigationImageTitleShowcase } from "./components/topNavigationImageTitleShowcase";
import { Input, Layout, Spinner } from "@ui-kitten/components";
import RenderIcon from "../../components/renderIcon";
import RenderItemCategory from "./components/renderItemCategory";
import NIVEAUX from "../../mockData/NIVEAUX";
import BigCardCourse from "./components/bigCardCourse";
type HomeProps = {};

const Home = (): ReactElement => {
  const { height, width } = useWindowDimensions();
  const {courses}=useHomeViewModels();
  const renderIcon = (name: string) => {
    return <RenderIcon name={name} />;
  };

  const _renderMockData = useMemo(() => {
    if (NIVEAUX) {
      return (
        <FlatList
          horizontal
          data={NIVEAUX}
          renderItem={({ item }) => <RenderItemCategory item={item} />}
          maxToRenderPerBatch={10}
          windowSize={5}
          initialNumToRender={10}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
    return <Spinner />;
  }, [NIVEAUX]);
  const _renderTrender = useMemo(() => {
    if (courses) {
      return (
        
          <View style={[]}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={courses}
              contentContainerStyle={{
                paddingLeft: 20,
                paddingRight: 20,
                marginBottom: Platform.OS === "ios" ? 5 : 0,
              }}
              renderItem={({item}) => <BigCardCourse item={item} />}
              keyExtractor={(item, index) => `${index.toString()}`}
            />
          </View>
       
      );
    }
    return <Spinner />;
  }, [courses]);

  return (
    <ScrollView>
      <Layout style={{ flex: .8 ,height:height*.52}} level="2">
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
  );
};

export default memo(Home);
