/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativePrototype1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {'Welcome to React Native <3'}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const stretchView = {
  alignSelf: 'stretch'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    ...stretchView,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    ...stretchView,
  },
});

AppRegistry.registerComponent('ReactNativePrototype1', () => ReactNativePrototype1);
