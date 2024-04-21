import { useNavigation } from '@react-navigation/native';
import useForgetPasswordModels from '../viewModel';

const useForgetPasswordController = () => {
    const { emailSent, setEmailSent } = useForgetPasswordModels();
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleForgetPassword = async (data: any) => {
        try {
            // const result = await ForgetPassword(data);
            
            setEmailSent(true)

        } catch (error: any) {
            console.warn('Error during submission:', error?.message);
        }
    };

    return { handleGoBack, handleForgetPassword, emailSent, isLoading:false };
};
export default useForgetPasswordController;
