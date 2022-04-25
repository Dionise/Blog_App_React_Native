import React from "react";
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
function SignUpScreen({ navigation }) {
  const [username, setUserName] = React.useState("");
  const [email, setEamil] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handlerSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.maincontainer}>
      <View style={styles.forminput}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.searchSection}>
          <MaterialCommunityIcons
            style={{ paddingTop: 25 }}
            //name="profile"
            size={20}
            color="#1E6738"
          />
          <TextInput
            placeholder="username"
            value={username}
            onChangeText={setUserName}
            placeholderTextColor="#93A85C"
            style={styles.input}
          />
        </View>
        <View style={styles.searchSection}>
          <MaterialCommunityIcons
            style={{ paddingTop: 25 }}
            //name="profile"
            size={20}
            color="#1E6738"
          />
          <TextInput
            placeholder="email"
            value={email}
            onChangeText={setEamil}
            placeholderTextColor="#93A85C"
            style={styles.input}
          />
        </View>
        <View style={styles.searchSection}>
          <MaterialCommunityIcons
            style={{ paddingTop: 25 }}
            //name="profile"
            size={20}
            color="#1E6738"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#93A85C"
            style={styles.input}
          />
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#34550B", fontSize: 13 }}>
            Forgot Pasword?{" "}
          </Text>

          <TouchableOpacity
            style={styles}
            onPress={() => navigation.navigate("RegsiterScreen")}
            underlayColor="#fff"
          >
            <Text style={{ color: "#34550B", fontWeight: "700", fontSize: 13 }}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formbutton}>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={handlerSignUp}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 55 }}
      >
        <View
          style={{
            flex: 1,
            height: 2,
            backgroundColor: "black",
            marginLeft: 30,
          }}
        />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>or</Text>
        </View>
        <View
          style={{
            flex: 1,
            height: 2,
            backgroundColor: "black",
            marginRight: 30,
          }}
        />
      </View>

      <View style={styles.registrationicon}>
        <TouchableOpacity onPress={() => {}}>
          <MaterialCommunityIcons
            style={{}}
            name="facebook"
            size={60}
            color="#1E6738"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <MaterialCommunityIcons
            style={{}}
            name="google"
            size={60}
            color="#1E6738"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 150,
        }}
      >
        <Text style={{ color: "#34550B", fontSize: 17 }}>Have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <Text style={{ color: "#34550B", fontWeight: "700", fontSize: 17 }}>
            Sign In
          </Text>
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
    marginTop: 110,
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

export default SignUpScreen;
