import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.title}> To-DO List
          </Text>
        </View>

        <Text style={styles.welcome}>
          Welcome to React from Main.js!
        </Text>
      </View>
    );
  }
}

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Main;
