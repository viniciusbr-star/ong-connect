import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    console.table({ email, senha });

    if (email.includes("@") && senha.length > 6) {
      console.log("✅ Acesso autorizado para:", email);
      // Futuramente: Navegar para a Home
    } else {
      console.log("❌ Falha no login: E-mail inválido ou senha muito curta.");
    }
  };

  return (
    <LinearGradient colors={["#1a2a3a", "#2c5364"]} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../assets/images/ongconnect.png")}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Bem-vindo de volta!</Text>
          <Text style={styles.subTitle}>
            Faça login para continuar ajudando.
          </Text>
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

          <Text style={styles.helperText}>Logando como: <span style={styles.span}>{email}</span></Text>
        

          <TouchableOpacity style={styles.mainButton} onPress={handleLogin}>
            <Text style={styles.mainButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Cadastre-se aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 120,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    color: "#ccc",
    marginTop: 5,
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
  mainButton: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  helperText: { 
  color: '#ccc',
  fontSize: 12,
  fontStyle: 'italic',
  marginBottom: 10,
  },
  mainButtonText: {
    color: "#1a2a3a",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  footerText: {
    color: "#ccc",
    marginRight: 5,
  },
  linkText: {
    color: "#fff",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  span: {
    color: '#ffff',
  }
});
