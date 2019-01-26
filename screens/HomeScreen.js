import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pOneScore: 0,
      pTwoScore: 0,
      pOneName: "jack",
      pTwoName: "jill",
      pOneFirstSecondary: "",
      pOneSecondSecondary: "",
      pOneThirdSecondary: "",
      pTwoFirstSecondary: "",
      pTwoSecondSecondary: "",
      pTwoThirdSecondary: "",
    }
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>


        <Header pOneName={this.state.pOneName} pOneScore={this.state.pOneScore}
          pTwoName={this.state.pTwoName} pTwoScore={this.state.pTwoScore} />

        <Button style={styles.button}
          title="Start Game"
          onPress={() => this.props.navigation.navigate("SettingsPlayerOne")}
        />

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