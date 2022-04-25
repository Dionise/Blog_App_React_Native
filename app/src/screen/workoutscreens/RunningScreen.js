import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { Stopwatch } from "react-native-stopwatch-timer";

export default class RunningScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distanceTravelled: 0,
      odometer: 0,
      prevLatLng: {},
      isLoading: true,
      runState: {},
      runningDuration: 0,
      isMoving: false,
      markers: [],
      coordinates: [],
      elements: [],
      showsUserLocation: true,
      latitude: 0,
      longitude: 0,

      stopwatchStart: false,
      totalDuration: 90000,

      stopwatchReset: false,
      hour: 0,
      min: 0,
      sec: 0,
      msec: 0,
    };
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  async componentDidMount() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        ...this.state,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      console.log(error);
    }
  }

  toggleStopwatch() {
    this.setState({
      stopwatchStart: !this.state.stopwatchStart,
      stopwatchReset: false,
    });
  }

  resetStopwatch = async () => {
    const { isLoading, runState, runningDuration, distanceTravelled } =
      this.state;

    this.setState(
      { stopwatchStart: false, stopwatchReset: true, runState: {} },
      () => {
        console.log(runState.state);
        this.handleRunStateChange();
      }
    );
  };

  getFormattedTime(time) {
    //if (this.currentTime !== 0) console.log("equl1");
    //this.setState({ stopwatchStart: false, stopwatchReset: true });
    //else {
    //console.log("equl0");
    //this.currentTime = time;
    //}
    //console.log("ok");
  }

  renderMap = () => {
    const { showsUserLocation, markers } = this.state;

    return (
      <View>
        <MapView
          style={styles.map}
          showsUserLocation={showsUserLocation}
          region={{
            latitude: this.state.latitude - 0.001,
            longitude: this.state.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}
          provider={PROVIDER_GOOGLE}
        ></MapView>
        {this.renderActions()}
      </View>
    );
  };

  handleRunStateChange = async (state) => {
    if (state) {
      let runState = {};
      switch (state) {
        case "running":
          runState = {
            ...this.state.runState,
            state: "running",
            runAt: new Date(),
          };
          console.log("running");
          this.toggleStopwatch();

          break;
        case "paused":
          runState = {
            ...this.state.runState,
            state: "paused",
            pauseAt: new Date(),
          };
          console.log("paused");
          this.toggleStopwatch();
          break;
        case "resume":
          runState = { ...this.state.runState, state: "running" };
          console.log("resume");
          break;
        case "finished":
          runState = {
            ...this.state.runState,
            state: "finished",
            finishAt: new Date(),
          };
          console.log("finished");
          this.toggleStopwatch();

          break;
      }
      this.setState({ runState });
    }
  };
  renderActions = () => {
    const distance = parseFloat(distanceTravelled).toFixed(1);

    const options = {
      container: {
        backgroundColor: "#fff",
        width: 130,
      },
      text: {
        fontSize: 30,
        color: "#000",
      },
    };
    const { isLoading, runState, runningDuration, distanceTravelled } =
      this.state;
    if (isLoading) {
      const report = () => {
        return (
          <View style={styles.groupButtons}>
            <View>
              <View style={{ alignSelf: "center" }}>
                <Text style={{ fontSize: 20, paddingBottom: 2 }}>Time</Text>
              </View>
              <Stopwatch
                start={this.state.stopwatchStart}
                options={options}
                //getTime={this.getFormattedTime}
              />
            </View>
            <View style={styles.borderMiddle}></View>
            <View>
              <View>
                <Text style={{ fontSize: 20, paddingBottom: 2 }}>Distance</Text>
              </View>
              <View>
                <Text style={{ fontSize: 30 }}>0.0 Km</Text>
              </View>
            </View>
          </View>
        );
      };
      if (runState.state === "running" || runState.state == "paused") {
        return (
          <View style={styles.runningContainer}>
            <Text style={styles.stateText}>
              {runState.state === "paused" ? "PAUSE" : "RUNNING"}
            </Text>
            {report()}
            <View style={styles.groupButtons}>
              <TouchableOpacity
                onPress={() =>
                  this.handleRunStateChange(
                    runState.state === "paused" ? "resume" : "paused"
                  )
                }
                style={[styles.circleButton, styles.pauseButton]}
              >
                <Text style={{ fontSize: 15, color: "#ffffff" }}>
                  {runState.state === "paused" ? "RESUME" : "PAUSE"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.handleRunStateChange("finished")}
                style={[styles.circleButton, styles.finishButton]}
              >
                <Text style={{ fontSize: 15, color: "#ffffff" }}>FINISH</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      } else if (runState.state == "finished") {
        return (
          <View style={styles.runningContainer}>
            <Text style={styles.stateText}>FINISHED</Text>
            {report()}
            <View style={styles.groupButtons}>
              <Button
                onPress={() => this.resetStopwatch()}
                style={styles.shareButton}
                title="BACK"
              ></Button>
            </View>
          </View>
        );
      } else {
        return (
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                paddingTop: 35,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.handleRunStateChange("running");
                }}
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 50,
                  backgroundColor: "#F3F6BD",
                  marginRight: 25,
                }}
              >
                <Feather name="settings" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.handleRunStateChange("running");
                }}
                style={{
                  width: 120,
                  height: 120,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 120,
                  backgroundColor: "#F3F6BD",
                }}
              >
                <MaterialCommunityIcons name="run" size={55} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.handleRunStateChange("running");
                }}
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 50,
                  backgroundColor: "#F3F6BD",
                  marginLeft: 25,
                }}
              >
                <FontAwesome name="music" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        );
      }
    } else {
      return null;
    }
  };

  render() {
    return (
      <View style={{}}>
        <View
          style={{
            marginTop: 20,
            marginBottom: 10,
            marginLeft: 20,
            flexDirection: "row",
          }}
        >
          <MaterialIcons name="run-circle" size={30} color="black" />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
            }}
          >
            Run
          </Text>
        </View>
        <View style={styles.container}>{this.renderMap()}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  pauseButton: {
    backgroundColor: "#93A85C",
  },
  container: {
    backgroundColor: "#fff",
  },
  child: {
    fontSize: 40,
    color: "#C89933",
  },
  map: {
    height: 550, // need updates
    width: 450,
  },

  duration: {
    fontSize: 25,
    fontWeight: "500",
  },
  groupButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  borderMiddle: {
    width: 2,
    height: 40,
    marginHorizontal: 10,
    marginTop: 30,
    backgroundColor: "#000",
  },
  runningContainer: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingVertical: 15,
  },
  finishButton: {
    backgroundColor: "#34550B",
  },
  parent: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 80,
    borderColor: "#694966",
    backgroundColor: "#694966",
    paddingLeft: "8%",
    paddingRight: "8%",
    paddingTop: ".5%",
    paddingBottom: ".5%",
  },
  buttonParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "12%",
  },

  button: {
    backgroundColor: "#694966",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    display: "flex",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#694966",
    height: 60,
  },

  buttonText: {
    color: "#C89933",
    fontSize: 20,
    alignSelf: "center",
  },
  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,

    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
