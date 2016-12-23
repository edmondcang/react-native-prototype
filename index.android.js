/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  Text,
  StatusBar,
  Navigator,
  View
} from 'react-native';

import { Container, Header, Title, Button, Icon } from 'native-base';

export default class ReactNativePrototype1 extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Button transparent>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Header</Title>

          <Button transparent>
            <Icon name="ios-menu" />
          </Button>
        </Header>
      </Container>
    );
  }
}

const titleConfig = {
  title: 'foo'
};

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hallo !'),
};

const stretchView = {
  alignSelf: 'stretch'
};

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    borderColor: '#ccc',
    ...stretchView,
  },
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
