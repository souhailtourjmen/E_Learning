import React, {
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
useMemo
} from 'react';
import { useGetInfoProfileQuery } from '../../../store/services';
import { DefaultValues } from '../../../types';
const useUpdateProfileScreenViewModels = () => {
    const {data,isLoading:isFetchData}=useGetInfoProfileQuery();
  
    const [defaultValues, setDefaultValues] = useState<DefaultValues>();
  
    const unitDefaults =useCallback((values:DefaultValues) => {
      setDefaultValues(values)
    }, [data]);
    useEffect(() => {
        if(data){
          unitDefaults(data)
        }
    }, [data]);
    const values=useMemo(() => {return {defaultValues,isFetchData}},[defaultValues,isFetchData]);
  
    return values;
};
export default useUpdateProfileScreenViewModels;