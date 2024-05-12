import React, {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 343adf8e (- add dynamic screen details)
>>>>>>> 2960beef (Add screen filter for course by niveau)
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
<<<<<<< HEAD
import useNavigationController from "../../../navigation/viewController";
import { ROUTES } from "../../../constant";
=======
<<<<<<< HEAD:src/modules/home/components/bigCardCourse/viewController/index.tsx
import useNavigationController from "../../../../../navigation/viewController";
import { ROUTES } from "../../../../../constant";
<<<<<<< HEAD
=======
import useNavigationController from "../../../navigation/viewController";
import { ROUTES } from "../../../constant";
>>>>>>> 525059d7 (Add screen filter for course by niveau):src/components/bigCardCourse/viewController/index.tsx
>>>>>>> 2960beef (Add screen filter for course by niveau)
const useBigCardCourseViewController = () => {
  const { handleNavigate } = useNavigationController();
  const handleNavigateToDetatils = useCallback(
    (id: string,title:string) => {
<<<<<<< HEAD
      console.log('\x1b[34m%s\x1b[0m', 'src/components/bigCardCourse/viewController/index.tsx:14 id', id);
=======
>>>>>>> 2960beef (Add screen filter for course by niveau)
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
=======
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
>>>>>>> 2960beef (Add screen filter for course by niveau)
