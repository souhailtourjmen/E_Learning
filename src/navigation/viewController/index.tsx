<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5c6f7ff1 (- add new screen onbording)
=======
>>>>>>> 4cdec91b (first unit project)
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
<<<<<<< HEAD
          navigation.navigate(item.screen, {...item});
=======
          navigation.navigate(item.screen, item?.navigationParams);
>>>>>>> 5c6f7ff1 (- add new screen onbording)
=======
          navigation.navigate(item.screen, {...item});
>>>>>>> 97ed279c (- add dynamic screen details)
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
<<<<<<< HEAD
=======
>>>>>>> 4cdec91b (first unit project)
  
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
<<<<<<< HEAD
>>>>>>> ab93aef2 (first unit project)
=======
  
>>>>>>> 5c6f7ff1 (- add new screen onbording)
=======
>>>>>>> e6aa837d (first unit project)
>>>>>>> 4cdec91b (first unit project)
