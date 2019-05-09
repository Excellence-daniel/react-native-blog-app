import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  render() {
    let pic = {
      uri: 'https://i2.wp.com/infoguidenigeria.com/wp-content/uploads/2017/04/Newspaper.png?resize=600%2C414&ssl=1'
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          placeholder="Please enter your name"
          onChange={(name) => { this.setState({ name }) }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: 'center',
    padding: 20,
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textinput: {
    color: 'red',
    borderBottomColor: 'black',
    height: 20
  }
});
