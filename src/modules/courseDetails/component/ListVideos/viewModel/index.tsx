import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import { useCourseDetailsValueContext } from "../../../context";
const useListVideosViewModels = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const { palyList, handleChargeVideo, progression } =
    useCourseDetailsValueContext();
  const [selectIndex, setselectIndex] = useState<number>(0);
  const values = useMemo(() => {
    return {
      palyList,
      handleChargeVideo,
      selectIndex,
      setselectIndex,
      progression,
    };
  }, [palyList, handleChargeVideo, selectIndex, setselectIndex, progression]);
  
=======
  const { palyList,handleChargeVideo } = useCourseDetailsValueContext();
  const [selectIndex, setselectIndex] = useState<number>(0);
  const values = useMemo(() => {
    return { palyList,handleChargeVideo ,selectIndex, setselectIndex};
  }, [palyList,handleChargeVideo,selectIndex, setselectIndex]);
>>>>>>> 97ed279c (- add dynamic screen details)
=======
  const { palyList, handleChargeVideo, progression } =
    useCourseDetailsValueContext();
  const [selectIndex, setselectIndex] = useState<number>(0);
  const values = useMemo(() => {
    return {
      palyList,
      handleChargeVideo,
      selectIndex,
      setselectIndex,
      progression,
    };
  }, [palyList, handleChargeVideo, selectIndex, setselectIndex, progression]);
  
>>>>>>> 413519c4 (- fixed Progression)
  return values;
};
export default useListVideosViewModels;
