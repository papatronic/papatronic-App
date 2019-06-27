import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './stacks/MainStack';

export default class App extends React.Component {
  render() {
    return (
      <MainStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
