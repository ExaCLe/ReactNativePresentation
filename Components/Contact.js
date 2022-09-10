import { Text, Button, StyleSheet } from "react-native";

const Contact = () => {
  return (
    <>
      <Text style={{ fontSize: 30 }}>Name: David Malen</Text>
      <Text style={[styles.informationText, { color: "grey" }]}>
        Phone Number: +01 06406364
      </Text>

      <Button title="Call" onPress={() => alert("Calling...")} />
    </>
  );
};

const styles = StyleSheet.create({
  informationText: {
    fontSize: 20,
    color: "red",
  },
});

export default Contact;
