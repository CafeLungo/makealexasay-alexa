import React from 'react';
import  UselessTextInput  from './UselessTextInput'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
        </View>
        <View style={[styles.box, styles.box2]}>
          <UselessTextInput/>
        </View>
        <View style={[styles.box, styles.box3]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
//header
  box1: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
//content
  box2: {
    flex: 10,
    backgroundColor: '#8BC34A',
    justifyContent: 'center'
  },
//footer
  box3: {
    flex: .5,
    backgroundColor: '#e3aa1a'
  }
});