import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";

let NewsDetails = ({ route }) => {
  let [comments, setComments] = React.useState([]);
  let [commentsLoaded, setCommentsLoaded] = React.useState(false);
  let [commentMessage, setCommentMessage] = React.useState(
    "Here you can add your comment..."
  );

  async function postComment() {
    await fetch(
      "https://jsonplaceholder.typicode.com/posts/" +
        route.params.info.id +
        "/comments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: commentMessage,
        }),
      }
    ).then((data) => console.log(data.status));
    setCommentMessage("");
  }

  async function fetchCommentData() {
    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" +
          route.params.info.id +
          "/comments"
      );
      let responseJson = await response.json();
      setCommentsLoaded(true);
      setComments(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  if (commentsLoaded) {
    return (
      <ScrollView>
        <View style={styles.postStyle}>
          <Text style={styles.postTitleStyle}>{route.params.info.title}</Text>
          <Text style={styles.postBodyStyle}>{route.params.info.body}</Text>
        </View>
        <View>
          <Text style={styles.postCommentStyle}>Comments</Text>
          <TextInput
            style={styles.textInputStyle}
            value={commentMessage}
            onChange={(e) => {
              setCommentMessage(e.currentTarget.value);
            }}
            onFocus={() => {
              if (commentMessage === "Here you can add your comment...") {
                setCommentMessage("");
              }
            }}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              postComment();
            }}
          >
            <View style={styles.buttonStyle}>
              <View style={styles.row}>
                <Text style={styles.buttonTextStyle}>Add</Text>
              </View>
            </View>
          </TouchableOpacity>
          {comments.map((comment) => (
            <View
              key={comment.id}
              style={[styles.postStyle, styles.negativeMargin]}
            >
              <Text style={styles.commentNameStyle}>{comment.email}</Text>
              <Text style={styles.commentBodyStyle}>{comment.body}</Text>
            </View>
          ))}
          <View style={styles.pushDown}></View>
        </View>
      </ScrollView>
    );
  } else {
    return <AppLoading start={fetchCommentData()} />;
  }
};

const styles = StyleSheet.create({
  postStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 24,
    elevation: 2,
  },
  postTitleStyle: {
    fontFamily: "Gilroy-ExtraBold",
    fontSize: 20,
    lineHeight: 26,
    marginHorizontal: 24,
    marginTop: 32,
  },
  postBodyStyle: {
    fontFamily: "Gilroy-Light",
    fontSize: 14,
    lineHeight: 25,
    marginHorizontal: 24,
    marginTop: 12,
    marginBottom: 40,
  },
  postCommentStyle: {
    fontFamily: "Gilroy-Light",
    color: "#586976",
    marginHorizontal: 24,
    marginTop: 40,
  },
  textInputStyle: {
    height: 123,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 12,
    elevation: 2,
    fontFamily: "Gilroy-Light",
    fontSize: 14,
    lineHeight: 21,
    color: "#586976",
    paddingLeft: 20,
  },
  buttonStyle: {
    height: 48,
    backgroundColor: "#466BC9",
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 16,
    borderRadius: 8,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonTextStyle: {
    fontFamily: "Gilroy-Light",
    fontSize: 14,
    lineHeight: 21,
    color: "#FFFFFF",
  },
  negativeMargin: {
    marginTop: 8,
  },
  commentNameStyle: {
    fontFamily: "Gilroy-ExtraBold",
    fontSize: 14,
    lineHeight: 21,
    color: "#001524",
    marginHorizontal: 24,
    marginTop: 24,
  },
  commentBodyStyle: {
    fontFamily: "Gilroy-Light",
    fontSize: 14,
    lineHeight: 25,
    color: "#182F40",
    marginHorizontal: 24,
    marginTop: 4,
    marginBottom: 24,
  },
  pushDown: {
    height: 16,
  },
});

export default NewsDetails;
