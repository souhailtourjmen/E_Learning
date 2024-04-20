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
import { ColorSchemeName } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import {default as theme} from './custom-theme.json';
function App(): JSX.Element {
  const colorScheme: NonNullable<ColorSchemeName> = useColorScheme();
  const defaultmode: any = colorScheme === "dark" ? eva.dark : eva.light;
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ApplicationProvider {...eva} theme={{ ...defaultmode, ...theme }}>
            <Navigation colorScheme={colorScheme} />
          </ApplicationProvider>
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
