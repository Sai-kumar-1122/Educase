import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function ProfileScreen() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Settings</Text>

      <View style={styles.card}>
        <Image source={{ uri: "https://i.pravatar.cc/150" }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{user.fullName}</Text>
          <Text>{user.email}</Text>
          <Text>{user.phone}</Text>
          <Text>{user.company}</Text>
          <Text>{user.isAgency ? "Agency" : "Not an Agency"}</Text>
        </View>
      </View>

      <Text style={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur sadipscing elit. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: "700", marginBottom: 20 },
  card: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
  name: { fontWeight: "700" },
  desc: { marginTop: 20, color: "#666" },
});
