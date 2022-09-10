import { StyleSheet, Text, View, Button } from "react-native";

import Contact from "./Components/Contact";

export default function App() {
  return (
    <View style={styles.container}>
      <Contact />
      <Contact />
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
});
