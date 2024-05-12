import React, {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ef87bf9c (Create module auth signIn)
=======
>>>>>>> 4cdec91b (first unit project)
=======
=======
>>>>>>> 69415541 (Create module auth signIn)
>>>>>>> 54475f41 (Create module auth signIn)
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
  } from 'react';

  import moment from 'moment';
import useNavigationController from '../../../../navigation/viewController';
import useSignInModels from '../viewModel';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
>>>>>>> 54475f41 (Create module auth signIn)
=======
=======
>>>>>>> df35d18d (- add WS login implementation)
>>>>>>> c662ef07 (- add WS login implementation)
import { ROUTES } from '../../../../constant';
import { Credentials, SignUpBody } from '../../../../types';
import { useLoginMutation, useSignUpMutation } from '../../../../store/services';
import { useAuth } from '../../../../hooks';
<<<<<<< HEAD
  const useSignInController = () => {
    const {saveAuth}=useAuth()
    const [login, { isLoading, error }] = useLoginMutation();
    const [SignUp, { isLoading: isLoadingSignUp, error: errorSignUp }] =
      useSignUpMutation();

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 50fe44b2 (- add WS login implementation)
  const useSignInController = () => {
    const {saveAuth}=useAuth()
    const [login, { isLoading, error }] = useLoginMutation();
    const [SignUp, { isLoading: isLoadingSignUp, error: errorSignUp }] =
      useSignUpMutation();

<<<<<<< HEAD
=======
=======
=======
>>>>>>> df35d18d (- add WS login implementation)
>>>>>>> c662ef07 (- add WS login implementation)
  const useSignInController = () => {
    const {saveAuth}=useAuth()
    const [login, { isLoading, error }] = useLoginMutation();
    const [SignUp, { isLoading: isLoadingSignUp, error: errorSignUp }] =
      useSignUpMutation();

<<<<<<< HEAD
>>>>>>> 54475f41 (Create module auth signIn)
=======
<<<<<<< HEAD
>>>>>>> c662ef07 (- add WS login implementation)



  
<<<<<<< HEAD
>>>>>>> ef87bf9c (Create module auth signIn)
=======
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
>>>>>>> 69415541 (Create module auth signIn)
<<<<<<< HEAD
>>>>>>> 54475f41 (Create module auth signIn)
=======
=======
>>>>>>> df35d18d (- add WS login implementation)
>>>>>>> c662ef07 (- add WS login implementation)
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
  
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const onSubmit = async (dataset: Credentials&SignUpBody): Promise<void> => {
      try {
       
=======
=======
>>>>>>> 54475f41 (Create module auth signIn)
=======
=======
>>>>>>> df35d18d (- add WS login implementation)
>>>>>>> c662ef07 (- add WS login implementation)
    const onSubmit = async (dataset: Credentials | SignUpBody): Promise<void> => {
      try {
>>>>>>> 50fe44b2 (- add WS login implementation)
        if (checkedSegment === 1) {
          const result = await login(dataset);
          console.log('\x1b[34m%s\x1b[0m', 'src/modules/auth/login/viewController/index.tsx:63 result', result);
          
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          if (result?.data?.token) {
            saveAuth( result?.data?.token,{ nom: result?.data?.nom, prenom: result?.data?.prenom,full_name:result?.data?.full_name});
=======
          if (result?.data?.data?.token) {
            saveAuth( result?.data?.data?.token);
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
          if (result?.data?.token) {
            saveAuth( result?.data?.token);
>>>>>>> 1df81466 (module auth and regsister token done)
=======
=======
>>>>>>> 67e6b12f (module auth and regsister token done)
          if (result?.data?.token) {
<<<<<<< HEAD
            saveAuth( result?.data?.token);
=======
          if (result?.data?.data?.token) {
            saveAuth( result?.data?.data?.token);
>>>>>>> df35d18d (- add WS login implementation)
<<<<<<< HEAD
>>>>>>> c662ef07 (- add WS login implementation)
=======
=======
          if (result?.data?.token) {
            saveAuth( result?.data?.token);
>>>>>>> 30639760 (module auth and regsister token done)
<<<<<<< HEAD
>>>>>>> 67e6b12f (module auth and regsister token done)
=======
=======
            saveAuth( result?.data?.token,{ nom: result?.data?.nom, prenom: result?.data?.prenom,full_name:result?.data?.full_name});
>>>>>>> 248b181a (add feature chat module)
>>>>>>> 3179387e (add feature chat module)
            resetNavigation( ROUTES.HomeScreen);
    
          } else {
            
            // Optionally, you can handle the login failure in a way that makes sense for your application
          }
        } else if (checkedSegment === 0) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          const dateBirth = new Date(moment(dataset.datenai,'DD/MM/YYYY').format('YYYY-MM-DD')!);
          delete dataset.datenai 
         const result=await SignUp( {...dataset,datenai:dateBirth});
         console.log('\x1b[34m%s\x1b[0m', 'src/modules/auth/login/viewController/index.tsx:76 result', result);
         if (result?.data?.token) {
          saveAuth( result?.data?.token,{ nom: result?.data?.nom, prenom: result?.data?.prenom,full_name:result?.data?.full_name});
=======
=======
>>>>>>> c662ef07 (- add WS login implementation)
=======
=======
>>>>>>> 30639760 (module auth and regsister token done)
>>>>>>> 67e6b12f (module auth and regsister token done)
         
         const result=await SignUp(dataset);
         console.log('\x1b[34m%s\x1b[0m', 'src/modules/auth/login/viewController/index.tsx:76 result', result);
         if (result?.data?.token) {
<<<<<<< HEAD
          saveAuth( result?.data?.token);
>>>>>>> 1df81466 (module auth and regsister token done)
=======
          saveAuth( result?.data?.token,{ nom: result?.data?.nom, prenom: result?.data?.prenom,full_name:result?.data?.full_name});
>>>>>>> 3179387e (add feature chat module)
          resetNavigation( ROUTES.HomeScreen);
  
        } else {
          // Optionally, you can handle the login failure in a way that makes sense for your application
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          console.log('%cindex.tsx line:85 dataset', 'color: #007acc;', dataset);
          // onSubmitSignUp(dataset);
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
>>>>>>> 1df81466 (module auth and regsister token done)
=======
=======
>>>>>>> 67e6b12f (module auth and regsister token done)
=======
          console.log('%cindex.tsx line:85 dataset', 'color: #007acc;', dataset);
          // onSubmitSignUp(dataset);
>>>>>>> df35d18d (- add WS login implementation)
<<<<<<< HEAD
>>>>>>> c662ef07 (- add WS login implementation)
=======
=======
>>>>>>> 30639760 (module auth and regsister token done)
>>>>>>> 67e6b12f (module auth and regsister token done)
        } else {
          console.error('Invalid checkedSegment value:', checkedSegment);
          // Optionally, you can handle the case where checkedSegment has an unexpected value
        }
      } catch (error: any) {
        console.error('Error during submission:', error?.message);
        // Optionally, you can handle other unexpected errors during submission
      }
    };
 
<<<<<<< HEAD
  
    const navigateToFPS = () => {
      handleNavigate({
        screen: ROUTES.ForgetPasswordScreen,
      });
    };
  
    return {
      onSubmit,
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 50fe44b2 (- add WS login implementation)
  
    const navigateToFPS = () => {
      handleNavigate({
        screen: ROUTES.ForgetPasswordScreen,
      });
    };
  
    return {
<<<<<<< HEAD
     
>>>>>>> ef87bf9c (Create module auth signIn)
=======
      onSubmit,
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
=======
=======
>>>>>>> df35d18d (- add WS login implementation)
>>>>>>> c662ef07 (- add WS login implementation)
  
    const navigateToFPS = () => {
      handleNavigate({
        screen: ROUTES.ForgetPasswordScreen,
      });
    };
  
    return {
<<<<<<< HEAD
     
>>>>>>> 69415541 (Create module auth signIn)
<<<<<<< HEAD
>>>>>>> 54475f41 (Create module auth signIn)
=======
=======
      onSubmit,
>>>>>>> df35d18d (- add WS login implementation)
>>>>>>> c662ef07 (- add WS login implementation)
      handleSegment,
      checkedSegment,
      defaultValues,
      gender,
      pushMail, setPushMail, accessData, setAccessData,
      navigateToFPS,
    };
  };
  export default useSignInController;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4cdec91b (first unit project)
=======
>>>>>>> 54475f41 (Create module auth signIn)
  
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
<<<<<<< HEAD
>>>>>>> ab93aef2 (first unit project)
=======
  
>>>>>>> ef87bf9c (Create module auth signIn)
=======
>>>>>>> e6aa837d (first unit project)
<<<<<<< HEAD
>>>>>>> 4cdec91b (first unit project)
=======
=======
  
>>>>>>> 69415541 (Create module auth signIn)
>>>>>>> 54475f41 (Create module auth signIn)
