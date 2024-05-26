import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { StyleSheet, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { BORDERRADIUS, COLORS } from "../../../../constant";
import { Layout } from "@ui-kitten/components";
import { Card, Text } from "../../../../components";

type RenderItemProps = {
  item: any;
};

const RenderItem = ({ item }: RenderItemProps): ReactElement => {
  console.log(
    "\x1b[34m%s\x1b[0m",
    "src/modules/progression/component/renderItem/index.tsx:18 item",
    item
  );
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
        </Layout>
      </Layout>
    </Card>
  );
};

export default memo(RenderItem);
