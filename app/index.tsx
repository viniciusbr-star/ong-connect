import React from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoginScreen from './screens/LoginScreen';

export default function Page() {
  // Tela de login como a principal (index)
  return <LoginScreen />;
}



// export default function WelcomeScreen() {
//   const router = useRouter();

//   return (
//     <LinearGradient
//       colors={['#1A365D', '#2D6A4F']} 
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={styles.container}
//     >
//       <StatusBar barStyle="light-content" />

//       <View style={styles.header}>
//         <Image 
//           source={require('../assets/images/ongconnect.png')} 
//           style={styles.logo}
//         />
//       </View>

//       <View style={styles.centerContent}>
//         <Text style={styles.title}>Bem-vindo à ONG Connect</Text>
//         <Text style={styles.description}>
//           Conectando corações solidários às necessidades de quem está ao seu lado. 
//           Encontre projetos e transforme o seu bairro.
//         </Text>
//       </View>

//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.mainButton}>
//           <Text style={styles.mainButtonText}>Conhecer Projetos e Eventos</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.doacaoButton}>
//           <Text style={styles.doacaoButtonText}>Realizar Doações</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.loginButton}>
//           <Text style={styles.loginButtonText} onPress ={() => router.push('/login')}>
//             Já tenho uma conta. Login
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.cadastroButton}>
//           <Text style={styles.cadastroButtonText} onPress ={() => router.push('/login')}>
//             Cadastrar-se
//           </Text>
//         </TouchableOpacity>
   
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 30,
//     justifyContent: 'space-between',
//     paddingVertical: 50,
//   },
//   header: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   logo: {
//     width: 350,
//     height: 150,
//   },
//   centerContent: {
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   description: {
//     fontSize: 16,
//     color: '#E2E8F0',
//     textAlign: 'center',
//     lineHeight: 24,
//   },
//   footer: {
//     width: '100%',
//     alignItems: 'center',
//     gap: 15,
//   },
//   mainButton: {
//     backgroundColor: '#FFFFFF',
//     width: '100%',
//     padding: 18,
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   mainButtonText: {
//     color: '#1A365D',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   doacaoButton: {
//     backgroundColor: 'trasparent',
//     borderWidth: 2,
//   borderColor: '#FFFFFF',
//   width: '100%',
//   padding: 18,
//   borderRadius: 12,
//   alignItems: 'center',
//   },
//   doacaoButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginButton: {
//     // padding: 10,
//   },
//   loginButtonText: {
//     color: '#FFFFFF',
//     fontSize: 14,+
//     textDecorationLine: 'underline',
//   },
//   cadastroButton: {
//     // padding: 10,
//   },
//   cadastroButtonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     textDecorationLine: 'underline'
//   },
// });


