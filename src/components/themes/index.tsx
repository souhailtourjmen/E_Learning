/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  View as DefaultView,
  ScrollView as DefaultScrollView,
  FlatList as DefaultFlatList,
  Text as GlobalText,
} from 'react-native';
import {Text as DefaultText, Card as DefaultCard} from '@ui-kitten/components';
import {useColorScheme} from '../../hooks';
import React, {ReactElement} from 'react';
import { COLORS, FONTFAMILY } from '../../constant';

export function useThemeColor(
  props: {light?: string; dark?: string},
  colorName: keyof typeof COLORS.light & keyof typeof COLORS.dark,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return COLORS[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type CardProps = ThemeProps & DefaultCard['props'];
export type ScrollViewProps = ThemeProps & DefaultScrollView['props'];
export type FlatListProps = ThemeProps & DefaultFlatList['props'];

export function Text(props: TextProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const color = useThemeColor(
    {
      light: COLORS.light.tint,
      dark: COLORS.dark.tint,
    },
    'text',
  );

  return (
    <DefaultText
      style={[{color, fontFamily: FONTFAMILY['poppins_regular']}, style]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {
      light: lightColor || COLORS.light.background,
      dark: darkColor || COLORS.dark.background,
    },
    'background',
  );

  return <DefaultView style={[style]} {...otherProps} />;
}
export function Card(props: CardProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {
      light: lightColor || COLORS.light.background,
      dark: darkColor || COLORS.dark.background,
    },
    'background',
  );
  return <DefaultCard style={[style]} {...otherProps} />;
}
export function ScrollView(props: ScrollViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {
      light: lightColor || COLORS.light.background,
      dark: darkColor || COLORS.dark.background,
    },
    'background',
  );

  return (
    <DefaultScrollView
      style={[style]}
      removeClippedSubviews={true}
      {...otherProps}
    />
  );
}
export function FlatList(props: FlatListProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {
      light: lightColor || COLORS.light.background,
      dark: darkColor || COLORS.dark.background,
    },
    'background',
  );

  return <DefaultFlatList style={[style]} {...otherProps} />;
}
