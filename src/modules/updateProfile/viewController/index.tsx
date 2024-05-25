import React, { useCallback } from 'react';
import useNavigationController from '../../../navigation/viewController';
import useUpdateProfileModels from '../viewModel';
import { DefaultValues, UpdateProfileCredentials } from '../../../types';
import { setCredentials } from '../../../store/slices';
import { useAppDispatch } from '../../../hooks/useStore';
import { ROUTES } from '../../../constant';
import { useUpdateProfileMutation } from '../../../store/services';

const useUpdateProfileController = () => {
  const { handleNavigate,HandleBack } = useNavigationController();

  const [updateProfile,{isLoading,isSucess}]=useUpdateProfileMutation();


  const handleUpdateProfile = async (data: DefaultValues) => {
    try {
      const result = await updateProfile(data)
     if(result?.data){
      HandleBack()
     }
    } catch (error: any) {
      console.warn('Error during submission:', error?.message);
      // Optionally, you can handle other unexpected errors during submission
    }
  };

  return {
    handleUpdateProfile,
    HandleBack
  };
};
export default useUpdateProfileController;
