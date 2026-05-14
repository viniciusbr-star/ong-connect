import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ONGCard from "./ONGCard";

const ongs = [
  {
    id: "1",
    nome: "Projeto Esperança",
    causa: "Educação",
    imagem: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    descricao: "Ajuda crianças com reforço escolar.",
  },
  {
    id: "2",
    nome: "Verde Futuro",
    causa: "Meio Ambiente",
    imagem: "https://cdn-icons-png.flaticon.com/512/427/427735.png",
    descricao: "Projetos de reflorestamento.",
  },
];

export default function ExplorarScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <LinearGradient
      colors={["#0F172A", "#134E4A"]}
      style={{ flex: 1 }}
    >
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#16a34a" />
          <Text style={styles.text}>Carregando ONGs...</Text>
        </View>
      ) : (
        <FlatList
          data={ongs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ONGCard item={item} />}
          contentContainerStyle={{ padding: 20 }}
        />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    marginTop: 10,
  },
});