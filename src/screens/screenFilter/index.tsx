import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { StyleSheet, View } from "react-native";
import FilterModule from "../../modules/filterModule";
type propsScreenFilter = {};
const ScreenFilter = (): ReactElement => {
  return (
    <View>
      <FilterModule />
    </View>
  );
};
export default ScreenFilter;
