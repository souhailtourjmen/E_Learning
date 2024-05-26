import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
<<<<<<< HEAD
<<<<<<< HEAD
  useMemo,
=======
>>>>>>> f69bf6ed (- add design progression)
=======
  useMemo,
>>>>>>> 413519c4 (- fixed Progression)
  useState,
} from "react";
import { StyleSheet, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { BORDERRADIUS, COLORS } from "../../../../constant";
import { Layout } from "@ui-kitten/components";
import { Card, Text } from "../../../../components";
<<<<<<< HEAD
<<<<<<< HEAD
import useRenderItemViewModels from "./viewModel";

export type RenderItemProps = {
=======

type RenderItemProps = {
>>>>>>> f69bf6ed (- add design progression)
=======
import useRenderItemViewModels from "./viewModel";

export type RenderItemProps = {
>>>>>>> 413519c4 (- fixed Progression)
  item: any;
};

const RenderItem = ({ item }: RenderItemProps): ReactElement => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 413519c4 (- fixed Progression)

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
<<<<<<< HEAD
=======
  console.log(
    "\x1b[34m%s\x1b[0m",
    "src/modules/progression/component/renderItem/index.tsx:18 item",
    item
  );
>>>>>>> f69bf6ed (- add design progression)
=======
>>>>>>> 413519c4 (- fixed Progression)
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
<<<<<<< HEAD
<<<<<<< HEAD
         {_renderProgressionItem}
=======
          <CircularProgress
            value={(item?.playList?.length / item?.idCourse?.numeroVideo) * 100}
            radius={60}
            duration={2000}
            progressValueColor={COLORS.primary}
            maxValue={200}
            title={`${item?.playList.length}/${item?.idCourse?.numeroVideo}`}
            titleColor={COLORS.primary}
            titleStyle={{ fontWeight: "bold" }}
          />
>>>>>>> f69bf6ed (- add design progression)
=======
         {_renderProgressionItem}
>>>>>>> 413519c4 (- fixed Progression)
        </Layout>
      </Layout>
    </Card>
  );
};

export default memo(RenderItem);
