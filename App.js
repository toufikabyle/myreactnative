import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Header from "./components/header";
import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";
import firebase from "./firebase";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [idOfUpdate, setIdOfUpdate] = useState(null);
  const [truth, setTruth] = useState();

  useEffect(() => {
    populate();
  }, []);

  useEffect(() => {
    let id = idOfUpdate;
    if (id !== null) {
      markCompleteGlobal();
    }
  }, [truth]);

  const markCompleteGlobal = () => {
    let id = idOfUpdate;
    const itemtoupdate = firebase.firestore().collection("t").doc(id);

    itemtoupdate.update({
      completed: truth,
    });
    // debugger
    setIdOfUpdate(null);
    setTruth(null);
  };

  // Toggle Complete
  const markComplete = (id) => {
    console.log("First", idOfUpdate);
    setIdOfUpdate(id);

    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;

          setTimeout(function () {
            setTruth(todo.completed);
          }, 10);
        }
        return todo;
      })
    );
    console.log("Second", idOfUpdate, truth);
  };

  // Delete Todo
  const delTodo = (id) => {
    const db = firebase.firestore();
    db.collection("t")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!", id);
      })
      .catch((error) => {
        console.error(id, "Error removing document: ", error);
      })
      .then((res) => setTodos([...todos.filter((todo) => todo.id !== id)]));
    console.log(id, "here is an id", id);
  };

  // Add Todo
  const addTodo = (title) => {
    const datas = {
      id: firebase.firestore().collection("t").doc().id,
    };
    const db = firebase.firestore();
    db.collection("t")
      .doc(datas.id)
      .set({ title: title, completed: false, id: datas.id })
      .then(() => {
        populate();
      });
  };

  const populate = (data) => {
    setTodos([]);
    return firebase
      .firestore()
      .collection("t")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let newData = doc.data();

          if (todos.indexOf(newData.id) === -1) {
            setTodos((arr) => {
              return [...arr, newData];
            });
          } else {
            console.log("this is a duplicate");
          }
          console.log("here are all of the todos", todos);
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <Header style={styles.one} />
      <Addtodo style={styles.two} addTodo={addTodo} />
      <View style={styles.three}>
        <ScrollView>
          <Todos todos={todos} markComplete={markComplete} delTodo={delTodo} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f4f4f4",
  },

  one: {
    flex: 0.1,
  },

  two: {
    flex: 0.1,
  },

  three: {
    flex: 1,
  },
});