import React, { ReactElement } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { STYLES } from "../../styles";
import { LayoutAnimated } from "../../layouts";
import { Progression } from "../../modules";

type propsProgressionScreen = {};
const ProgressionScreen = (): ReactElement => {
  return (
    <>
      <SafeAreaView style={STYLES.safeAreaBgBackground}>
        <LayoutAnimated>
          <Progression />
        </LayoutAnimated>
      </SafeAreaView>
    </>
  );
};
export default ProgressionScreen;
