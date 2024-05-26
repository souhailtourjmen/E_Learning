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
import { COLORS, FONTFAMILY, TEXT } from "../../constant";
import i18next from "i18next";
import useProgressionViewModels from "./viewModel";
import { Platform } from "react-native";
import { RenderItem } from "./component";

type ProgressionProps = {};

const Progression = ({}: ProgressionProps): ReactElement => {
  const { courses, isLoading } = useProgressionViewModels();
  const _renderTrender = useMemo(() => {
    if (Array.isArray(courses)) {
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
                <Text>Aucun cours trouvé pour ce niveau et cette matière.</Text>
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
