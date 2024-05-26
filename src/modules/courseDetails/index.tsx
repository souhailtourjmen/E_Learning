import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { View, useWindowDimensions } from "react-native";
import Video, { VideoRef } from "react-native-video";
import { styles } from "./styles";
import { Layout, Spinner } from "@ui-kitten/components";
import { Text } from "../../components";
import RenderIcon from "../../components/renderIcon";
import { COLORS } from "../../constant";
import MoreLessText from "../../components/moreLessText";
import useCourseDetailsViewModels from "./viewModel";
import useCourseDetailsViewController from "./viewController";
import { ListVideos } from "./component";
import CourseDetailsValueProvider from "./context";
import mediaData from "../../mockData/mediaData";
type CourseDetailsProps = {};

const CourseDetails = (): ReactElement => {
  const { course, handleChargeVideo, sourceVideo,handleEnd } =
    useCourseDetailsViewController();
    console.log('\x1b[34m%s\x1b[0m', 'src/modules/courseDetails/index.tsx:28 course', course);
  const videoRef = useRef<VideoRef>(null);
  const { height, width } = useWindowDimensions();
  const _renderImages = useMemo(() => {
    if (sourceVideo?.sources) {
      return (
        <Video
          source={{
            uri: sourceVideo.sources,
          }}
          ref={videoRef}
          controls
          onLoad={() => <Spinner />}
          style={styles.containerVideo}
          onEnd={()=>handleEnd({videoId:sourceVideo.id!,courseId:course.id})}
        />
      );
    }
    return null;
  }, [sourceVideo,]);

  const _renderTtile = useMemo(() => {
    if (sourceVideo)
      return (
        <Text category="h5" style={{}}>
          {sourceVideo?.title}
        </Text>
      );
    return null;
  }, [sourceVideo]);
  const _renderDescription = useMemo(() => {
    if (sourceVideo)
      return (
        <MoreLessText children={sourceVideo?.description} numberOfLines={3} />
      );
    return null;
  }, [sourceVideo]);

  return (
    <CourseDetailsValueProvider palyList={mediaData} handleChargeVideo={handleChargeVideo}>
      <View style={{ height, width }}>
        <View style={{ height, width }}>
          {_renderImages}
          <View style={styles.containerDetails}>
            <View style={styles.detailsInfo}>
              {_renderTtile}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "30%",
                    marginTop: "2%",
                  }}
                >
                  <RenderIcon name="clock" sizeIcon={25} />
                  <View style={{ padding: "2%" }}>
                    <Text category="label">Total Diration</Text>
                    <Text style={{ color: COLORS.primary }} category="h6">
                      5:30 hr
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "30%",
                    marginTop: "2%",
                  }}
                >
                  <RenderIcon name="clock" sizeIcon={25} />
                  <View style={{ padding: "2%" }}>
                    <Text category="label">Total Students</Text>
                    <Text style={{ color: COLORS.primary }} category="h6">
                      300 Students
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ marginBottom: "5%" }}>
                <View style={{ width: "95%" }}>{_renderDescription}</View>
              </View>
              <View style={{ marginBottom: "10%" }}>
                <View style={{ width: "100%" }}>
                  <ListVideos />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </CourseDetailsValueProvider>
  );
};

export default CourseDetails;
