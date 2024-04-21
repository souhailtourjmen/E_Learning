import React, {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
  } from 'react';

  import moment from 'moment';
import useNavigationController from '../../../../navigation/viewController';
import useSignInModels from '../viewModel';
  const useSignInController = () => {




  
    const { handleNavigate,resetNavigation } =
      useNavigationController();
  
    const {
      checkedSegment,
      setCheckedSegment,
      defaultValues,
      setDefaultValues,
      gender,
      pushMail, setPushMail, accessData, setAccessData
    } = useSignInModels();
  
    const handleSegment = useCallback(
      (item: number) => {
        try {
          // Ensure that the item is a valid number before updating the state
          if (typeof item === 'number') {
            setCheckedSegment(item);
            if (item === 1) {
              setDefaultValues({ email: '' });
            } else {
              setDefaultValues({
                email: '',
                password: '',
              });
            }
          } else {
            console.error('Invalid segment value. Expected a number.');
          }
        } catch (error: any) {
          console.error('Error updating checked segment:', error.message);
          // Optionally, you can handle the error in a way that makes sense for your application
        }
      },
      [setCheckedSegment],
    );
  
    // const onSubmit = async (dataset: Credentials | SignUpBody): Promise<void> => {
    //   try {
       
    //   } catch (error: any) {
    //     console.error('Error during submission:', error?.message);
    //     // Optionally, you can handle other unexpected errors during submission
    //   }
    // };
  
    // const onSubmitSignUp = async (dataset: SignUpBody): Promise<void> => {
    //   try {
       
    //   } catch (error: any) {
    //     console.log('Error during submission:', error?.message);
    //     // Optionally, you can handle other unexpected errors during submission
    //   }
    // };
  
    const navigateToFPS = () => {
    //   handleNavigate({
    //     screen: ROUTES.ForgetPasswordScreen,
    //   });
    };
  
    return {
     
      handleSegment,
      checkedSegment,
      defaultValues,
      gender,
      pushMail, setPushMail, accessData, setAccessData,
      navigateToFPS,
    };
  };
  export default useSignInController;
  