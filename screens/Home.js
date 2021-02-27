import React from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ArrowButton from "../components/ArrowButton";

let Home = ({ navigation }) => {
  let [posts, setPosts] = React.useState([]);
  let [fontsLoaded, setFontsLoaded] = React.useState(false);

  async function getFonts() {
    await fetchData();
    await Font.loadAsync({
      "Gilroy-Light": require("../assets/Fonts/Gilroy-Light.otf"),
      "Gilroy-ExtraBold": require("../assets/Fonts/Gilroy-ExtraBold.otf"),
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
      setPosts(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  if (fontsLoaded) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.pushDown}></View>
        {posts.map((post) => (
          <View key={post.id} style={styles.postStyle}>
            <View style={[styles.column, styles.grow]}>
              <Text style={styles.postTitleStyle}>{post.title}</Text>
              <Text style={styles.postBodyStyle}>{textTooLong(post.body)}</Text>
            </View>
            <View style={[styles.column, styles.center]}>
              <View style={[styles.row, styles.nextButton]}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("News Details", { info: post });
                  }}
                >
                  <View style={styles.postButtonStyle}>
                    <ArrowButton />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  } else {
    return (
      <View>
        <AppLoading start={getFonts()} />
        <Text>Loading...</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
  },
  pushDown: {
    height: 16,
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
});

export default Home;
