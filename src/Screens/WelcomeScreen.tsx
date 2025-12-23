import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../theme/colors";
import Dot from "../components/Dot";

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Dot value="6" style={{ top: 40, left: 30 }} />
        <Dot value="1" style={{ top: 100, left: 100 }} />
        <Dot value="2" style={{ top: 145, left: 120 }} />
        <Dot value="3" style={{ top: 185, left: 160 }} />
        <Dot value="4" style={{ top: 225, left: 200 }} />
        <Dot value="5" style={{ top: 265, left: 240 }} />
      </View>

      <Text style={styles.title}>Welcome to PopX</Text>
      <Text style={styles.sub}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </Text>

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.primaryText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.secondaryText}>
          Already Registered? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  box: { height: 350, borderWidth: 1, borderColor: "#EEE" },
  title: { fontSize: 26, fontWeight: "700", marginTop: 20 },
  sub: { color: COLORS.subText, marginVertical: 10 },
  primaryBtn: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  primaryText: { color: "#fff", textAlign: "center", fontWeight: "600" },
  secondaryBtn: {
    backgroundColor: COLORS.lightPurple,
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  secondaryText: { textAlign: "center", color: COLORS.primary },
});
