import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../theme/colors";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

export default function RegisterScreen({ navigation }: any) {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState(true);

  const handleRegister = () => {
    dispatch(
      setUser({ fullName, phone, email, password, company, isAgency })
    );
    navigation.replace("Profile");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your PopX account</Text>

      <TextInput placeholder="Full Name" style={styles.input} value={fullName} onChangeText={setFullName} />
      <TextInput placeholder="Phone Number" style={styles.input} value={phone} onChangeText={setPhone} />
      <TextInput placeholder="Email Address" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput placeholder="Company Name" style={styles.input} value={company} onChangeText={setCompany} />

      <Text style={styles.label}>Are you an Agency?</Text>
      <View style={styles.radioRow}>
        <TouchableOpacity onPress={() => setIsAgency(true)}>
          <Text>{isAgency ? "🔘 Yes" : "⚪ Yes"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsAgency(false)}>
          <Text style={{ marginLeft: 20 }}>{!isAgency ? "🔘 No" : "⚪ No"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={handleRegister}>
        <Text style={styles.primaryText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: COLORS.border, padding: 12, borderRadius: 6, marginBottom: 15 },
  label: { color: COLORS.primary, fontSize: 12, marginBottom: 5 },
  radioRow: { flexDirection: "row", marginBottom: 30 },
  primaryBtn: { backgroundColor: COLORS.primary, padding: 15, borderRadius: 8 },
  primaryText: { color: "#fff", textAlign: "center" },
});
