import React, { Component } from 'react';
import { Alert, Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class App extends Component {
  state = {
    state: ''
  }

  shopNow = () => {
    const { state } = this.state;
    Alert.alert(` You entered the state name ${state}`);
    const weather = `http://api.apixu.com/v1/current.json?key=6b73dc4dbb9c4dee84b130022192201&q=${state}`
    console.log(weather, 'weather')
  }

  handleChange = (state) => {
    console.log({ state })
    this.setState({ state })
  }

  render() {
    // let api = {
    //   uri: `http://api.apixu.com/v1/current.json?key=6b73dc4dbb9c4dee84b130022192201&q=${state}`
    // }
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder="Enter A State Name"
            onChangeText={this.handleChange}
            value={this.state.state}
          />

          <Button
            title="Predict Weather"
            onPress={this.shopNow}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textinput: {
    color: 'red',
    borderBottomColor: 'black',
    height: 20
  },
  shopNowButton: {
    backgroundColor: '#9CFF33',
    color: '#9CFF33',
  }
});
