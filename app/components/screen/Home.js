import React from "react";
import { View, Text } from "react-native";
import {
  Scene,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  BoxBufferGeometry,
} from "three";

import { Renderer } from "expo-three";
import { GLView } from "expo-gl";

const App = () => {
  const onContextCreate = async (gl) => {
    //Thre js code
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    gl.canvas = {
      width: gl.drawingBufferWidth,
      height: gl.drawingBufferHeight,
    };
    camera.position.z = 2;

    const renderer = new Renderer({ gl });

    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const geometry = new BoxBufferGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: "green" });

    const cube = new Mesh(geometry, material);
    scene.add(cube);

    const render = () => {
      requestAnimationFrame(render);
      cube.rotation.x += 0.002;
      cube.rotation.y += 0.002;
      cube.rotation.z += 0.002;

      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    render();
  };

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <GLView
        onContextCreate={onContextCreate}
        style={{ width: 500, height: 500, backgroundColor: "white" }}
      />
      <Text style={{ fontSize: 30, color: "white" }}>Touch it</Text>
    </View>
  );
};

export default App;
