import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import useNavigationController from "../../../navigation/viewController";
import { ROUTES } from "../../../constant";
const useBigCardCourseViewController = () => {
  const { handleNavigate } = useNavigationController();
  const handleNavigateToDetatils = useCallback(
    (id: string,title:string) => {
      console.log('\x1b[34m%s\x1b[0m', 'src/components/bigCardCourse/viewController/index.tsx:14 id', id);
      if (id) {
        handleNavigate({ screen: ROUTES.CourseDetails,name:title, params: { id } });
      }
    },
    [handleNavigate]
  );
  return {handleNavigateToDetatils};
};
export default useBigCardCourseViewController;
