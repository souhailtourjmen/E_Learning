import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { StyleSheet, View } from "react-native";
import CourseDetails from "../../modules/courseDetails";
type propsScreenCourseDetails = {};
const ScreenCourseDetails = (): ReactElement => {
  return (
    <View>
      <CourseDetails />
    </View>
  );
};
export default ScreenCourseDetails;
