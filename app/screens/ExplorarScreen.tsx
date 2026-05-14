import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ONGCard from "../components/ONGCard"; // ATENÇÃO AO CAMINHO AQUI

const ongs = [
  {
    id: "1",
    nome: "Projeto Esperança",
    causa: "Educação",
    imagem: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    descricao: "Ajuda crianças com reforço escolar e atividades no contraturno.",
  },
  {
    id: "2",
    nome: "Verde Futuro",
    causa: "Meio Ambiente",
    imagem: "https://cdn-icons-png.flaticon.com/512/427/427735.png",
    descricao: "Focada em reflorestamento urbano e limpeza de rios locais.",
  },
  {
    id: "3",
    nome: "Patas Amigas",
    causa: "Proteção Animal",
    imagem: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    descricao: "Resgate de animais abandonados e feiras de adoção responsável.",
  }
];

export default function ExplorarScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient colors={["#0F172A", "#134E4A"]} style={styles.container}>
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#16a34a" />
          <Text style={styles.loadingText}>Carregando ONGs...</Text>
        </View>
      ) : (
        <FlatList
          data={ongs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ONGCard item={item} />}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#94a3b8",
    marginTop: 10,
  },
  list: {
    padding: 20,
    paddingTop: 50,
  },
});