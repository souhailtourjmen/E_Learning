import React, { useContext, useMemo, useState } from "react";
import { Video } from "../../../types";

interface CourseDetailsValue {
  palyList: Video[];
  handleChargeVideo: (video: Video) => void;
}
type CourseDetailsPrpos = {
  children: React.ReactNode;
  palyList: Video[];
  handleChargeVideo: (video: Video) => void;
};

const CourseDetailsValueContext = React.createContext<
  CourseDetailsValue | undefined
>(undefined);

const CourseDetailsValueProvider: React.FC<CourseDetailsPrpos> = (props) => {
  const { children, palyList, handleChargeVideo } = props;
  /**
   * hook state for open modal
   */

  const value = useMemo(() => {
    return {
      palyList,
      handleChargeVideo,
    };
  }, [palyList, handleChargeVideo]);

  return (
    <CourseDetailsValueContext.Provider value={value}>
      {children}
    </CourseDetailsValueContext.Provider>
  );
};

export default CourseDetailsValueProvider;

export const useCourseDetailsValueContext = () => {
  const value = useContext(CourseDetailsValueContext);
  if (!value) {
    throw new Error(
      "useCourseDetailsValueContext must be called from within CourseDetailsValueProvider!"
    );
  }
  return value;
};
