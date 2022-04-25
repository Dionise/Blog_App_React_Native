import React, { useEffect } from "react";
import "react-native-gesture-handler";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { auth } from "./firebase";
import { AntDesign } from "@expo/vector-icons";

function ResetScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const handlePasswordReset = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(function (user) {
        alert("Please check your email...");
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <View style={styles.RegisterUsercontainer}>
      <Text style={styles.signuptitle}>Reset Password</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      {!!email.nameError && (
        <Text style={{ color: "red" }}>{email.nameError}</Text>
      )}

      <View style={styles.TouchableOpacitybuttonregister}>
        <TouchableOpacity onPress={() => handlePasswordReset}>
          <AntDesign name="mail" size={60} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: {},
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    padding: 10,
  },
  formbutton: {
    justifyContent: "center",
    alignItems: "center",
  },
  forminput: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  registrationicon: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  title: { color: "#93A85C", fontSize: 40, fontWeight: "300" },
  input: {
    paddingTop: 10,
    paddingRight: 10,

    width: 276,
    height: 40,
    borderBottomWidth: 2,
    marginTop: 15,
    borderRadius: 5,
    paddingLeft: 8,
  },
  loginScreenButton: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#93A85C",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#fff",
    height: 45,
    width: 276,
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default ResetScreen;
