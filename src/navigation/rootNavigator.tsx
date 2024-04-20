<<<<<<< HEAD
import React, { useId } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ARRAYROUTES } from "./config";
import { ROUTES } from "../constant";
import { CustomHeader } from "../components";
import { ScreenCourseDetails } from "../screens";
import { MyTabs } from "./bottomTab";
import ScreenFilter from "../screens/screenFilter";

const Stack = createNativeStackNavigator();
export const RootNavigator = () => {
  const idStack=useId()
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.ONBOARDING}
=======
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ARRAYROUTES } from "./config";
import { ROUTES } from "../constant";

const Stack = createNativeStackNavigator();
export const RootNavigator = () => {
  return (
    <Stack.Navigator
<<<<<<< HEAD
      initialRouteName={ROUTES.INTRO}
>>>>>>> ab93aef2 (first unit project)
=======
      initialRouteName={ROUTES.ONBOARDING}
>>>>>>> 5c6f7ff1 (- add new screen onbording)
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      {ARRAYROUTES?.map((item, index) => {
        return (
          <Stack.Screen
<<<<<<< HEAD
            key={idStack}
            name={item.label}
            component={item.component}
            options={item.options}
          />
        );
      })}
       <Stack.Screen
            key={idStack}
            name={ROUTES.HomeScreen}
            component={MyTabs}
            options={{ headerShown: false}}
          />
       <Stack.Screen
            key={idStack}
            name={ROUTES.CourseDetails}
            component={ScreenCourseDetails}
            options={({ navigation }) => ({
              header: () => (
                <CustomHeader navigation={navigation}   />
              ),
            })}
          />
       <Stack.Screen
            key={idStack}
            name={ROUTES.COurseFilter}
            component={ScreenFilter}
            options={({ navigation }) => ({
              header: () => (
                <CustomHeader navigation={navigation}   />
              ),
            })}
          />
=======
            key={index?.toString()}
            name={item.label}
            component={item.component}
            options={{ headerShown: false }}
          />
        );
      })}
>>>>>>> ab93aef2 (first unit project)
    </Stack.Navigator>
  );
};
