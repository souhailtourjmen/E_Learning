import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { View, useWindowDimensions } from "react-native";
=======
import {  View, useWindowDimensions } from "react-native";
>>>>>>> c3fc9c43 (screen in progress)
=======
import { View, useWindowDimensions } from "react-native";
>>>>>>> 2960beef (Add screen filter for course by niveau)
import { Text } from "../../../../components";
import { COLORS } from "../../../../constant";
import { Avatar } from "@ui-kitten/components";
import { styles } from "./styles";
<<<<<<< HEAD
<<<<<<< HEAD
import useRenderItemCategoryViewController from "./viewController";
import { TouchableOpacity } from "react-native";
=======
>>>>>>> c3fc9c43 (screen in progress)
=======
import useRenderItemCategoryViewController from "./viewController";
import { TouchableOpacity } from "react-native";
>>>>>>> 2960beef (Add screen filter for course by niveau)

type RenderItemCategoryProps = {
  item: {
    name: string;
    image: string;
    id: string;
    count: number;
  };
};

const RenderItemCategory = ({
  item,
}: RenderItemCategoryProps): ReactElement => {
  const { height, width } = useWindowDimensions();
<<<<<<< HEAD
<<<<<<< HEAD
  const { handleNavigateToScreenFilter } =
    useRenderItemCategoryViewController();
  return (
    <TouchableOpacity 
      onPress={() => {
        handleNavigateToScreenFilter(item?.name!, item?.name!);
      }}
      activeOpacity={0.8}
      style={{}}
    >
      <View
        style={[
          { width: width * 0.25, height: height * 0.17 },
          styles.container,
        ]}
      >
        <View
          style={{
            padding: "5%",
            alignContent: "center",
            alignItems: "center",
          }}
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
        <View style={styles.containerFooter}>
          <Text style={{ color: COLORS.background, textAlign: "center" }}>
            {item?.count} course
          </Text>
        </View>
      </View>
    </TouchableOpacity>
=======

=======
  const { handleNavigateToScreenFilter } =
    useRenderItemCategoryViewController();
>>>>>>> 2960beef (Add screen filter for course by niveau)
  return (
    <TouchableOpacity 
      onPress={() => {
        handleNavigateToScreenFilter(item?.name!, item?.name!);
      }}
      activeOpacity={0.8}
      style={{}}
    >
      <View
        style={[
          { width: width * 0.25, height: height * 0.17 },
          styles.container,
        ]}
      >
        <View
          style={{
            padding: "5%",
            alignContent: "center",
            alignItems: "center",
          }}
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
        <View style={styles.containerFooter}>
          <Text style={{ color: COLORS.background, textAlign: "center" }}>
            {item?.count} course
          </Text>
        </View>
      </View>
<<<<<<< HEAD
      <View style={styles.containerFooter}>
        <Text style={{ color: COLORS.background, textAlign: "center" }}>
<<<<<<< HEAD
<<<<<<< HEAD
          {item?.count}%
=======
          {item?.count}
>>>>>>> d32799fd (screen in progress)
=======
          {item?.count}%
>>>>>>> 30639760 (module auth and regsister token done)
        </Text>
      </View>
    </View>
<<<<<<< HEAD
>>>>>>> c3fc9c43 (screen in progress)
=======
=======
    </TouchableOpacity>
>>>>>>> 525059d7 (Add screen filter for course by niveau)
>>>>>>> 2960beef (Add screen filter for course by niveau)
  );
};

export default memo(RenderItemCategory);
