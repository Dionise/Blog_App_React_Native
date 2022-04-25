// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import { auth } from "./firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-gesture-handler";

const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          navigation.navigate("RunningScreen");
        }
      });
      return unsubscribe;
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/33.png")}
        style={{ width: "90%", resizeMode: "contain", margin: 30 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
