import React from 'react';
import { StyleSheet, Text, View, Wrapper, Button } from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SettingsPlayerOne from './screens/SettingsPlayerOne';
// import SettingsPlayerTwo from './screens/SettingsPlayerTwo';
// import RoundOne from './screens/rounds/RoundOne'

import Header from './components/Header';

export default class App extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     pOneScore: 0,
  //     pTwoScore: 0,
  //     pOneName: "jack",
  //     pTwoName: "jill",
  //     pOneFirstSecondary: "",
  //     pOneSecondSecondary: "",
  //     pOneThirdSecondary: "",
  //     pTwoFirstSecondary: "",
  //     pTwoSecondSecondary: "",
  //     pTwoThirdSecondary: "",
  //   }
  // }



  render() {
    return (

      
        <TrackerContainer />
    

    );
  }
}

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  }
});

const TrackerContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
