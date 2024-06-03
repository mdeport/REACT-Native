import { ScrollView, Text, View, Image } from "react-native";

export default function nosActiviteScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textExplicatif}>Notre organisations est présentes de partout dans le monde et compte plusieurs locaux de part tout comme : </Text>
        <Text style={styles.listTextPays}>- En Afrique</Text>
        <Text style={styles.listTextPays}>- En Asie</Text>
        <Text style={styles.listTextPays}>- En Europe</Text>
        <Image source={require("../../assets/centre.png")} style={styles.image} />
        <Text style={styles.textExplicatif}>L’eau potable est une ressource vitale pour la santé, l’hygiène et la survie des populations.</Text>
        <Text style={styles.textDetail}>Au Yémen, pays ravagé par la guerre depuis 2014, l’accès à l’eau potable est devenu un défi majeur pour des millions de personnes déplacées, vulnérables et exposées aux risques de maladies et de famine.</Text>
        <Image source={require("../../assets/eau.png")} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 380,
    height: 220,
    marginBottom: 20,
    marginTop: 20,
  },
  listTextPays: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  textExplicatif: {
    fontSize: 17,
    textAlign: "center",
  },
  textDetail: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 20,
  },
};
