import React from "react";
import AppLoading from "expo-app-loading";
import Svg, { Path } from "react-native-svg";
import * as Font from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Album from "./screens/Album";
import NewsDetails from "./screens/NewsDetails";
import BackButton from "./components/BackButton";
import HomeScreen from "./components/HomeScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

let HomeScreens = () => (
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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Album" component={Album} />
      </Tab.Navigator>
      {/* <Stack.Navigator>
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
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
  },
  postStyle: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 8,
    elevation: 2,
  },
  postTitleStyle: {
    fontFamily: "Gilroy-Light",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.2,
    color: "#001524",
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 4,
  },
  postBodyStyle: {
    fontFamily: "Gilroy-Light",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.2,
    color: "#A0ABB3",
    marginLeft: 24,
    marginBottom: 24,
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  grow: {
    flex: 1,
    width: 0,
  },
  center: {
    justifyContent: "center",
  },
  nextButton: {
    marginHorizontal: 25.5,
  },
  postButtonStyle: {
    width: 21,
    height: 21,
    backgroundColor: "#ECF0FA",
    borderRadius: 50,
    flexDirection: "column",
  },
  arrowStyle: {
    backgroundColor: "#ECF0FA",
    marginLeft: 8.5,
    marginTop: 6,
  },
});
