import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

let PhotoContainer = (props) => {
  return (
    <View style={styles.photoShowStyle}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: props.photo,
        }}
      />
      <Text style={styles.imageTextStyle}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  photoShowStyle: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    elevation: 2,
  },
  imageStyle: {
    width: null,
    height: 100,
    flex: 1,
    flexShrink: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  imageTextStyle: {
    fontFamily: "Gilroy-Light",
    fontSize: 14,
    lineHeight: 21,
    color: "#001524",
    marginHorizontal: 4,
    marginVertical: 14,
  },
});

export default PhotoContainer;
