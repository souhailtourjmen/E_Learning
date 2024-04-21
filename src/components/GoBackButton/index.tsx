import { Image, TouchableHighlight } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { COLORS } from "../../constant";
import RenderIcon from "../renderIcon";
import useNavigationController from "../../navigation/viewController";

export default function GoBackButton(props: TouchableHighlight["props"]) {
  const { HandleBack } = useNavigationController();
  return (
    <TouchableHighlight
      onPress={() => {
        HandleBack();
      }}
      
      style={[
        {
          borderRadius: 100,
          alignSelf: "flex-start",
          paddingVertical: 5,
          paddingHorizontal: 7,
        },
        props?.style,
      ]}
      underlayColor={COLORS.lightGray}
      {...props}
    >
      <RenderIcon name={"chevron-left"} />
    </TouchableHighlight>
  );
}
