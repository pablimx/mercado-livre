import React from "react";
import { View, Image, Alert } from "react-native";
import {
  DrawerNavigator,
  DrawerContentScrollView,
  createDrawerNavigator,
  DrawerItem,
} from "@react-navigation/drawer";
import styles from "./styles";
import Navigation from "./Navigation";

const Drawer = createDrawerNavigator();

export default function Index() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={Navigation} name="Navigation" />
    </Drawer.Navigator>
  );
}
