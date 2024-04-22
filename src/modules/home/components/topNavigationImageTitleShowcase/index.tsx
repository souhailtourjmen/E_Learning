import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Icon,
  IconElement,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { COLORS, ICONS } from "../../../../constant";
import RenderIcon from "../../../../components/renderIcon";
import { Text } from "../../../../components";



export const TopNavigationImageTitleShowcase = (): React.ReactElement => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = (): void => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = (): React.ReactElement => (
    <TopNavigationAction icon={MenuIcon} />
  );
  const MenuIcon = (props: any): IconElement => (
    <RenderIcon {...props}  name="bell" color="white" onPress={toggleMenu}/>
  );
  
  const InfoIcon = (props: any): IconElement => (
    <RenderIcon {...props} name="info" />
  );
  
  const LogoutIcon = (props: any): IconElement => (
    <RenderIcon {...props} name="log-out" />
  );
  const renderOverflowMenuAction = (): React.ReactElement => (
    <OverflowMenu
      anchor={renderMenuAction}
      visible={menuVisible}
      onBackdropPress={toggleMenu}
    >
      <MenuItem accessoryLeft={InfoIcon} title="About" />
      <MenuItem accessoryLeft={LogoutIcon} title="Logout" />
    </OverflowMenu>
  );

  const renderTitle = (props: any): React.ReactElement => (
    <View style={styles.titleContainer}>
      <Avatar style={styles.logo} source={ICONS.reservationProfileMenuIcon} />
      <Text {...props} style={{color:COLORS.background}}>Hi , Alan</Text>
    </View>
  );

  return (
    <TopNavigation
      style={{ backgroundColor: COLORS.transparent }}
      title={renderTitle}
      accessoryRight={renderOverflowMenuAction}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    marginHorizontal: 16,
  },
});
