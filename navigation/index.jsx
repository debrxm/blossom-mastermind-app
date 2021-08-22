import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Onboarding from "../screens/Onboarding/Onboarding";
import NotFound from "../screens/NotFound/NotFound";
import BottomTabNavigator from "./BottomTabNavigator";
import Register from "../screens/Register/Register";
import Login from "../screens/Login/Login";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";

function Navigation({ colorScheme }) {
  // const { user } = useSelector(({ Auth }) => Auth);
  const user = {
    first_name: "Sam",
    last_name: "Jackson",
    email: "ibrahxxm@gmail.com",
    phone: "08117671213",
  };
  const renderer = () => {
    return user ? <RootNavigator /> : <AuthNavigator />;
  };
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {renderer()}
    </NavigationContainer>
  );
}

const RootStack = createStackNavigator();

function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Root" component={BottomTabNavigator} />
      <RootStack.Screen
        name="NotFound"
        component={NotFound}
        options={{ title: "Oops!" }}
      />
    </RootStack.Navigator>
  );
}

const AuthStack = createStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name="Root"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ title: "Register" }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <AuthStack.Screen
        name="Reset"
        component={ForgotPassword}
        options={{ title: "Reset Password" }}
      />
    </AuthStack.Navigator>
  );
}

export default Navigation;
