import React, {
    ReactElement,
    memo,
    useCallback,
    useEffect,
    useState,
  } from 'react';
  import {Image, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import { styles } from './styles';
import { Text, View } from '..';

  
  type propsButtonSocialMedia = {
    text: string;
    img: any;
    textSyle?: TextStyle;
    style?: ViewStyle;
  };
  const ButtonSocialMedia = ({
    text,
    img,
    style,
    textSyle,
  }: propsButtonSocialMedia): ReactElement => {
    return (
      <View>
        <TouchableOpacity style={[styles.social_btn, style]}>
         {img? <Image style={styles.social_img} source={img} />:null}
          <Text
            style={[
              textSyle,
              {
                width: '70%',
                textAlign: 'center',
                fontSize: 16,
                fontFamily: 'OpenSans-Medium',
                paddingRight: '10%',
              },
            ]}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  export default memo(ButtonSocialMedia);
  