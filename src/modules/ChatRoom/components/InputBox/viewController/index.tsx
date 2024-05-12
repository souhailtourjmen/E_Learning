import React, {
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
useMemo
} from 'react';
import useInputBoxViewModels from '../viewModel';
import { useSendMessageMutation } from '../../../../../store/services';
const useInputBoxViewController = () => {
    const [sendMessage, {isLoading}]= useSendMessageMutation()
    const {setMessage,message,user}=useInputBoxViewModels();
    const onSendPress = useCallback( async (message:string) => {
        try {
          if (message) {
           await sendMessage({nom:user.nom,prenom:user.prenom,contenu:message})
          }
        } catch (e) {
          console.log(e);
        }
    
        setMessage('');
      },[setMessage,message,sendMessage]);
const values = useMemo(()=>{return {
    setMessage,message,user,
    onSendPress
} },[setMessage,message,user,onSendPress])
return values;
};
export default useInputBoxViewController;