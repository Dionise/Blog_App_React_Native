import React, { useEffect } from "react";
import "react-native-gesture-handler";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { auth } from "./firebase";
import { FontAwesome5, Foundation, AntDesign } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.newstitlecontainer}>
        <Text style={styles.dasboardtitle}>Profile</Text>
      </View>
      <View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 350, marginTop: 10 }}
        >
          <View style={styles.generalhealthcontainer}>
            <View style={styles.detailgenralhealthcontainer}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Yout body
              </Text>
            </View>
          </View>

          <View style={styles.generalhealthcontainer}>
            <View style={styles.detailcontainer}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Trending
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailcontainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 15,
    paddingTop: 15,
  },
  newstitlecontainer: {
    marginTop: 70,
    alignItems: "center",
  },
  dasboardtitle: { fontSize: 22, fontWeight: "900" },
  dateweekcontainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingBottom: 10,
  },

  generalhealthcontainer: {
    marginTop: 20,
    height: 180,
    width: 355,
    backgroundColor: "white",
    borderRadius: 23,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { height: 0, width: 0 },
    flexDirection: "column",
    alignSelf: "center",
  },
  detailgenralhealthcontainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 15,
    paddingTop: 15,
  },

  detailstepscontainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  stepscontainer: {
    marginTop: 20,
    height: 170,
    width: 355,
    backgroundColor: "white",
    borderRadius: 23,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { height: 0, width: 0 },
    flexDirection: "column",
    alignSelf: "center",
  },

  scrollviewcontainer: { marginTop: 10 },
});

export default ProfileScreen;
