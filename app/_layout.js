import { Stack } from "expo-router";
import logo from "../assets/logoVies.png";
import { Image, StyleSheet, View, Text } from "react-native";
import { Asset } from "expo-asset";
import React, { useState, useEffect } from "react";

export default function RootLayout() {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  useEffect(() => {
    loadLogo();
  }, []);

  const loadLogo = async () => {
    try {
      await Asset.fromModule(logo).downloadAsync();
      setTimeout(() => setIsLogoLoaded(true), 1500);
    } catch (err) {
      console.warn(err);
    }
  };

  if (!isLogoLoaded) {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text> Vous allez être rediriger vers l'application </Text>
        <Text>SAUVER DES VIES</Text>
      </View>
    );
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 380,
    height: 120,
  },
});
