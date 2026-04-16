import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    console.table({ email, senha });

    if (email.includes("@") && senha.length > 6) {
      console.log("✅ Acesso autorizado para:", email);
      // Futuramente: Navegar para a Home
    } else {
      console.log("❌ Falha no login: E-mail inválido ou senha muito curta.");
    }
  };

  const handleEntrar = () => {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      return Alert.alert(
        "Campos Vazios",
        "Por favor, preencha todos os campos para prosseguir.",
      );
    }

    const idAleatorio = Math.random().toString(36).substring(7).toUpperCase();

    router.push({
      pathname: "/dashboard",
      params: { userName: nome, voluntarioId: idAleatorio },
    });
  };

  return (
    <LinearGradient colors={["#1a2a3a", "#0a0f14"]} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.innerContainer}>
            <Image
              source={require("../../assets/images/ongconnect.png")}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.title}>Portal do Voluntário</Text>
            <Text style={styles.subtitle}>
              Identifique-se para transformar o mundo.
            </Text>

            {/* Grupo de Inputs */}
            <View style={styles.form}>
              <Text style={styles.label}>Nome Completo</Text>
              <TextInput
                style={styles.input}
                placeholder="Como quer ser chamado?"
                placeholderTextColor="#94a3b8"
                value={nome}
                onChangeText={setNome}
              />
            </View>

            <View style={styles.form}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="exemplo@email.com"
                placeholderTextColor="#999"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />

              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#999"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
              />

              <Text style={styles.helperText}>
                Logando como: <span style={styles.span}>{email}</span>
              </Text>
            </View>

            <TouchableOpacity
              style={styles.buttonMain}
              onPress={() => {
                handleLogin();
                handleEntrar();
              }}
            >
              <Text style={styles.buttonText}>Acessar Painel</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Sua ajuda é fundamental para nossa causa.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  logo: { width: 100, height: 100, marginBottom: 15 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 5 },
  subtitle: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: 30,
  },

  form: {
    width: "100%",
  },
  label: {
    color: "#fff",
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    padding: 15,
    color: "#fff",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    marginBottom: 20,
  },

  buttonMain: {
    backgroundColor: "#16a34a",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#16a34a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  footerText: {
    marginTop: 25,
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
  },
  helperText: {
    color: "#ccc",
    fontSize: 12,
    fontStyle: "italic",
    marginBottom: 10,
  },
  span: {
    color: "#ffff",
  },
});
