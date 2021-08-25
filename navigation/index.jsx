import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { RegisterForPushNotificationsAsync } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import Onboarding from "../screens/Onboarding/Onboarding";
import NotFound from "../screens/NotFound/NotFound";
import BottomTabNavigator from "./BottomTabNavigator";
import Register from "../screens/Register/Register";
import Login from "../screens/Login/Login";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import { auth, firestore } from "../firebase/config";
import { createUserProfileDocument } from "../firebase/auth";
import { setCurrentUser, toggleHasNoty } from "../redux/user/actions";

function Navigation({ colorScheme }) {
  const currentUser = useSelector(({ user }) => user.currentUser);
  // const currentUser = {
  //   id: "jhgsysg77",
  //   first_name: "Sam",
  //   last_name: "Jackson",
  //   email: "ibrahxxm@gmail.com",
  //   phone: "08117671213",
  // };
  console.log(currentUser);
  const notificationListener = useRef();
  const responseListener = useRef();
  const dispatch = useDispatch();
  const checkUser = () => {
    auth.onAuthStateChanged(async (User) => {
      if (User) {
        const userRef = await createUserProfileDocument(User);
        userRef.onSnapshot(async (snapShot) => {
          const data = { id: snapShot.id, ...snapShot.data() };
          dispatch(setCurrentUser(data));
          const notificationRef = await firestore
            .collection("notifications")
            .doc(snapShot.id)
            .collection("notifications")
            .where("viewed", "==", false);
          notificationRef.onSnapshot(async (snapShot) => {
            if (snapShot.size > 0) {
              dispatch(toggleHasNoty(true));
            } else {
              dispatch(toggleHasNoty(false));
            }
          });
        });
      }
    });
  };
  const updateNotificationToken = (token) => {
    firestore
      .doc(`users/${currentUser.id}`)
      .update({ notificationToken: token });
  };
  useEffect(() => {
    checkUser();
    RegisterForPushNotificationsAsync().then((token) => {
      if (currentUser && currentUser.notificationToken) {
        currentUser.notificationToken !== token &&
          updateNotificationToken(token);
      } else if (currentUser) {
        updateNotificationToken(token);
      }
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("Noty Listener", notification);
        dispatch(toggleHasNoty(true));
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Response Listeer", response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [""]);
  const renderer = () => {
    return currentUser ? <RootNavigator /> : <AuthNavigator />;
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
