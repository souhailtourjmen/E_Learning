import { Layout, Spinner } from "@ui-kitten/components";
import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import BigCardCourse from "../../components/bigCardCourse";
import useFilterModuleViewModels from "./viewModel";
import { Text } from "../../components";

type FilterModuleProps = {};

const FilterModule = ({}: FilterModuleProps): ReactElement => {
  const { height, width } = useWindowDimensions();
  const { courses } = useFilterModuleViewModels();
  const _renderTrender = useMemo(() => {
    if (courses) {
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
            renderItem={({ item }) => (
              <BigCardCourse item={item} widthHard="100%" />
            )}
            keyExtractor={(item, index) => `${index.toString()}`}
          />
        </View>
      );
    }
    return <Spinner />;
  }, [courses]);
  return <View>{_renderTrender}</View>;
};

export default memo(FilterModule);
