import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function PerfilScreen({ userName, voluntarioId }: any) {
  const editarInteresses = () => {
    Alert.alert(
      "Editar Interesses",
      "Escolha sua causa favorita:\nEducação\nMeio Ambiente\nSaúde"
    );
  };

  return (
    <LinearGradient
      colors={["#0F172A", "#134E4A"]}
      style={styles.container}
    >
      <Text style={styles.title}>Perfil do Voluntário</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Nome: {userName}</Text>
        <Text style={styles.text}>ID: {voluntarioId}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={editarInteresses}>
        <Text style={styles.buttonText}>Editar Interesses</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#16a34a",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});