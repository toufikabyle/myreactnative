import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container2}>
      <Text style={styles.text}> TodoList </Text>
      <Text style={styles.text2}> Home | About </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container2: {
    backgroundColor: "#333",
    paddingTop: 20,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
  },
  text2: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});