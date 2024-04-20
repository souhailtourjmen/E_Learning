/* eslint-disable prettier/prettier */
import {TouchableOpacity, StyleSheet, TextStyle} from 'react-native';
import React from 'react';

import {Spinner} from '@ui-kitten/components';
import { Text, View } from '..';
import { COLORS } from '../../constant';
import { styles } from './styles';

export type CustomButtonProps = {
  text?: string;
  type?: 'primary' | 'secondary' | 'disabled';
  fullWidth?: boolean;
  rounded?: boolean;
  Icon?: React.ReactElement;
  iconPosition?: 'left' | 'center' | 'right' | 'extraRight';
  color?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  fontStyle?: TextStyle;
  isLoading?: boolean;
};
export type ButtonProps = TouchableOpacity['props'] & CustomButtonProps;
export default function Button({
  text,
  type = 'primary',
  fullWidth,
  rounded,
  Icon,
  iconPosition,
  style,
  backgroundColor,
  color,
  size,
  fontStyle,
  isLoading = false,
  ...others
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.button,
        styles[type],
        size === 'small'
          ? styles.small
          : size === 'large'
          ? styles.large
          : undefined,
        fullWidth && styles.fullWidth,
        rounded && styles.rounded,
        {...(backgroundColor && {backgroundColor: backgroundColor})},
        style,
      ]}
      {...others}>
      {Icon &&
        (!iconPosition ||
          iconPosition === 'left' ||
          iconPosition === 'center') && (
          <View
            style={
              fullWidth && iconPosition === 'left'
                ? styles.fullWidthIconLeft
                : text
                ? styles.iconLeft
                : undefined
            }>
            {Icon}
          </View>
        )}
      {!isLoading && text ? (
        <Text
          style={[
            color
              ? {color: color}
              : type === 'secondary'
              ? styles.textDark
              : text
              ? styles.textLight
              : undefined,
            fontStyle,
          ]}>
          {text}
        </Text>
      ) : (
        isLoading && <Spinner status="basic" size="small" />
      )}
      {Icon && iconPosition === 'right' && (
        <View style={fullWidth ? styles.fullWidthIconRight : styles.iconRight}>
          {Icon}
        </View>
      )}
      {Icon && iconPosition === 'extraRight' && (
        <View
          style={fullWidth ? styles.fullWidthIconRightExtra : styles.iconRight}>
          {Icon}
        </View>
      )}
    </TouchableOpacity>
  );
}
