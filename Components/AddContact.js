import { Text, TextInput, Button } from "react-native";
import { useState } from "react";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <Text style={{ fontSize: 30 }}>Name: </Text>
      <TextInput
        style={{ fontSize: 30, borderWidth: 1, borderColor: "black" }}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Text style={{ fontSize: 30 }}>Phone Number: </Text>
      <TextInput
        style={{ fontSize: 30, borderWidth: 1, borderColor: "black" }}
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="numeric"
      />
      <Button
        title="Add Contact"
        onPress={() => {
          props.route.params.addContact(name, phoneNumber);
          props.navigation.goBack();
        }}
      />
    </>
  );
};

export default AddContact;
