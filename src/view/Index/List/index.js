import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

import styles from "./styles";

const listProduct = [
  {
    id: "1",
    name: "TV",
    price: 1999.99,
    condition: "Novo",
  },
  {
    id: "2",
    name: "TV",
    price: 1999.99,
    condition: "Novo",
  },
  {
    id: "3",
    name: "TV",
    price: 1999.99,
    condition: "Novo",
  },
];

function Item({ item }) {
  return (
    <TouchableOpacity>
      <Image />
      <View>
        <Text>Nome</Text>
        <Text>Preço</Text>
        <Text>Parcelamento</Text>
        <Text>Condição</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function List({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listProduct}
        render={(item) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
