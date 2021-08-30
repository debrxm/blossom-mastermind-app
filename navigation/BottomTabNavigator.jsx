import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/core";
import * as React from "react";
import Colors, { COLORS } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Notification from "../screens/Notification/Notification";
import Communication from "../screens/Communication/Communication";
import ReportBug from "../screens/ReportBug/ReportBug";
import GiveFeedback from "../screens/GiveFeedback/GiveFeedback";
import EditProfile from "../screens/EditProfile/EditProfile";
import { Text, View } from "../components/Themed/Themed";
import Packages from "../screens/Packages/Packages";
import Investment from "../screens/Investment/Investment";
import About from "../screens/About/About";
import PackageView from "../screens/PackageView/PackageView";

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
      case "Communication":
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
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          elevation: 10, // for Android
          borderTopWidth: 0,
          position: "absolute",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          // marginTop: -50,
          marginBottom: 10,
          marginHorizontal: 10,
          borderTopColor: "transparent",
          shadowColor: "transparent",
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: "#b3b4b6",
      }}
      initialRouteName="HomeScreen"
    >
      <BottomTab.Screen
        name="HomeScreen"
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
        name="PackagesScreen"
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
              <MaterialIcons name="explore" size={33} color={color} />
            ) : (
              <AntDesign name="find" size={24} color={color} />
            ),
        })}
      />
      <BottomTab.Screen
        name="InvestmentScreen"
        component={InvestmentScreenNavigator}
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
                Investments
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
      <ScreenStack.Screen
        name="Communication"
        component={Communication}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="ReportBug"
        component={ReportBug}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="GiveFeedback"
        component={GiveFeedback}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="Packages"
        component={Packages}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="PackageView"
        component={PackageView}
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
        name="Packages"
        component={Packages}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="PackageView"
        component={PackageView}
        options={{
          headerShown: false,
        }}
      />
    </ScreenStack.Navigator>
  );
}
function InvestmentScreenNavigator() {
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen
        name="Investments"
        component={Investment}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="Packages"
        component={Packages}
        options={{
          headerShown: false,
        }}
      />
      <ScreenStack.Screen
        name="PackageView"
        component={PackageView}
        options={{
          headerShown: false,
        }}
      />
    </ScreenStack.Navigator>
  );
}
