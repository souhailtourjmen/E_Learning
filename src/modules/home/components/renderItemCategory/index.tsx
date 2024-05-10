import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
<<<<<<< HEAD
import { View, useWindowDimensions } from "react-native";
=======
import {  View, useWindowDimensions } from "react-native";
>>>>>>> c3fc9c43 (screen in progress)
import { Text } from "../../../../components";
import { COLORS } from "../../../../constant";
import { Avatar } from "@ui-kitten/components";
import { styles } from "./styles";
<<<<<<< HEAD
import useRenderItemCategoryViewController from "./viewController";
import { TouchableOpacity } from "react-native";
=======
>>>>>>> c3fc9c43 (screen in progress)

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

  return (
    <View
      style={[{ width: width * 0.25, height: height * 0.17 }, styles.container]}
    >
      <View
        style={{ padding: "5%", alignContent: "center", alignItems: "center" }}
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
>>>>>>> c3fc9c43 (screen in progress)
  );
};

export default memo(RenderItemCategory);
