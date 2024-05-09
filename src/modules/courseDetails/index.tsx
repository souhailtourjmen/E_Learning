import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Platform, StyleSheet, View, useWindowDimensions } from "react-native";
import Video, { VideoRef } from "react-native-video";
import { styles } from "./styles";
import { Spinner } from "@ui-kitten/components";
import { FlatList, Text } from "../../components";
import RenderIcon from "../../components/renderIcon";
import { COLORS } from "../../constant";
import MoreLessText from "../../components/moreLessText";
import mediaData from "../../mockData/mediaData";
type CourseDetailsProps = {};

const CourseDetails = (): ReactElement => {
  const videoRef = useRef<VideoRef>(null);
  const { height, width } = useWindowDimensions();
  
  
  return (
    <View style={{ height, width }}>
      <View style={{ height, width }}>
        <Video
          source={{
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
          }}
          ref={videoRef}
          controls
          onLoad={() => <Spinner />}
          style={styles.containerVideo}
        />
        <View style={styles.containerDetails}>
          <Text category="h5" style={{}}>
            Camera Settings for Beginner
          </Text>
          <View style={styles.detailsInfo}>
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
            <View style={{ marginBottom: "10%" }}>
              <View style={{ width: "95%" }}>
                <MoreLessText
                  children={`By the end of this project, you will learn how to create an Excel Spreadsheet by using a free version of Microsoft Office Excel.  

                Excel is a spreadsheet that works like a database. It consists of individual cells that can be used to build functions, formulas, tables, and graphs that easily organize and analyze large amounts of information and data. Excel is organized into rows (represented by numbers) and columns (represented by letters) that contain your information. This format allows you to present large amounts of information and data in a concise and easy to follow format. Microsoft Excel is the most widely used software within the business community. Whether it is bankers or accountants or business analysts or marketing professionals or scientists or entrepreneurs, almost all professionals use Excel on a consistent basis. 
                
                You will learn what an Excel Spreadsheet is, why we use it and the most important keyboard shortcuts, functions, and basic formulas.`}
                  numberOfLines={2}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CourseDetails;
