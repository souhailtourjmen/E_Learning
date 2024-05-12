import React, {
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
useMemo
} from 'react';
import { useAppSelector } from '../../../../../hooks/useStore';
import { selectUser } from '../../../../../store/slices/auth';
const useInputBoxViewModels = () => {
    const [message, setMessage] = useState<string>('');
    const user=useAppSelector(selectUser);
const values = useMemo(()=>{return {
    message, setMessage,user
} },[message, setMessage,user])
return values;
};
export default useInputBoxViewModels;