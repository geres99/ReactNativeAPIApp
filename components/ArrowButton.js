import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

let ArrowButton = () => {
  return (
    <View>
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
  );
};

const styles = StyleSheet.create({
  arrowStyle: {
    backgroundColor: "#ECF0FA",
    marginLeft: 8.5,
    marginTop: 6,
  },
});

export default ArrowButton;
