import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Spinner} from '@ui-kitten/components';

const Loader = ({size = 'large', bgcColor = 'white'}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgcColor,
      }}>
      <Spinner size={size} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
