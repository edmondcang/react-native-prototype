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
  Image,
  StatusBar,
  Navigator,
  View
} from 'react-native';

import {
  Container, Header, Title, Content, Footer, FooterTab, Button, Icon,
  Card, CardItem, Thumbnail
} from 'native-base';

import Drawer from 'react-native-drawer';

export default class ReactNativePrototype1 extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset:100,
      closedDrawerOffset:0,
      panOpenMask: .1,
      panCloseMask: .9,
      relativeDrag: false,
      panThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: false,
      negotiatePan: false,
      rightSide: true,
    };
  }
  closeDrawer = () => {
    this.drawer.close();
  };
  openDrawer = () => {
    this.drawer.open();
  };
  componentDidMount = () => {
  };
  render() {
    return (

      <Drawer
        ref={c => this.drawer = c}
        type="overlay"
        content={<Text>Hi</Text>}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        >
        <Container>

          <Header>
            <Button transparent>
              <Icon name="ios-arrow-back" />
            </Button>

            <Title>Header</Title>

            <Button transparent onPress={this.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Header>

          <Content>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Thumbnail source={require('./img/card-image.jpg')} />
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </CardItem>

              <CardItem>
                <Image style={{ resizeMode: 'cover', width: null }} source={require('./img/card-image.jpg')} />
              </CardItem>

              <CardItem>
                <Button transparent>
                  <Icon name="logo-github" />
                  1,926
                </Button>
              </CardItem>
           </Card>
          </Content>

          <Footer>
            <FooterTab>
              <Button transparent>
                <Icon name='ios-call' />
              </Button>
            </FooterTab>
          </Footer>

        </Container>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
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
