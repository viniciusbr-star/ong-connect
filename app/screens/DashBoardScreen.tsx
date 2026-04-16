import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function DashBoardScreen() {
  // 4. Reatividade: Recupera os parâmetros enviados pelo Login
  const { userName, voluntarioId } = useLocalSearchParams();
  const router = useRouter();

  const handleSair = () => {
    // Habilidade S: Garante que o voluntário saia do fluxo e volte ao Login
    router.replace("/");
  };

  return (
    <LinearGradient
      colors={["#0F172A", "#134E4A"]}
      start={{ x: 0, y: 0 }} // Começa no canto superior esquerdo
      end={{ x: 1, y: 1 }} // Termina no canto inferior direito
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/images/ongconnect.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.card}>
          <Text style={styles.welcomeText}>
            Olá, <Text style={styles.boldText}>{userName}</Text>, que bom ter
            você aqui para ajudar!
          </Text>

          <Text style={styles.idText}>ID do Voluntário: {voluntarioId}</Text>
        </View>

        <TouchableOpacity style={styles.buttonMain}>
          <Text style={styles.buttonTextWhite}>Ver Causas Disponíveis</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSair} onPress={handleSair}>
          <Text style={styles.buttonTextRed}>Sair do Painel</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  logo: { width: 200, height: 200, marginBottom: 20 },
  card: {
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
  },
  welcomeText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    lineHeight: 28,
  },
  boldText: { color: "#4CAF50", fontWeight: "bold" },
  idText: { color: "#888", marginTop: 15, fontSize: 13, letterSpacing: 1 },

  buttonMain: {
    backgroundColor: "#2E7D32",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonTextWhite: { color: "#fff", fontWeight: "bold", fontSize: 16 },

  buttonSair: {
    width: "100%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D32F2F",
  },
  buttonTextRed: { color: "#D32F2F", fontWeight: "bold", fontSize: 16 },
});
