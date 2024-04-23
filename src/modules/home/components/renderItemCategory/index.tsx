import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import {  View, useWindowDimensions } from "react-native";
import { Text } from "../../../../components";
import { COLORS } from "../../../../constant";
import { Avatar } from "@ui-kitten/components";
import { styles } from "./styles";

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
          {item?.count}
        </Text>
      </View>
    </View>
  );
};

export default memo(RenderItemCategory);
