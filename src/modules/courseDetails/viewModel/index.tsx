import React, {
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
