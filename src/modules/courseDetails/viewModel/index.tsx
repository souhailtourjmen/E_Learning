import React, {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 97ed279c (- add dynamic screen details)
=======
>>>>>>> 9cfb1182 (add Desing Screen course details)
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import { useFetchCourseIdQuery } from "../../../store/services";
import { useRoute } from "@react-navigation/native";
import { Video } from "../../../types";
import mediaData from "../../../mockData/mediaData";
<<<<<<< HEAD
const useCourseDetailsViewModels = () => {
  const routes: any = useRoute()?.params;
  const [sourceVideo, setSourceVideo] = useState<Video | null>(null);
  const { data, isLoading,refetch } = useFetchCourseIdQuery(routes?.params?.id, {
    skip: !routes?.params?.id,
  });
  const handleUnitVideo = useCallback(
    (course: any) => {
      if (course && course?.videoUrl) {
        setSourceVideo({
          _id: course?.playList[0]?._id,
          description: course?.playList[0]?.description,
          url: course?.playList[0]?.url,
          subtitle: course?.playList[0]?.description,
          thumb: course?.playList[0]?.thumb,
          title: course?.playList[0]?.title,
        });
      }
    },
    [setSourceVideo]
  );

  useEffect(() => {
    handleUnitVideo(data?.cours);
  }, [data]);
  const values = useMemo(() => {
    return {
      course: data?.cours,
      sourceVideo,
      setSourceVideo,
      mediaData: data?.cours?.playList|| [],
      progression: data?.progression|| [""],
      refetch
    };
  }, [data, sourceVideo, setSourceVideo,refetch]);
  return values;
};
export default useCourseDetailsViewModels;
=======
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
useMemo
} from 'react';
=======
>>>>>>> 97ed279c (- add dynamic screen details)
const useCourseDetailsViewModels = () => {
  const routes: any = useRoute()?.params;
  const [sourceVideo, setSourceVideo] = useState<Video | null>(null);
  const { data, isLoading } = useFetchCourseIdQuery(routes?.params?.id, {
    skip: !routes?.params?.id,
  });
  const handleUnitVideo = useCallback(
    (course: any) => {
      if (course && course?.videoUrl) {
        setSourceVideo({
          description: mediaData[0]?.description,
          sources: course?.videoUrl,
          subtitle: mediaData[0]?.subtitle,
          thumb: mediaData[0]?.thumb,
          title: mediaData[0]?.title,
        });
      }
    },
    [setSourceVideo]
  );

  useEffect(() => {
    handleUnitVideo(data?.cours);
  }, [data, mediaData]);
  const values = useMemo(() => {
    return {
      course: data?.cours,
      sourceVideo,
      setSourceVideo,
      mediaData,
    };
  }, [data, sourceVideo, setSourceVideo, mediaData]);
  return values;
};
export default useCourseDetailsViewModels;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4005439c (add Desing Screen course details)
=======
>>>>>>> 97ed279c (- add dynamic screen details)
=======
=======
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
useMemo
} from 'react';
const useCourseDetailsViewModels = () => {
const values = useMemo(()=>{return {
} },[])
return values;
};
export default useCourseDetailsViewModels;
>>>>>>> feaa7651 (add Desing Screen course details)
>>>>>>> 9cfb1182 (add Desing Screen course details)
