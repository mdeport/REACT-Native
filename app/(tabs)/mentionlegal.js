import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function MentionLegalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mentions Légales</Text>
      <Text style={styles.sectionTitle}>1. Informations Générales</Text>
      <Text style={styles.paragraph}>
        Nom de l'application : Sauver des vies {"\n"}
        Éditeur : SAUVER DES VIES {"\n"}
        Siège social : 11 Av. de la République, 69200 Vénissieux {"\n"}
        Téléphone : 06 60 99 02 79 {"\n"}
        Email : contact@sauverdesvies.org {"\n"}
      </Text>
      <Text style={styles.sectionTitle}>2. Propriété Intellectuelle</Text>
      <Text style={styles.paragraph}>L'application "Sauver des vies" et l'ensemble des éléments qui la composent sont protégés par la législation en vigueur sur la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris les documents téléchargeables et les représentations iconographiques et photographiques.</Text>
      <Text style={styles.sectionTitle}>3. Responsabilité</Text>
      <Text style={styles.paragraph}>L'éditeur ne peut être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès à l'application "Sauver des vies".</Text>
      <Text style={styles.sectionTitle}>4. Données Personnelles</Text>
      <Text style={styles.paragraph}>Les informations recueillies par l'application sont nécessaires pour le bon fonctionnement de celle-ci. Elles sont destinées exclusivement à "Sauver des vies". Conformément à la loi "Informatique et Libertés", vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : [Adresse email de contact].</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 20,
  },
});
