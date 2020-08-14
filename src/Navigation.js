import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from "./view/Home";
import Login from "./view/Login";
import Signup from "./view/Signup";
import RedefinePass from "./view/RedefinePass";
import Index from "./view/Index";

const optionHeader = () => ({
  headerStyle: {
    backgroundColor: "#FFE600",
  },
});

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={optionHeader} />
        <Stack.Screen name="Login" component={Login} options={optionHeader} />
        <Stack.Screen
          name="Sign Up"
          component={Signup}
          options={optionHeader}
        />
        <Stack.Screen
          name="Redefine Pass"
          component={RedefinePass}
          options={optionHeader}
        />
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
