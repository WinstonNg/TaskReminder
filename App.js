import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TaskItem} from './TaskItem';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TaskItem handlePress={() => alert("Hello!")}></TaskItem>
      </View>
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
