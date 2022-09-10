import { StyleSheet, FlatList, View, Button } from "react-native";

import Contact from "./Components/Contact";
import contacts from "./data/contactsBig";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <Contact
            name={item.first_name + " " + item.last_name}
            phoneNumber={item.phone_number}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
