<<<<<<< HEAD
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
=======
import React, { useId } from "react";
>>>>>>> 50fe44b2 (- add WS login implementation)
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ARRAYROUTES } from "./config";
import { ROUTES } from "../constant";
import { CustomHeader } from "../components";
import { ScreenCourseDetails } from "../screens";

const Stack = createNativeStackNavigator();
export const RootNavigator = () => {
  const idStack=useId()
  return (
    <Stack.Navigator
<<<<<<< HEAD
<<<<<<< HEAD
      initialRouteName={ROUTES.INTRO}
>>>>>>> ab93aef2 (first unit project)
=======
      initialRouteName={ROUTES.ONBOARDING}
>>>>>>> 5c6f7ff1 (- add new screen onbording)
=======
      initialRouteName={ROUTES.ONBOARDING}
>>>>>>> 50fe44b2 (- add WS login implementation)
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      {ARRAYROUTES?.map((item, index) => {
        return (
          <Stack.Screen
<<<<<<< HEAD
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
=======
            key={idStack}
>>>>>>> 50fe44b2 (- add WS login implementation)
            name={item.label}
            component={item.component}
            options={item.options}
          />
        );
      })}
<<<<<<< HEAD
>>>>>>> ab93aef2 (first unit project)
=======
       <Stack.Screen
            key={idStack}
            name={ROUTES.CourseDetails}
            component={ScreenCourseDetails}
            options={({ navigation }) => ({
              header: () => (
                <CustomHeader navigation={navigation} title={ROUTES.CourseDetails}  />
              ),
            })}
          />
>>>>>>> 50fe44b2 (- add WS login implementation)
    </Stack.Navigator>
  );
};
