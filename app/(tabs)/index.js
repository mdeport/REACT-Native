import { View, Text, StyleSheet, Image } from "react-native";



export default function HomeScreen() {
  
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logoVies.png")} style={styles.image} />
      <Text style={styles.text}>Bienvenue sur l'application</Text>
      <Text style={styles.textprincipal}>SAUVER DES VIES </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 380,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
  },
  textprincipal: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
