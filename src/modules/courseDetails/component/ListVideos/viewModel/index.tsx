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
  
  return values;
};
export default useListVideosViewModels;
