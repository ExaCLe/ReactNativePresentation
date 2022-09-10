import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Name: David Malen</Text>
      <Text style={[styles.informationText, { color: "grey" }]}>
        Phone Number: +01 06406364
      </Text>

      <Button title="Call" onPress={() => alert("Calling...")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  informationText: {
    fontSize: 20,
    color: "red",
  },
});
