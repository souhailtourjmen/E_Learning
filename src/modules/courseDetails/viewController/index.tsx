import React, {
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
};
export default useCourseDetailsViewController;
