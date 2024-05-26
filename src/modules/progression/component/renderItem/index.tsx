import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { StyleSheet, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { BORDERRADIUS, COLORS } from "../../../../constant";
import { Layout } from "@ui-kitten/components";
import { Card, Text } from "../../../../components";
import useRenderItemViewModels from "./viewModel";

export type RenderItemProps = {
  item: any;
};

const RenderItem = ({ item }: RenderItemProps): ReactElement => {

  const {clampedPercentage}=useRenderItemViewModels(item)
  const _renderProgressionItem=useMemo(()=>{
    return(
      <CircularProgress
      value={clampedPercentage||0}
      radius={60}
      duration={2000}
      progressValueColor={COLORS.primary}
      maxValue={100}
      title={`${item?.playList.length}/${item?.idCourse?.numeroVideo}`}
      titleColor={COLORS.primary}
      titleStyle={{ fontWeight: "bold" }}
    />
    )
  },[clampedPercentage,item])
  return (
    <Card
      disabled
      style={{
        borderRadius: BORDERRADIUS.radius_15,
        marginHorizontal: "2%",
        width: "100%",
      }}
    >
      <Layout
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Layout>
          <Text
            category="h5"
            style={{
              alignSelf: "center",
              color: COLORS.primary,
            }}
            numberOfLines={1}
          >
            Matiere:{item?.idCourse?.matiere}
          </Text>
          <View style={{}}>
            <Text category="h6">Titre:{item?.idCourse?.titre}</Text>
          </View>
          <View style={{}}>
            <Text category="p1">Niveau:{item?.idCourse?.niveau}</Text>
          </View>
        </Layout>
        <Layout>
         {_renderProgressionItem}
        </Layout>
      </Layout>
    </Card>
  );
};

export default memo(RenderItem);
