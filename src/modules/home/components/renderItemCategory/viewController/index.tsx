import React, {
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
} from 'react';
<<<<<<< HEAD
import useNavigationController from '../../../../../navigation/viewController';
import { ROUTES } from '../../../../../constant';
const useRenderItemCategoryViewController = () => {
    const { handleNavigate } = useNavigationController();
  const handleNavigateToScreenFilter = useCallback(
    (filter?: string,title?:string) => {
      if (filter) {
        handleNavigate({ screen: ROUTES.COurseFilter,name:title, params: { filter:filter } });
      }
    },
    [handleNavigate]
  );
  return {handleNavigateToScreenFilter};
=======
const useRenderItemCategoryViewController = () => {
return {};
>>>>>>> c3fc9c43 (screen in progress)
};
export default useRenderItemCategoryViewController;