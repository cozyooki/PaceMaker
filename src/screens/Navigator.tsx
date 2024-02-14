import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();

const LoginStackNavi = () => {
  return (
    <Stack.Navigator></Stack.Navigator>
  )
};

export default () => {
  return (
    <NavigationContainer>
      <LoginStackNavi />
    </NavigationContainer>
  )
};
