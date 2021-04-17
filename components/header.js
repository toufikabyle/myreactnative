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
    backgroundColor: "#063970",
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "center",
  },
  text: {
    textShadowColor: 'white',
    textShadowOffset: {width: 2, height: 2},
  textShadowRadius: 20,
    fontSize: 50,
    color: "#063970",
    textAlign: "center",
  },
  text2: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});