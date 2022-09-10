import { Text, Button, StyleSheet } from "react-native";

const Contact = (props) => {
  return (
    <>
      <Text style={{ fontSize: 30 }}>Name: {props.name}</Text>
      <Text style={[styles.informationText, { color: "grey" }]}>
        Phone Number: {props.phoneNumber}
      </Text>

      <Button title="Call" onPress={() => alert("Calling...")} />
    </>
  );
};

const styles = StyleSheet.create({
  informationText: {
    fontSize: 18,
    color: "red",
  },
});

export default Contact;
