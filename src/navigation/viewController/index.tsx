<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5c6f7ff1 (- add new screen onbording)
=======
>>>>>>> 4cdec91b (first unit project)
=======
=======
>>>>>>> 9c8d4eae (- add new screen onbording)
>>>>>>> af751c6f (- add new screen onbording)
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
<<<<<<< HEAD
<<<<<<< HEAD
          navigation.navigate(item.screen, {...item});
=======
          navigation.navigate(item.screen, item?.navigationParams);
>>>>>>> 5c6f7ff1 (- add new screen onbording)
=======
          navigation.navigate(item.screen, {...item});
>>>>>>> 97ed279c (- add dynamic screen details)
=======
=======
>>>>>>> 11b8c648 (- add dynamic screen details)
          navigation.navigate(item.screen, {...item});
=======
          navigation.navigate(item.screen, item?.navigationParams);
>>>>>>> 9c8d4eae (- add new screen onbording)
<<<<<<< HEAD
>>>>>>> af751c6f (- add new screen onbording)
=======
=======
          navigation.navigate(item.screen, {...item});
>>>>>>> 343adf8e (- add dynamic screen details)
>>>>>>> 11b8c648 (- add dynamic screen details)
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
<<<<<<< HEAD
=======
>>>>>>> 4cdec91b (first unit project)
=======
>>>>>>> af751c6f (- add new screen onbording)
  
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
<<<<<<< HEAD
>>>>>>> 4cdec91b (first unit project)
=======
=======
  
>>>>>>> 9c8d4eae (- add new screen onbording)
>>>>>>> af751c6f (- add new screen onbording)
