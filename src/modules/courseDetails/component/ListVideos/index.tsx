import React, { memo } from "react";
import { ListRenderItemInfo, StyleSheet, View } from "react-native";
import {
  Avatar,
  Card,
  CheckBox,
  Divider,
  List,
  ListItem,
  Text,
} from "@ui-kitten/components";
import { styles } from "./styles";
import useListVideosViewModels from "./viewModel";
import { COLORS } from "../../../../constant";
var pkg = require("../../../../../package.json");
const ListVideos = (): React.ReactElement => {
  const { palyList, handleChargeVideo,selectIndex, setselectIndex } = useListVideosViewModels();
  const renderItemIcon = (image: string): any => (
    <Avatar shape="square" source={{ uri: image }} />
  );
  const renderItemAccessory = (): React.ReactElement => (
    <CheckBox
        status='success' 
        // style={styles.checkbox}
        disabled={true}
        checked
      />


  );
  const renderItem = (info: any): React.ReactElement => (
    <Card
      style={[styles.item,selectIndex===info.index?{borderColor:COLORS.primary}:{borderColor:COLORS.lightGray}]}
      status="basic"
      onPress={() => {handleChargeVideo(info?.item);setselectIndex(info.index)}}
    >
      <ListItem
        disabled
        title={`${info?.item.title} ${info?.index + 1}`}
        // description={`${info?.item.description} ${info?.index + 1}`}
        accessoryLeft={() => renderItemIcon(info?.item?.thumb)}
        accessoryRight={renderItemAccessory}
      />
    </Card>
  );

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={palyList}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};

export default memo(ListVideos);
