import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Todoslist from "../../composant/todos";


export default function mesBonnesActionsScreen() {
  return (
    <Todoslist/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
