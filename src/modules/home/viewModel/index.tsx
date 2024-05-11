import React, {
Dispatch,
SetStateAction,
useCallback,
useEffect,
useMemo,
useState,
} from 'react';
import { useFetchAllCourseQuery } from '../../../store/services';
const useHomeViewModels = () => {
    const {data,isLoading}=useFetchAllCourseQuery();
    const values=useMemo(()=>{
        return{courses:data?.cours}
    },[data])
return values;
};
export default useHomeViewModels;