import React, { useContext, useMemo, useState } from "react";
import { Video } from "../../../types";

interface CourseDetailsValue {
  palyList: Video[];
<<<<<<< HEAD
<<<<<<< HEAD
  progression: string[];
=======
>>>>>>> 97ed279c (- add dynamic screen details)
=======
  progression: string[];
>>>>>>> 413519c4 (- fixed Progression)
  handleChargeVideo: (video: Video) => void;
}
type CourseDetailsPrpos = {
  children: React.ReactNode;
  palyList: Video[];
<<<<<<< HEAD
<<<<<<< HEAD
  progression: string[];
=======
>>>>>>> 97ed279c (- add dynamic screen details)
=======
  progression: string[];
>>>>>>> 413519c4 (- fixed Progression)
  handleChargeVideo: (video: Video) => void;
};

const CourseDetailsValueContext = React.createContext<
  CourseDetailsValue | undefined
>(undefined);

const CourseDetailsValueProvider: React.FC<CourseDetailsPrpos> = (props) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const { children, palyList, handleChargeVideo,progression } = props;
=======
  const { children, palyList, handleChargeVideo } = props;
>>>>>>> 97ed279c (- add dynamic screen details)
=======
  const { children, palyList, handleChargeVideo,progression } = props;
>>>>>>> 413519c4 (- fixed Progression)
  /**
   * hook state for open modal
   */

  const value = useMemo(() => {
    return {
      palyList,
      handleChargeVideo,
<<<<<<< HEAD
<<<<<<< HEAD
      progression
    };
  }, [palyList, handleChargeVideo,progression]);
=======
    };
  }, [palyList, handleChargeVideo]);
>>>>>>> 97ed279c (- add dynamic screen details)
=======
      progression
    };
  }, [palyList, handleChargeVideo,progression]);
>>>>>>> 413519c4 (- fixed Progression)

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
