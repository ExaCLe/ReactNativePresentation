import { View, StyleSheet, FlatList } from "react-native";

import Contact from "./Contact";
import contacts from "../data/contactsBig";

const ContactsList = (props) => {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});

export default ContactsList;
