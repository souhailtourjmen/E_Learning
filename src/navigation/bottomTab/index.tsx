import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ARRAYROUTES, BottomRoutes } from "../config";
import { useId } from "react";
import { Text, View } from "../../components/themes";
import RenderIcon from "../../components/renderIcon";
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {

    height: 60,
    background: "#fff",
  },
};
export function MyTabs() {
  const idStack = useId();
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {BottomRoutes?.map((item, index) => {
        return (
          <Tab.Screen
            key={idStack}
            name={item.label}
            component={item.component}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <RenderIcon
                      name={item.options.icon}
                      sizeIcon={24}
                      color={focused ? "#16247d" : "#111"}
                      solid={false}
                      disabled
                    />
                    <Text style={{ fontSize: 12, color: "#16247d" }}>
                      {item.label}
                    </Text>
                  </View>
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
