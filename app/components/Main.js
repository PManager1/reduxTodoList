import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';

var TodoItem = React.createClass({
    render(){
      return(
        <View style={styles.todoContainer}>
            <Text style={styles.todoText}>
                {this.props.text}
            </Text>
        </View>
      )
    }
});


var Main =  React.createClass ({
  getInitialState() {
      return {
        newTodoText: ""
      }
  },
  addNewTodo() {
              // here we grab this  newTodoText  value from our state.
    var {newTodoText} = this.state;
              //if newTodoText exists && its not empty, if both previous conditions met, then we'll just ignore that somebody submitted it.
    if (newTodoText && newTodoText != ""){
      this.setState({
          newTodoText: ""
      });
      console.log(' newTodoText = ', newTodoText);
    }
  },
  render() {
  var temporaryTodos = [
    {
      id: "2323432",
      text: "Hello!"
    },
    {
      id: "2323232",
      text: "Hello Again!"
    },
  ]

var renderTodos = () => {
        return temporaryTodos.map((todo) => {
            return (
              <TodoItem text={todo.text} key={todo.id} id={todo.id}/>
            )
        });
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.topBar}>
          <Text style={styles.title}> To-DO List
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            returnKeyType="done"
            placeholder="New TO-DO"
            value={this.state.newTodoText}
            onSubmitEditing={this.addNewTodo}
            onChange={(event) => {
            this.setState({
                newTodoText: event.nativeEvent.text
            })
          }}

            />
        </View>

        <ScrollView
          automaticallyAdjustContentInsets={false}>
          {renderTodos()}

        </ScrollView>

      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  topBar:{
    padding:16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title:{
    color: 'white',
    fontSize: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputContainer:{
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc71'
  },
  input:{
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  todoContainer: {
    padding: 16,
    borderTopWidth:1,
    borderBottomWidth:1,
    marginBottom: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoText: {

  },
});

module.exports = Main;
















//
