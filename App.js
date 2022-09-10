import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactsList from "./Components/ContactsList";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddContact from "./Components/AddContact";
import { Pressable, Text } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == "Contacts") {
              iconName = "person";
            } else if (route.name == "Settings") {
              iconName = "ios-settings";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const ContactsScreen = ({ navigation }) => {
  const addContact = (name, phoneNumber) => {
    console.log(name, phoneNumber);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contacts"
        component={ContactsList}
        options={{
          headerRight: () => (
            <Pressable
              onPress={() =>
                navigation.navigate("AddContact", {
                  addContact: addContact,
                })
              }
            >
              <Ionicons name="add" size={30} color="black" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="AddContact" component={AddContact} />
    </Stack.Navigator>
  );
};

const Settings = () => {
  return <Text>Settings</Text>;
};
