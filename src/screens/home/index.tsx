import React, { ReactElement } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Home from "../../modules/home";
import { STYLES } from "../../styles";
import { LayoutAnimated } from "../../layouts";

type propsHomeScreen = {};
const HomeScreen = (): ReactElement => {
  return (
    <>
      <SafeAreaView style={STYLES.safeAreaBgBackground}>
        <LayoutAnimated>
          <Home />
        </LayoutAnimated>
      </SafeAreaView>
    </>
  );
};
export default HomeScreen;
