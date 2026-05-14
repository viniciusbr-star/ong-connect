import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ONGCard({ item }: any) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() =>
        Alert.alert(item.nome, item.descricao, [{ text: "Fechar" }])
      }
    >
      <Image source={{ uri: item.imagem }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.causa}>{item.causa}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#16a34a" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
    // Parte 6: Sombras para Android e iOS
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  nome: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  causa: {
    color: "#94a3b8",
    fontSize: 14,
  },
});
