import React, {
<<<<<<< HEAD
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
  } from 'react';

  import moment from 'moment';
import useNavigationController from '../../../../navigation/viewController';
import useSignInModels from '../viewModel';
import { ROUTES } from '../../../../constant';
import { Credentials, SignUpBody } from '../../../../types';
import { useLoginMutation, useSignUpMutation } from '../../../../store/services';
import { useAuth } from '../../../../hooks';
  const useSignInController = () => {
    const {saveAuth}=useAuth()
    const [login, { isLoading, error }] = useLoginMutation();
    const [SignUp, { isLoading: isLoadingSignUp, error: errorSignUp }] =
      useSignUpMutation();

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
  
    const onSubmit = async (dataset: Credentials&SignUpBody): Promise<void> => {
      try {
       
        if (checkedSegment === 1) {
          const result = await login(dataset);
          console.log('\x1b[34m%s\x1b[0m', 'src/modules/auth/login/viewController/index.tsx:63 result', result);
          
          if (result?.data?.token) {
            saveAuth( result?.data?.token,{ nom: result?.data?.nom, prenom: result?.data?.prenom,full_name:result?.data?.full_name});
            resetNavigation( ROUTES.HomeScreen);
    
          } else {
            
            // Optionally, you can handle the login failure in a way that makes sense for your application
          }
        } else if (checkedSegment === 0) {
          const dateBirth = new Date(moment(dataset.datenai,'DD/MM/YYYY').format('YYYY-MM-DD')!);
          delete dataset.datenai 
         const result=await SignUp( {...dataset,datenai:dateBirth});
         console.log('\x1b[34m%s\x1b[0m', 'src/modules/auth/login/viewController/index.tsx:76 result', result);
         if (result?.data?.token) {
          saveAuth( result?.data?.token,{ nom: result?.data?.nom, prenom: result?.data?.prenom,full_name:result?.data?.full_name});
          resetNavigation( ROUTES.HomeScreen);
  
        } else {
          // Optionally, you can handle the login failure in a way that makes sense for your application
        }
        } else {
          console.error('Invalid checkedSegment value:', checkedSegment);
          // Optionally, you can handle the case where checkedSegment has an unexpected value
        }
      } catch (error: any) {
        console.error('Error during submission:', error?.message);
        // Optionally, you can handle other unexpected errors during submission
      }
    };
 
  
    const navigateToFPS = () => {
      handleNavigate({
        screen: ROUTES.ForgetPasswordScreen,
      });
    };
  
    return {
      onSubmit,
      handleSegment,
      checkedSegment,
      defaultValues,
      gender,
      pushMail, setPushMail, accessData, setAccessData,
      navigateToFPS,
    };
  };
  export default useSignInController;
  
=======
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
} from 'react';
const useLoginViewController = () => {
return {};
};
export default useLoginViewController;
>>>>>>> ab93aef2 (first unit project)
