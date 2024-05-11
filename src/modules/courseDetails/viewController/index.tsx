import React, {
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
useMemo
} from 'react';
import useCourseDetailsViewModels from '../viewModel';
import { Video } from '../../../types';
const useCourseDetailsViewController = () => {
    const { course,sourceVideo, setSourceVideo,mediaData } = useCourseDetailsViewModels();

    const handleChargeVideo=useCallback((video:Video)=>{
        if (video && video?.sources) {
            setSourceVideo({
              description: video.description,
              sources: video?.sources,
              subtitle: video.subtitle,
              thumb: video.thumb,
              title: video.title,
            });
          }
    },[setSourceVideo]);
const values = useMemo(()=>{return {
    course,sourceVideo, handleChargeVideo,mediaData 
} },[course,sourceVideo, handleChargeVideo,mediaData ])
return values;
};
export default useCourseDetailsViewController;