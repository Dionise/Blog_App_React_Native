import React, { useState } from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from "./screen/SignInScreen";
import SignUpScreen from "./screen/SignUpScreen";
import HomeScreen from "./screen/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChoseWorkoutScreen from "./screen/workoutscreens/ChoseWorkoutScreen";
import SplashScreen from "./screen/SplashScreen";
import ProfileScreen from "./screen/ProfileScreen";
import RunningScreen from "./screen/workoutscreens/RunningScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Workout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WorkoutScreen"
        component={ChoseWorkoutScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Home() {
  return (
    <Tab.Navigator
    /*screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          }
          if (route.name === "Workout") {
            iconName = focused ? "ios-list-box" : "question";
          }
          if (route.name === "Profile") {
            iconName = focused ? "ios-list-box" : "question";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}*/
    >
      <Tab.Screen
        name="Homes"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Workout"
        component={Workout}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function Route({ navigation }) {
  const MyTheme = {
    colors: {
      primary: "black",
      background: "#ffffff",
      text: "#FFD3B5",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: "Register",
            headerStyle: {},
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "Back",
            headerShown: false,
          }}
        />
        <Stack.Screen name="RunningScreen" component={RunningScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
