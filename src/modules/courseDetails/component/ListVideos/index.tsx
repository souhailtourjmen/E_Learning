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
import { COLORS, IMGS } from "../../../../constant";
var pkg = require("../../../../../package.json");
const THUMB="https://edynamiclearning.com/wp-content/uploads/2019/05/EDL224-Principles_BMF_1b-1.jpg"

const ListVideos = (): React.ReactElement => {
  const { palyList, handleChargeVideo,selectIndex, setselectIndex,progression } = useListVideosViewModels();
  const renderItemIcon = (image: string): any => (
    <Avatar shape="square" source={{ uri: image||THUMB }} />
  );
  const renderItemAccessory = (item:any): React.ReactElement =>{
    
    console.log('\x1b[34m%s\x1b[0m', 'src/modules/courseDetails/component/ListVideos/index.tsx:23 progression',progression,item._id, progression?.includes(item._id));
    return(
    <CheckBox
        status='success' 
        // style={styles.checkbox}
        disabled={!progression?.includes(item._id)}
        checked={progression?.includes(item._id)}
      />


  )};
  const renderItem = (info: any): React.ReactElement => (
    <Card
      style={[styles.item,selectIndex===info.index?{borderColor:COLORS.primary}:{borderColor:COLORS.lightGray}]}
      status="basic"
      onPress={() => {handleChargeVideo(info?.item);setselectIndex(info.index)}}
    >
      <ListItem
        disabled
        title={`${info?.item?.title||"Video"} ${info?.index + 1}`}
        // description={`${info?.item.description} ${info?.index + 1}`}
        accessoryLeft={() => renderItemIcon(info?.item?.thumb)}
        accessoryRight={renderItemAccessory(info?.item)}
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
