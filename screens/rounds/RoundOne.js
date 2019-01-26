import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SettingsPlayerTwo from '../SettingsPlayerTwo';



export default class RoundOne extends Component {
  
  verify = () => {
    console.log(SettingsPlayerTwo.state.pTwoName)
    alert()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeader}>
          Round One!
        </Text>

        <Button title="verify" onPress={this.verify} />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 20
  },

  mainHeader: {
    marginBottom: 5,
    fontSize: 26,
    color: "#2c3e50",
  },
  button: {
    color: "#2c3e50"
  }
});