import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import NewsDetails from "../screens/NewsDetails";
import BackButton from "./BackButton";

const Stack = createStackNavigator();

let HomeScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="News List"
      component={Home}
      options={{
        title: "News list",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#FFFFFF",
          height: 100,
        },
        headerTintColor: "#001524",
        headerTitleStyle: {
          fontFamily: "Gilroy-Light",
          fontSize: 16,
          lineHeight: 24,
          fontWeight: "bold",
        },
      }}
    />
    <Stack.Screen
      name="News Details"
      component={NewsDetails}
      options={{
        title: "News details",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#FFFFFF",
          height: 100,
        },
        headerTintColor: "#001524",
        headerTitleStyle: {
          fontFamily: "Gilroy-Light",
          fontSize: 16,
          lineHeight: 24,
          fontWeight: "bold",
        },
        headerBackImage: () => <BackButton />,
      }}
    />
  </Stack.Navigator>
);

export default HomeScreen;
