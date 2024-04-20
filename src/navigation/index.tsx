import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import React, { ReactElement } from "react";
import { ColorSchemeName } from "react-native";
import { RootNavigator } from "./rootNavigator";

type NavigationProps = {
  colorScheme: ColorSchemeName;
  isNewCustomer?: boolean;
  isAuthenticated?: boolean;
};

const Navigation = ({
  colorScheme,
  isNewCustomer = false,
  isAuthenticated = false,
}: NavigationProps): ReactElement => {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
