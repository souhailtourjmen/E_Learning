/* eslint-disable prettier/prettier */

import {ReactElement} from 'react';
import {ViewStyle} from 'react-native';
import {StyleSheet, TouchableOpacity, TextStyle} from 'react-native';
import {styles} from './styles';
import { useColorScheme } from '../../hooks';
import { Text, View } from '..';
import { COLORS } from '../../constant';

type Props = TouchableOpacity['props'] & {
  text: string;
  styleText?: TextStyle;
  Icon?: ReactElement;
  flex?: ViewStyle;
  color?: string;
};
export default function Link({
  text,
  styleText,
  Icon,
  flex,
  color,
  ...others
}: Props) {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TouchableOpacity activeOpacity={0.7} {...others}>
      <View style={flex ? flex : styles.container}>
        {Icon && Icon}
        <Text
          style={[
            styles.link,
            styleText,
            isDarkMode ? {color: COLORS.dark.text} : {color: color},
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
