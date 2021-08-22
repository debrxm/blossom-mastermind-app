import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/core";
import * as React from "react";
import Colors, { COLORS } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Notification from "../screens/Notification/Notification";
import EditProfile from "../screens/EditProfile/EditProfile";
import { Text, View } from "../components/Themed/Themed";
import Investment from "../screens/Investment/Investment";
import About from "../screens/About/About";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  function getTabBarVisible(route) {
    const routeName = getFocusedRouteNameFromRoute(route);
    switch (routeName) {
      case "EditProfile":
        return false;
        break;
      case "Profile":
        return false;
        break;
      case "Investments":
        return false;
        break;
      case "Notification":
        return false;
        break;
      case "About":
        return false;
        break;
      default:
        return true;
        break;
    }
  }
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          elevation: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },
        activeTintColor: Colors[colorScheme].tint,
        inactiveTintColor: "#b3b4b6",
        keyboardHidesTabBar: true,
      }}
      // tabBarOptions={{

      //   style: {
      //     height: 90,
      //     borderTopWidth: 0,
      //     borderTopColor: "transparent",
      //     elevation: 0,
      //     shadowColor: "#5bc4ff",
      //     shadowOpacity: 0,
      //     shadowOffset: {
      //       height: 0,
      //     },
      //     shadowRadius: 0,
      //   },

      // }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisible(route),
          tabBarLabel: ({ focused }) =>
            focused && (
              <Text
                position="right"
                style={{
                  color: COLORS.tint,
                  fontSize: 9,
                  fontWeight: "bold",
                  letterSpacing: 1,
                  marginTop: -10,
                  marginBottom: 5,
                  textTransform: "uppercase",
                }}
              >
                Home
              </Text>
            ),
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <AntDesign name="appstore1" size={22} color={color} />
            ) : (
              <AntDesign name="appstore-o" size={20} color={color} />
            ),
        })}
      />
      <BottomTab.Screen
        name="packages"
        component={PackageScreenNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisible(route),
          tabBarLabel: ({ focused }) =>
            focused && (
              <Text
                position="right"
                style={{
                  color: COLORS.tint,
                  fontSize: 9,
                  fontWeight: "bold",
                  letterSpacing: 1,
                  marginTop: -10,
                  marginBottom: 5,
                  textTransform: "uppercase",
                }}
              >
                Packages
              </Text>
            ),
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="file-tray-stacked" size={22} color={color} />
            ) : (
              <Ionicons
                name="file-tray-stacked-outline"
                size={20}
                color={color}
              />
            ),
        })}
      />
    </BottomTab.Navigator>
  );
}

const ScreenStack = createStackNavigator();

function HomeScreenNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="Investments"
        component={Investment}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
        }}
      />
    </ScreenStack.Navigator>
  );
}

function PackageScreenNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="Products"
        component={Products}
        options={{
          headerShown: false,
        }}
      />
      {/* <ScreenStack.Screen
        name="ProductView"
        component={ProductView}
        options={{
          headerShown: false,
        }}
      /> */}
    </ScreenStack.Navigator>
  );
}
