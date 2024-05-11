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
