import React, { useContext, useMemo, useState } from "react";
import { Video } from "../../../types";

interface CourseDetailsValue {
  palyList: Video[];
<<<<<<< HEAD
  progression: string[];
=======
>>>>>>> 97ed279c (- add dynamic screen details)
  handleChargeVideo: (video: Video) => void;
}
type CourseDetailsPrpos = {
  children: React.ReactNode;
  palyList: Video[];
<<<<<<< HEAD
  progression: string[];
=======
>>>>>>> 97ed279c (- add dynamic screen details)
  handleChargeVideo: (video: Video) => void;
};

const CourseDetailsValueContext = React.createContext<
  CourseDetailsValue | undefined
>(undefined);

const CourseDetailsValueProvider: React.FC<CourseDetailsPrpos> = (props) => {
<<<<<<< HEAD
  const { children, palyList, handleChargeVideo,progression } = props;
=======
  const { children, palyList, handleChargeVideo } = props;
>>>>>>> 97ed279c (- add dynamic screen details)
  /**
   * hook state for open modal
   */

  const value = useMemo(() => {
    return {
      palyList,
      handleChargeVideo,
<<<<<<< HEAD
      progression
    };
  }, [palyList, handleChargeVideo,progression]);
=======
    };
  }, [palyList, handleChargeVideo]);
>>>>>>> 97ed279c (- add dynamic screen details)

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
