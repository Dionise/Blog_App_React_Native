import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5, Foundation, AntDesign } from "@expo/vector-icons";

function HomeScreen() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    setDate(
      new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date())
    );
  }, []);

  return (
    <View>
      <View style={styles.newstitlecontainer}>
        <Text style={styles.dasboardtitle}>Dasboard</Text>
      </View>
      <View style={styles.dateweekcontainer}>
        <Text style={styles.dateweek}>{date}</Text>
      </View>

      <View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 350, marginTop: 10 }}
        >
          <View style={styles.favoritecontainer}>
            <Text style={styles.favorite}>Favorite</Text>
          </View>
          <View style={styles.generalhealthcontainer}>
            <View style={styles.detailgenralhealthcontainer}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Sleep
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Exercices
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Water
              </Text>
            </View>
          </View>

          <View style={styles.generalhealthcontainer}>
            <View style={styles.detailkcalcontainer}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Sleep
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Exercices
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Water
              </Text>
            </View>
          </View>
          <View style={styles.healthsleepcontainer}>
            <View style={styles.healthratecontainer}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "500",
                    paddingTop: 5,
                  }}
                >
                  Health Rate
                </Text>
              </View>
            </View>
            <View style={styles.sleepcyclecontainer}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "500",
                    paddingTop: 5,
                  }}
                >
                  Sleep Cycle
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.detailwalkingrunningdistancecontainer}>
            <TouchableOpacity>
              <View style={styles.generalwalkingrunningdistancecontainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginLeft: 15,
                    marginTop: 15,
                    marginRight: 15,
                  }}
                >
                  <FontAwesome5 name="fire" size={18} color="black" />
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    Wallking + Running Distance
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: "400" }}>
                    Yesterday
                  </Text>
                  <AntDesign name="right" size={18} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.detailalldatacontainer}>
            <TouchableOpacity>
              <View style={styles.generalalldatacontainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 15,
                    marginRight: 23,
                    marginTop: 10,
                  }}
                >
                  <FontAwesome5
                    name="file-medical-alt"
                    size={24}
                    color="black"
                  />
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Show All Data
                  </Text>
                  <AntDesign name="right" size={18} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.favoritecontainer}>
            <Text style={styles.favorite}>Highlights</Text>
          </View>
          <View style={styles.detailstepscontainer}>
            <TouchableOpacity>
              <View style={styles.stepscontainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 18,
                    marginTop: 10,
                    marginRight: 23,
                  }}
                >
                  <Foundation
                    name="foot"
                    size={24}
                    color="black"
                    style={{ marginRight: 15 }}
                  />

                  <AntDesign name="right" size={18} color="black" />
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginLeft: 20,
                    marginTop: 5,
                  }}
                >
                  Some useful information
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  healthsleepcontainer: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  healthratecontainer: {
    height: 150,
    width: 150,
    backgroundColor: "white",
    borderRadius: 23,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 0 },
  },
  sleepcyclecontainer: {
    height: 150,
    width: 150,
    backgroundColor: "white",
    borderRadius: 23,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 0 },
  },
  homecontainer: { backgroundColor: "blue" },
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
  dateweek: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "800",
  },
  favoritecontainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  favorite: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "500",
  },
  generalhealthcontainer: {
    marginTop: 20,
    height: 150,
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
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignSelf: "flex-end",
    flex: 1,
    paddingRight: 15,
  },
  detailkcalcontainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  detailwalkingrunningdistancecontainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  generalwalkingrunningdistancecontainer: {
    marginTop: 20,
    height: 90,
    width: 355,
    backgroundColor: "white",
    borderRadius: 23,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { height: 0, width: 0 },
  },
  detailalldatacontainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  generalalldatacontainer: {
    marginTop: 25,
    height: 40,
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

export default HomeScreen;
