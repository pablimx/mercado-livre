import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import logo from "../../../assets/logo.png";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View style={styles.containerInput}>
        <TextInput
          name="user"
          keyboardType="name-phone-pad"
          autoCapitalize="none"
          placeholder="Usuário"
          style={styles.input}
        />
        <TextInput
          name="email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          style={styles.input}
        />
      </View>
      <Button style="outline" onPress={false}>
        <Text style={styles.text_primary}>Entrar</Text>
      </Button>
    </View>
  );
}
