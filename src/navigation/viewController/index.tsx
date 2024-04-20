<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5c6f7ff1 (- add new screen onbording)
import {
    useNavigation,
  } from '@react-navigation/native';
  import React, {

    useCallback,
  } from 'react';

  import {NavigationParamsType} from '../../types';


  
  const useNavigationController = () => {
    const navigation: any = useNavigation();
  


  
    const handleNestedNavigator = useCallback(
      (firstScreen: string, secondScreen: string, params?: any) => {
        navigation.navigate(firstScreen, {
          screen: secondScreen,
          params: params,
        });
      },
      [],
    );
    const HandleBack = useCallback(() => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    }, []);
    const handleNavigate = useCallback(
      (item: NavigationParamsType) => {
        // const routes = navigation.getState();
        // console.log('%cindex.tsx line:48 routes', 'color: #007acc;', routes);
        if (item && item.screen) {
<<<<<<< HEAD
          navigation.navigate(item.screen, {...item});
=======
          navigation.navigate(item.screen, item?.navigationParams);
>>>>>>> 5c6f7ff1 (- add new screen onbording)
        }
      },
      [navigation],
    );
    const resetNavigation = useCallback(
      (screen: string) => {
        navigation.reset({
          index: 0,
          routes: [{name: screen}],
        });
      },
      [navigation],
    );
  

  
    return {
      handleNavigate,
      handleNestedNavigator,
      HandleBack,
      resetNavigation
    };
  };
  
  export default useNavigationController;
<<<<<<< HEAD
  
=======
import React, {
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
} from 'react';
const useNavigationViewController = () => {
return {};
};
export default useNavigationViewController;
>>>>>>> ab93aef2 (first unit project)
=======
  
>>>>>>> 5c6f7ff1 (- add new screen onbording)
