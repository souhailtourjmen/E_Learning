import React, {
Dispatch,
SetStateAction,
useCallback,
useEffect,
useMemo,
useState,
} from 'react';
import { useAppSelector } from '../../../../../hooks/useStore';
import { selectUser } from '../../../../../store/slices/auth';
const useTopNavigationImageTitleShowcaseViewModels = () => {
    const [menuVisible, setMenuVisible] = React.useState(false);
    const user=useAppSelector(selectUser);
    const values=useMemo(()=>{return {user,menuVisible, setMenuVisible}},[user,menuVisible, setMenuVisible])
return values;
};
export default useTopNavigationImageTitleShowcaseViewModels;