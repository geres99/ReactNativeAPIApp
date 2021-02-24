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

export default function App() {
  let [posts, setPosts] = React.useState([]);
  let [fontsLoaded, setFontsLoaded] = React.useState(false);

  let windowWidth = Dimensions.get("window").width;
  let windowHeight = Dimensions.get("window").height;

  async function getFonts() {
    await fetchData();
    await Font.loadAsync({
      "Gilroy-Light": require("./assets/Fonts/Gilroy-Light.otf"),
      "Gilroy-ExtraBold": require("./assets/Fonts/Gilroy-ExtraBold.otf"),
    });
    setFontsLoaded(true);
  }

  let textTooLong = (text) => {
    if (text.length > 100) {
      for (let i = 100; i < text.length; i++) {
        if (text[i] === " ") {
          return text.substring(0, i) + "...";
        }
      }
    } else {
      return text;
    }
    return text;
  };

  async function fetchData() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let responseJson = await response.json();
      console.log(responseJson);
      setPosts(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text>Hello</Text>
            {posts.map((post) => (
              <View key={post.id} style={styles.postStyle}>
                <View style={[styles.column, styles.grow]}>
                  <Text style={styles.postTitleStyle}>{post.title}</Text>
                  <Text style={styles.postBodyStyle}>
                    {textTooLong(post.body)}
                  </Text>
                </View>
                <View style={[styles.column, styles.center]}>
                  <View style={[styles.row, styles.nextButton]}>
                    <View style={styles.postButtonStyle}>
                      <Svg
                        style={styles.arrowStyle}
                        width="5"
                        height="10"
                        viewBox="0 0 5 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <Path
                          d="M0.875 1.625L4.25 5L0.875 8.375"
                          stroke="#466BC9"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </Svg>
                    </View>
                  </View>
                </View>
              </View>
            ))}
            <Button title="Fetch" onPress={fetchData}></Button>
          </ScrollView>
        </SafeAreaView>
      </NavigationContainer>
    );
  } else {
    return <AppLoading start={getFonts()} />;
  }
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
