import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FlatList, GoBackButton, Loader, Text, View } from "../../components";
import { styles } from "./styles";
<<<<<<< HEAD
<<<<<<< HEAD
import { COLORS, FONTFAMILY, TEXT } from "../../constant";
=======
import { FONTFAMILY, TEXT } from "../../constant";
>>>>>>> f69bf6ed (- add design progression)
=======
import { COLORS, FONTFAMILY, TEXT } from "../../constant";
>>>>>>> 413519c4 (- fixed Progression)
import i18next from "i18next";
import useProgressionViewModels from "./viewModel";
import { Platform } from "react-native";
import { RenderItem } from "./component";

type ProgressionProps = {};

const Progression = ({}: ProgressionProps): ReactElement => {
  const { courses, isLoading } = useProgressionViewModels();
  const _renderTrender = useMemo(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    if (Array.isArray(courses)) {
=======
    if (courses) {
>>>>>>> f69bf6ed (- add design progression)
=======
    if (Array.isArray(courses)) {
>>>>>>> 413519c4 (- fixed Progression)
      return (
        <View style={[]}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={courses}
            contentContainerStyle={{
              paddingLeft: 0,
              paddingRight: 20,
              marginBottom: Platform.OS === "ios" ? 5 : 0,
            }}
            ListEmptyComponent={() => (
              <View style={{ alignSelf: "center", marginVertical: "90%" }}>
                <Text>{i18next.t(TEXT.message.AlertCourse)}</Text>
              </View>
            )}
            renderItem={({ item }) => <RenderItem item={item} />}
            keyExtractor={(item, index) => `${index.toString()}`}
          />
        </View>
      );
    }
    return <Loader />;
  }, [courses]);
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <View>
      <View style={styles.titleContainer}>
        <GoBackButton
          style={{
            borderRadius: 50,
            width: 30,
            height: 30,
            paddingHorizontal: "2%",
            paddingVertical: "2%",
            alignSelf: "center",
            backgroundColor: COLORS.lightGray,
          }}
=======
    <View >
      <View style={styles.titleContainer}>
        <GoBackButton
          style={{ borderRadius: 50, width: 40, height: 40, padding: 10 }}
>>>>>>> f69bf6ed (- add design progression)
=======
    <View>
      <View style={styles.titleContainer}>
        <GoBackButton
          style={{
            borderRadius: 50,
            width: 30,
            height: 30,
            paddingHorizontal: "2%",
            paddingVertical: "2%",
            alignSelf: "center",
            backgroundColor: COLORS.lightGray,
          }}
>>>>>>> 413519c4 (- fixed Progression)
        />
        <View style={styles.titleTextContainer}>
          <Text category="h5" style={{ fontFamily: FONTFAMILY?.poppins_bold }}>
            {i18next.t(TEXT.ROUTES.myCourse)}
          </Text>
        </View>
      </View>
      {_renderTrender}
    </View>
  );
};

export default memo(Progression);
