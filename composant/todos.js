import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Todoslist() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("items").then((data) => {
      if (data) {
        setItems(JSON.parse(data));
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function ajoutItem() {
    if (input !== "") {
      setItems([...items, input]);
    } else {
      alert("veuillez entrer une Bonnes actions");
    }
    setInput("");
  }

  function supprimeritem(index) {
    const newItems = items.filter((_, data) => data !== index);
    setItems(newItems);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Liste des Bonnes actions</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Ajouter une Bonnes actions" value={input} onChangeText={(text) => setInput(text)} />
        <Button title="Ajouter" onPress={ajoutItem} />
      </View>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text>{item}</Text>
          <Button title="Supprimer" onPress={() => supprimeritem(index)} />
        </View>
      ))}
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
  form: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});
