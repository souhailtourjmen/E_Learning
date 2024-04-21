import React, {
    Dispatch,
    SetStateAction,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';


const useForgetPasswordModels = () => {
    const [emailSent, setEmailSent] = useState(false)

    return { emailSent, setEmailSent };
};
export default useForgetPasswordModels;
