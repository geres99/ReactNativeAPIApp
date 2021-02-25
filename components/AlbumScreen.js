import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Album from "../screens/Album";
import NewsDetails from "../screens/NewsDetails";
import BackButton from "./BackButton";

const Stack = createStackNavigator();

let AlbumScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Album"
      component={Album}
      options={{
        title: "Albums",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#FFFFFF",
          height: 100,
        },
        headerTintColor: "#001524",
        headerTitleStyle: {
          fontSize: 16,
          lineHeight: 24,
        },
      }}
    />
  </Stack.Navigator>
);

export default AlbumScreen;
