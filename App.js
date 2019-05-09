import React, { Component } from 'react';
import { Alert, Platform, StyleSheet, Text, View, Button, TextInput, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

export default class App extends Component {
  state = {
    state: '',
    weather: {},
    loading: false
  }

  predictWeather = async () => {
    const { state } = this.state;
    this.setState({ loading: true })
    if (state !== '') {
      // Alert.alert(` You entered the state name ${state}`);
      const url = `http://api.apixu.com/v1/current.json?key=6b73dc4dbb9c4dee84b130022192201&q=${state}`
      const weather = await axios.post(url);
      this.setState({ weather: weather.data, loading: false });
    } else {
      alert("Enter a Valid State Name");
      this.setState({ loading: false })
    }
  }

  handleChange = (state) => {
    console.log({ state });
    this.setState({ state });
  }

  render() {
    const { weather, loading } = this.state;
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
            onPress={this.predictWeather}
          />
          <View>{loading ? <ActivityIndicator style={{ marginTop: 20 }} size="small" color="#00ff00" /> : <Text></Text>}</View>

          <View style={styles.weatherResult}>
            <Text style={styles.weatherStyle}> State : {(weather.location && weather.location.name) || ''} </Text>
            <Text style={styles.weatherStyle}> Date / Time : {(weather.location && weather.location.localtime) || ''}</Text>
            <Text style={styles.weatherStyle}> Temperature (C) : {(weather.current && weather.current.temp_c) || ''}</Text>
            <Text style={styles.weatherStyle}> Temperature (F) : {(weather.current && weather.current.temp_f) || ''}</Text>
            <Text style={styles.weatherStyle}> Weather Status : {(weather.current && weather.current.condition.text) || ''}</Text>
            <Text style={styles.weatherStyle}> Weather Status Image : <Image source={(weather.current && weather.current.condition.icon) || ''} /></Text>
            <Text style={styles.weatherStyle}> Humidity : {(weather.current && weather.current.humidity) || ''}</Text>


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
    padding: 10
  },
  weatherStyle: {
    fontWeight: "bold",
    padding: 5
  }
});
