import React from "react";
import { View, Text, Image, Alert } from "react-native";
import {
  DrawerNavigator,
  DrawerContentScrollView,
  createDrawerNavigator,
  DrawerItem,
} from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import Navigation from "./Navigation";

const Drawer = createDrawerNavigator();

const HeaderDrawer = () => {
  return (
    <View>
      <View>
        <Text>Olá</Text>
      </View>
      <View>
        <Text>Mercado Pago</Text>
      </View>
    </View>
  );
};

const DrawerContent = ({ navigation }) => {
  const listMenuDrawer = [
    {
      id: 1,
      name: "Home",
      action: "Home",
      icon: <AntDesign name="home" size={24} color="black" />,
    },
    {
      id: 2,
      name: "Procurar",
      action: "List",
      icon: <AntDesign name="search1" size={24} color="black" />,
    },
  ];
  return (
    <View>
      <HeaderDrawer />
      <View>
        <DrawerContentScrollView>
          {listMenuDrawer.map((menu) => (
            <DrawerItem
              label={menu.name}
              key={menu.id}
              icon={() => menu.icon}
              onPress={() => navigation.navigate(menu.action)}
            />
          ))}
        </DrawerContentScrollView>
      </View>
    </View>
  );
};

export default function Index() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen component={Navigation} name="Navigation" />
    </Drawer.Navigator>
  );
}
