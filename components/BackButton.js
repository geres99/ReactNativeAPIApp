import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

let BackButton = () => {
  return (
    <View>
      <Svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="20" cy="20" r="19.5" stroke="#F0F2F5" />
      </Svg>
      <View style={styles.svgMargin}>
        <Svg
          width="9"
          height="18"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M6 11L0.999999 6L6 1"
            stroke="#147865"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  svgMargin: {
    position: "absolute",
    top: 11,
    left: 14,
  },
});

export default BackButton;
