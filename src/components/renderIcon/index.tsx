import React, {
    ReactElement,
    memo,
    useCallback,
    useEffect,
    useState,
  } from 'react';
  import {
    StyleSheet,
    TextStyle,
    TouchableWithoutFeedback,
    View,
    ViewStyle,
  } from 'react-native';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Feather from 'react-native-vector-icons/Feather';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Entypo from 'react-native-vector-icons/Entypo';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
  import Octicons from 'react-native-vector-icons/Octicons';
  import Foundation from 'react-native-vector-icons/Foundation';
  import EvilIcons from 'react-native-vector-icons/EvilIcons';
  
  export const Icons = {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
    Feather,
    FontAwesome,
    FontAwesome5,
    AntDesign,
    Entypo,
    SimpleLineIcons,
    Octicons,
    Foundation,
    EvilIcons,
  };
<<<<<<< HEAD
  type propsRenderIcon =TouchableWithoutFeedback['props']& {
=======
  type propsRenderIcon = {
<<<<<<< HEAD
>>>>>>> ab93aef2 (first unit project)
=======
>>>>>>> e6aa837d (first unit project)
>>>>>>> 4cdec91b (first unit project)
    name: string;
    styleIcon?: ViewStyle | TextStyle;
    color?: string;
    sizeIcon?: number;
    onPress?: () => void;
    type?: any;
    regular?: boolean;
    solid?: boolean;
  };
  const RenderIcon = ({
    name,
    styleIcon,
    color,
    sizeIcon,
    onPress,
    type = Icons.FontAwesome5,
    ...props
  }: propsRenderIcon): ReactElement => {
    const Tag = type;
    return (
      <TouchableWithoutFeedback onPress={onPress} {...props}>
        <Tag
          name={name}
          style={styleIcon}
          color={color}
          size={sizeIcon ? sizeIcon : 15}
        />
      </TouchableWithoutFeedback>
    );
  };
  export default memo(RenderIcon);
  