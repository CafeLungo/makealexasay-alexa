import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Make Alexa say....' };
  }

  render() {
    return (
      <TextInput
    style={{height: 40, backgroundColor:'white', borderColor: 'grey', borderWidth: 1}}
    onChangeText={(text) => this.setState({text})}
    value={this.state.text}
    />
  );
  }
}