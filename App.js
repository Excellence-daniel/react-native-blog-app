import React, { Component } from 'react';
import { Alert, Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import axios from 'axios';

export default class App extends Component {
  state = {
    state: '',
    weather: {}
  }

  shopNow = async () => {
    const { state } = this.state;
    Alert.alert(` You entered the state name ${state}`);
    const url = `http://api.apixu.com/v1/current.json?key=6b73dc4dbb9c4dee84b130022192201&q=${state}`
    const weather = await axios.post(url);
    // console.log(predict, 'State Wather')
    this.setState({ weather: weather.data });
    console.log(this.state.weather, 'wather state')
  }

  handleChange = (state) => {
    console.log({ state });
    this.setState({ state });
  }

  render() {
    const { weather } = this.state;
    console.log(weather, 'weather to prrree')
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
          <View style={styles.weatherResult}>
            <Text> State : {(weather.location && weather.location.name) || ''} </Text>
          </View>

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
  },
  weatherResult: {
    marginTop: 10,
  }
});
