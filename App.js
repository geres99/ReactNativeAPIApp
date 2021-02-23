import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";

export default function App() {
  let [posts, setPosts] = React.useState([]);

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Hello</Text>
        {posts.map((post) => (
          <View key={post.id} style={styles.postStyle}>
            <View style={[styles.column, styles.grow]}>
              <Text style={styles.postTitleStyle}>{post.title}</Text>
              <Text style={styles.postBodyStyle}>{textTooLong(post.body)}</Text>
            </View>
            <View style={[styles.column, styles.center]}>
              <View style={[styles.row, styles.nextButton]}>
                <View style={styles.postButtonStyle}>
                  <Image
                    source={require("./assets/arrow-point-to-right.png")}
                    style={styles.arrowStyle}
                  />
                </View>
              </View>
            </View>
          </View>
        ))}
        <Button title="Fetch" onPress={fetchData}></Button>
      </ScrollView>
    </SafeAreaView>
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
    color: "#001524",
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 4,
  },
  postBodyStyle: {
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
    marginLeft: 7.5,
    marginTop: 6.5,
    height: 8,
    width: 8,
  },
});
