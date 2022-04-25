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
import RunningScreen from "./RunningScreen";
const ChoseWorkoutScreen = ({ navigation }) => {
  return (
    <View style={{ paddingTop: 70 }}>
      <View style={styles.selectcontainer}>
        <TouchableOpacity>
          <View style={styles.box}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  paddingTop: 5,
                }}
              >
                Cycling
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  paddingTop: 5,
                }}
              >
                Core Training
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  paddingTop: 5,
                }}
              >
                Pools Swim
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  paddingTop: 5,
                }}
              >
                Martial Arts
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  paddingTop: 5,
                }}
              >
                Yoga
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("RunningScreen")}>
          <View style={styles.box}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  paddingTop: 5,
                }}
              >
                Running
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChoseWorkoutScreen;

const styles = StyleSheet.create({
  selectcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-around",
  },
  box: {
    marginBottom: 45,
    width: 180,
    height: 200,
    backgroundColor: "white",
    borderRadius: 23,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 0 },
    flexDirection: "column",
    alignSelf: "center",
  },
});
