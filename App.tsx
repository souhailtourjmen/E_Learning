
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
function App(): JSX.Element {
  const colorScheme: NonNullable<ColorSchemeName> = useColorScheme();

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation colorScheme={colorScheme} />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
