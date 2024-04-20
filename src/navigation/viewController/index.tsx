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
          navigation.navigate(item.screen, {...item});
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
  
