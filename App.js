import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function App() {
  let [posts, setPosts] = React.useState([]);

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
              <Text style={styles.postBodyStyle}>{post.body}</Text>
            </View>
            <View style={[styles.column, styles.center]}>
              <Text style={styles.postButtonStyle}>Button</Text>
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
  grow: {
    flex: 1,
    width: 0,
  },
  center: {
    justifyContent: "center",
  },
  postButtonStyle: {
    marginHorizontal: 25.5,
    flexDirection: "column",
  },
});
