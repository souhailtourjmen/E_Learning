import React, {
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
useMemo
} from 'react';
<<<<<<< HEAD
import { RenderItemProps } from '..';
const useRenderItemViewModels = ( item : any) => {
    // Assurez-vous que item, playList, et idCourse existent avant de les utiliser
const playListLength = item?.playList?.length ?? 0; // Nombre d'éléments dans playList, ou 0 s'il n'existe pas
const numeroVideo = item?.idCourse?.numeroVideo ?? 1; // numeroVideo, ou 1 pour éviter la division par zéro

// Calcule le pourcentage
const percentage = (playListLength / numeroVideo) * 100;

// Assurez-vous que le pourcentage est entre 0 et 100
const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
const values = useMemo(()=>{return {
    clampedPercentage
} },[clampedPercentage])
=======
const useRenderItemViewModels = () => {
const values = useMemo(()=>{return {
} },[])
>>>>>>> f69bf6ed (- add design progression)
return values;
};
export default useRenderItemViewModels;