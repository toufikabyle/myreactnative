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
            
            flex: 0.2,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            borderWidth: 2,
            borderColor:"red",
            paddingHorizontal:8,
            marginTop:7,
            
            
          }}
        >
          <Text style={{ fontSize: 15, color: "red",textShadowColor: 'red', textShadowRadius: 2,textShadowOffset: {width: 1, height: 1}, }}>Delete</Text>
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
    width: "98.5%",
    marginLeft: 3,
    padding: 0,
    borderColor: "#063970",
    borderWidth: 1.5,
    borderStyle: "solid",
    marginTop:4,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 0,
  },
  checkbox: {
    
    
    marginLeft: 15,
    marginTop:5,
  },
  label: {
    marginLeft: 5,
    marginTop:11,
    flex: 0.75,
    color:"red",
    paddingLeft: 10,
  },
  label2: {
    marginLeft: 5,
    marginTop:11,
    flex: 0.75,
    textDecorationLine: "none",
    paddingLeft: 10,
    color:"black"
  },
});