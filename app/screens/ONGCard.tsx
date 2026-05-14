import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

export default function ONGCard({ item }: any) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => Alert.alert(item.nome, item.descricao)}
    >
      <Image source={{ uri: item.imagem }} style={styles.image} />

      <View>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.causa}>{item.causa}</Text>
      </View>
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
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  nome: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  causa: {
    color: "#94a3b8",
  },
});