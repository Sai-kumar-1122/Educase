import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../theme/colors";

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signin to your PopX account</Text>
      <Text style={styles.sub}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </Text>

      <TextInput placeholder="Email address" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.replace("Profile")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "700" },
  sub: { color: COLORS.subText, marginVertical: 10 },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 12,
    borderRadius: 6,
    marginVertical: 10,
  },
  loginBtn: {
    backgroundColor: "#CCC",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  loginText: { textAlign: "center", color: "#fff" },
});
