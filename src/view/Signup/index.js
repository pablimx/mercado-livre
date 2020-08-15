import React, { useState } from "react";
import { View, Text, Image, TextInput, Alert } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import logo from "../../../assets/logo.png";
import { set } from "react-native-reanimated";

export default function Signup() {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  function handleSignup() {
    if ((user, pass)) {
      Alert.alert("Ok", "tudo certo");
    } else {
      Alert.alert("Erro", "Preencha e-mail e senha");
    }
  }

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View style={styles.containerInput}>
        <TextInput
          name="user"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(text) => {
            setUser(text);
          }}
          style={styles.input}
        />
        <TextInput
          name="user"
          keyboardType="email-address"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => {
            setPass(text);
          }}
          keyboardType="default"
          placeholder="Senha"
          style={styles.input}
        />
      </View>
      <Button style="outline" onPress={handleSignup}>
        <Text style={styles.text_primary}>Entrar</Text>
      </Button>
    </View>
  );
}
