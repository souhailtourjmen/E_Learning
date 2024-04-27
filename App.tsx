<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ab93aef2 (first unit project)
=======
>>>>>>> 38206cac (- add ui kitten)
=======
=======

>>>>>>> e6aa837d (first unit project)
>>>>>>> 4cdec91b (first unit project)
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// import {GestureHandlerRootView} from 'react-native-gesture-handler';

import { Provider } from "react-redux";
import { useColorScheme } from "./src/hooks";
import { store } from "./src/store";
import Navigation from "./src/navigation";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4cdec91b (first unit project)
=======
>>>>>>> 68f5f074 (- ADD element in screen home)
import { ColorSchemeName, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "./custom-theme.json";
import { COLORS } from "./src/constant";
function App(): JSX.Element {
  const colorScheme: NonNullable<ColorSchemeName> = useColorScheme();
  const defaultmode: any = colorScheme === "dark" ? eva.dark : eva.light;
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ApplicationProvider {...eva} theme={{ ...defaultmode, ...theme }}>
            <StatusBar
              animated={true}
              backgroundColor={COLORS.primary}
              showHideTransition={'slide'}
             
            />
            <Navigation colorScheme={colorScheme} />
          </ApplicationProvider>
        </GestureHandlerRootView>
=======
import { ColorSchemeName } from "react-native";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { ColorSchemeName, StatusBar } from "react-native";
>>>>>>> 0dd5df8f (- ADD element in screen home)
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "./custom-theme.json";
import { COLORS } from "./src/constant";
function App(): JSX.Element {
  const colorScheme: NonNullable<ColorSchemeName> = useColorScheme();
  const defaultmode: any = colorScheme === "dark" ? eva.dark : eva.light;
  return (
    <SafeAreaProvider>
      <Provider store={store}>
<<<<<<< HEAD
        <Navigation colorScheme={colorScheme} />
>>>>>>> ab93aef2 (first unit project)
=======
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ApplicationProvider {...eva} theme={{ ...defaultmode, ...theme }}>
            <StatusBar
              animated={true}
              backgroundColor={COLORS.primary}
              showHideTransition={'slide'}
             
            />
            <Navigation colorScheme={colorScheme} />
          </ApplicationProvider>
        </GestureHandlerRootView>
>>>>>>> 38206cac (- add ui kitten)
=======
=======
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import {default as theme} from './custom-theme.json';
>>>>>>> 214ba539 (- add ui kitten)
=======
=======
import { ColorSchemeName, StatusBar } from "react-native";
>>>>>>> 5bdf0af8 (- ADD element in screen home)
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "./custom-theme.json";
import { COLORS } from "./src/constant";
>>>>>>> 68f5f074 (- ADD element in screen home)
function App(): JSX.Element {
  const colorScheme: NonNullable<ColorSchemeName> = useColorScheme();
  const defaultmode: any = colorScheme === "dark" ? eva.dark : eva.light;
  return (
    <SafeAreaProvider>
      <Provider store={store}>
<<<<<<< HEAD
        <Navigation colorScheme={colorScheme} />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e6aa837d (first unit project)
>>>>>>> 4cdec91b (first unit project)
=======
>>>>>>> 214ba539 (- add ui kitten)
=======
=======
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ApplicationProvider {...eva} theme={{ ...defaultmode, ...theme }}>
            <StatusBar
              animated={true}
              backgroundColor={COLORS.primary}
              showHideTransition={'slide'}
             
            />
            <Navigation colorScheme={colorScheme} />
          </ApplicationProvider>
        </GestureHandlerRootView>
>>>>>>> 5bdf0af8 (- ADD element in screen home)
>>>>>>> 68f5f074 (- ADD element in screen home)
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
