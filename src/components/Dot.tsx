import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Dot({ value, style }: any) {
  return (
    <View style={[styles.dot, style]}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#F5B400",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
