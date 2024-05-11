import React, {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 343adf8e (- add dynamic screen details)
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import useNavigationController from "../../../../../navigation/viewController";
import { ROUTES } from "../../../../../constant";
<<<<<<< HEAD
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
=======
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
} from 'react';
=======
>>>>>>> 343adf8e (- add dynamic screen details)
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
<<<<<<< HEAD
>>>>>>> d32799fd (screen in progress)
=======
>>>>>>> 343adf8e (- add dynamic screen details)
