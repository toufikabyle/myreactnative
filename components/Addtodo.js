import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Addtodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    if (title.length > 0) {
      addTodo(title);
      setTitle("");
    } else {
      alert("Do not remind yourself to do nothing?");
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <TextInput
        placeholder="Todos"
        placeholderTextColor="black"
        style={styles.input}
        onChangeText={(title) => setTitle(title)}
        value={title}
      />
      <TouchableOpacity style={styles.center} onPress={() => onSubmit()}>
        <Text title="Add" style={styles.button}>
          Submit
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export default Addtodo;

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 0,
    borderWidth: 3,
    fontSize: 28,
    paddingStart: 8,
    backgroundColor: "white",
    flex: 1,
    height: 50,
  },
  container: {
    flexDirection: "row",
  },
  button: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  center: {
    width: "30%",
    backgroundColor: "#2596be",
    borderWidth: 3,
    height: 50,
    flex: 0.3,
    justifyContent: "center",
  },
});