import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import useNavigationController from "../../../../../navigation/viewController";
import { ROUTES } from "../../../../../constant";
const useBigCardCourseViewController = () => {
  const { handleNavigate } = useNavigationController();
  const handleNavigateToDetatils = useCallback(
    (id: string,title:string) => {
      if (id) {
        handleNavigate({ screen: ROUTES.CourseDetails,name:title, params: { id } });
      }
    },
    [handleNavigate]
  );
  return {handleNavigateToDetatils};
};
export default useBigCardCourseViewController;
