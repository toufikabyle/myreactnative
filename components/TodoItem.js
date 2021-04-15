import React from "react";

import {
  Switch,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  CheckBox,
  
  
} from "react-native";


const TodoItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          
          value={props.todo.completed}
          onValueChange={props.markComplete.bind(this, props.todo.id)}
        />
        <Text style={props.todo.completed ? styles.label : styles.label2}>
          {props.todo.title}{props.todo.completed ? "  👍" : ""}
        </Text>
        
        <TouchableOpacity
          onPress={props.delTodo.bind(this, props.todo.id)}
          id={props.todo.id}
          style={{
            backgroundColor: "white",
            flex: 0.1,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            paddingHorizontal:20,
          }}
        >
          <Text style={{ fontSize: 24, color: "#fff" }}>♻</Text>
        </TouchableOpacity>
        
        
        
      </View>
    </View>
  );
};
export default TodoItem;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: "#ff0000",
    color: "#fff",
    borderWidth: 0,
    borderRadius: 60,
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    width: "96%",
    marginLeft: 5,
    backgroundColor: "#f4f4f4",
    padding: 0,
    borderColor: "red",
    borderWidth: 1.5,
    borderStyle: "dotted",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  checkbox: {
    flex: 0.13,
    color: "red",
    marginLeft: 0,
  },
  label: {
    margin: 8,
    flex: 0.75,
    color:"red",
    paddingLeft: 10,
  },
  label2: {
    margin: 5,
    flex: 0.75,
    textDecorationLine: "none",
    paddingLeft: 10,
    color:"black"
  },
});