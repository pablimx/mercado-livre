import React from "react";
import { TouchableOpacity, TextInput, View, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { EvilIcons, Feather } from "@expo/vector-icons";

import Main from "../Main";
import List from "../List";

const Stack = createStackNavigator();

import styles from "./styles";

const SearchBarHeader = () => {
  return (
    <View style={styles.input_search}>
      <EvilIcons
        name="search"
        size={22}
        color="#CDCDCD"
        style={{ marginRight: 5 }}
      />
      <TextInput placeholder="Buscar no Mercado Livre" />
    </View>
  );
};

const optionHeader = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: "#FFE600",
    elevation: 0,
  },
  headerTintColor: "#000",
  headerTitle: () => <SearchBarHeader />,
  headerLeft: () => (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => navigation.toggleDrawer()}
      title="Info"
    >
      <Feather name="align-left" size={24} />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={() => Alert.alert("Ops")}
      title="Info"
    >
      <EvilIcons name="cart" size={24} />
    </TouchableOpacity>
  ),
  headerTitleContainerStyle: {
    flex: 1,
  },
});

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Main} name="Main" options={optionHeader} />
      <Stack.Screen component={List} name="List" options={optionHeader} />
    </Stack.Navigator>
  );
}
