import React, {
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
useMemo
} from 'react';
import { useGetProgressionByMatriculeQuery } from '../../../store/services';
const useProgressionViewModels = () => {
    const {data,isLoading}=useGetProgressionByMatriculeQuery()
    console.log('\x1b[34m%s\x1b[0m', 'src/modules/progression/viewModel/index.tsx:12 data',JSON.stringify(data));
const values = useMemo(()=>{return {
    courses:data?.courses||[],
    isLoading
} },[data,isLoading])
return values;
};
export default useProgressionViewModels;