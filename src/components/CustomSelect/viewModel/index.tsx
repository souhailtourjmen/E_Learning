import React, {
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
useMemo
} from 'react';
const useCustomSelectViewModels = () => {
const values = useMemo(()=>{return {
} },[])
return values;
};
export default useCustomSelectViewModels;