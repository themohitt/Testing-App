import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ButtonComponent from "../Component/ButtonComponent";
import { StatusBar } from "react-native";
const Home = (props) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="light" />

      <Image style={styles.image} source={require("../assets/Images/1.jpeg")} />

      <Text style={styles.homeText}>Myntra</Text>

      {/**/}

      <ButtonComponent
        press={() =>
          props.navigation.navigate("Information", { username: input })
        }
      >More Information</ButtonComponent>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'white'
  },
  homeText: {
    color: "black",
    fontSize: 40,
    fontFamily: "open-sans-bold",
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    width: 175,
    height: 175,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "#C8C8C8",
    marginBottom: 6,
  },
  touchableContainer: {
    backgroundColor: "#fd2e53",
    width: "65%",
    borderRadius: 20,
    padding: 8,
  },
  textInsideTouchable: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
  },
});
