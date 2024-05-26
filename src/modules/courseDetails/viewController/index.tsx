import React, {
<<<<<<< HEAD
<<<<<<< HEAD
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import useCourseDetailsViewModels from "../viewModel";
import { Video } from "../../../types";
import { useAddVideoMutation } from "../../../store/services";
import { Alert } from "react-native";
import { AlertC } from "../../../helper/Alert";
const useCourseDetailsViewController = () => {
  const { course, sourceVideo, setSourceVideo,refetch, mediaData,progression } =
    useCourseDetailsViewModels();
  const [addVideo, { isLoading }] = useAddVideoMutation();
  const handleChargeVideo = useCallback(
    (video: Video) => {
      if (video && video?.url) {
        setSourceVideo({
          _id: video?._id,
          description: video.description,
          url: video?.url,
          subtitle: video?.subtitle||"",
          thumb: video?.thumb||"",
          title: video?.title||"",
        });
      }
    },
    [setSourceVideo]
  );
  const handleEnd = useCallback(
    async ({ videoId, courseId }: { videoId: string; courseId: string }) => {
      if (videoId && courseId) {
        await addVideo({ videoId, courseId });
      }
    },
    [addVideo]
  );
  const values = useMemo(() => {
    return {
      course,
      sourceVideo,
      handleChargeVideo,
      mediaData,
      handleEnd,
      progression
    };
  }, [course, sourceVideo, handleChargeVideo, mediaData, handleEnd,progression]);
  return values;
};
export default useCourseDetailsViewController;
=======
=======
>>>>>>> f69bf6ed (- add design progression)
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
useMemo
} from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
import useCourseDetailsViewModels from '../viewModel';
import { Video } from '../../../types';
>>>>>>> 343adf8e (- add dynamic screen details)
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
<<<<<<< HEAD
} },[])
>>>>>>> feaa7651 (add Desing Screen course details)
=======
    course,sourceVideo, handleChargeVideo,mediaData 
} },[course,sourceVideo, handleChargeVideo,mediaData ])
>>>>>>> 343adf8e (- add dynamic screen details)
return values;
=======
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import useCourseDetailsViewModels from "../viewModel";
import { Video } from "../../../types";
import { useAddVideoMutation } from "../../../store/services";
const useCourseDetailsViewController = () => {
  const { course, sourceVideo, setSourceVideo, mediaData } =
    useCourseDetailsViewModels();
  const [addVideo, { isLoading }] = useAddVideoMutation();
  const handleChargeVideo = useCallback(
    (video: Video) => {
      if (video && video?.sources) {
        setSourceVideo({
          id: video.id,
          description: video.description,
          sources: video?.sources,
          subtitle: video.subtitle,
          thumb: video.thumb,
          title: video.title,
        });
      }
    },
    [setSourceVideo]
  );
  const handleEnd = useCallback(
    async ({ videoId, courseId }: { videoId: string; courseId: string }) => {
      if (videoId && courseId) {
        await addVideo({ videoId, courseId });
      }
    },
    [addVideo]
  );
  const values = useMemo(() => {
    return {
      course,
      sourceVideo,
      handleChargeVideo,
      mediaData,
      handleEnd,
    };
  }, [course, sourceVideo, handleChargeVideo, mediaData, handleEnd]);
  return values;
>>>>>>> 1d913c27 (- add design progression)
};
export default useCourseDetailsViewController;
<<<<<<< HEAD
>>>>>>> 4005439c (add Desing Screen course details)
=======
>>>>>>> f69bf6ed (- add design progression)
