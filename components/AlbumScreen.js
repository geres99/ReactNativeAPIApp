import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Album from "../screens/Album";

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
