import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default Header = props => {

  return (
    <View style={styles.container}>

      <Text style={styles.mainHeader}>
        ITC Points Tracker
      </Text>

      <Text >{props.pOneName} Score: {props.pOneScore} </Text>
      <Text >{props.pTwoName} Score: {props.pTwoScore} </Text>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
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
