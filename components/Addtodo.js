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
        placeholder="tape here ..."
        placeholderTextColor="#69bdd2"
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
    borderWidth: 4,
    borderColor:"#063970",
    fontSize: 20,
    paddingStart: 8,
    backgroundColor: "white",
    flex: 0.8,
    height: 50,
  },
  container: {
    flexDirection: "row",
  },
  button: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    borderColor: '#fff'
  },
  center: {
    width: "30%",
    backgroundColor: "#2596be",
    borderWidth: 4,
    
    borderColor:"#063970",
    height: 50,
    flex: 0.2,
    justifyContent: "center",
    
  },
});