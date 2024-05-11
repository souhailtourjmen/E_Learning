import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
<<<<<<< HEAD
<<<<<<< HEAD
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

type CourseDetailsProps = {};

const CourseDetails = (): ReactElement => {
  const { course, handleChargeVideo, sourceVideo,handleEnd,mediaData,progression } =
    useCourseDetailsViewController();
  const videoRef = useRef<VideoRef>(null);
  const { height, width } = useWindowDimensions();
  const _renderImages = useMemo(() => {
    if (sourceVideo?.url) {
      return (
        <Video
          source={{
            uri: sourceVideo.url,
=======
import { Platform, StyleSheet, View, useWindowDimensions } from "react-native";
=======
import { View, useWindowDimensions } from "react-native";
>>>>>>> 97ed279c (- add dynamic screen details)
import Video, { VideoRef } from "react-native-video";
import { styles } from "./styles";
import { Layout, Spinner } from "@ui-kitten/components";
import { FlatList, Text } from "../../components";
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
  const { course, handleChargeVideo, sourceVideo } =
    useCourseDetailsViewController();
  const videoRef = useRef<VideoRef>(null);
  const { height, width } = useWindowDimensions();
  const _renderImages = useMemo(() => {
    if (sourceVideo?.sources) {
      return (
        <Video
          source={{
<<<<<<< HEAD
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
>>>>>>> 4005439c (add Desing Screen course details)
=======
            uri: sourceVideo.sources,
>>>>>>> 97ed279c (- add dynamic screen details)
          }}
          ref={videoRef}
          controls
          onLoad={() => <Spinner />}
          style={styles.containerVideo}
<<<<<<< HEAD
          onEnd={()=>handleEnd({videoId:sourceVideo?._id!,courseId:course?._id})}
        />
      );
    }
    return null;
  }, [sourceVideo,course]);

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
    <CourseDetailsValueProvider palyList={mediaData}progression={progression} handleChargeVideo={handleChargeVideo}>
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
=======
        />
      );
    }
    return null;
  }, [sourceVideo]);

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
<<<<<<< HEAD
            </View>
            <View style={{ marginBottom: "10%" }}>
              <View style={{ width: "95%" }}>
                <MoreLessText
                  children={`By the end of this project, you will learn how to create an Excel Spreadsheet by using a free version of Microsoft Office Excel.  

                Excel is a spreadsheet that works like a database. It consists of individual cells that can be used to build functions, formulas, tables, and graphs that easily organize and analyze large amounts of information and data. Excel is organized into rows (represented by numbers) and columns (represented by letters) that contain your information. This format allows you to present large amounts of information and data in a concise and easy to follow format. Microsoft Excel is the most widely used software within the business community. Whether it is bankers or accountants or business analysts or marketing professionals or scientists or entrepreneurs, almost all professionals use Excel on a consistent basis. 
                
                You will learn what an Excel Spreadsheet is, why we use it and the most important keyboard shortcuts, functions, and basic formulas.`}
                  numberOfLines={2}
                />
>>>>>>> 4005439c (add Desing Screen course details)
=======
              <View style={{ marginBottom: "10%" }}>
                <View style={{ width: "100%" }}>
                  <ListVideos />
                </View>
>>>>>>> 97ed279c (- add dynamic screen details)
              </View>
            </View>
          </View>
        </View>
      </View>
<<<<<<< HEAD
<<<<<<< HEAD
    </CourseDetailsValueProvider>
=======
    </View>
>>>>>>> 4005439c (add Desing Screen course details)
=======
    </CourseDetailsValueProvider>
>>>>>>> 97ed279c (- add dynamic screen details)
  );
};

export default CourseDetails;
