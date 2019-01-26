import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button } from 'react-native';

export default class SettingsPlayerTwo extends Component {

  state = {
      pTwoName: "",
      pTwoFirstSecondary: "",
      pTwoSecondSecondary: "",
      pTwoThirdSecondary: "",
    }

  

  
  submitter = () => {
    const data = this.state;
    console.log(data);
    this.props.navigation.navigate("RoundOne")
  }


  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.mainHeader}>Player Two</Text>

        <TextInput
          placeholder="Enter name..."
          placeholderTextColor="black"
          style={styles.input}
          onChangeText={(itemValue, itemIndex) => this.setState({ pTwoName: itemValue })}
          value={this.state.itemValue}
        />

        <Text style={styles.optionName}>First Secondary</Text>
        <Picker
          selectedValue={this.state.pTwoFirstSecondary}
          onValueChange={(itemValue, itemIndex) => this.setState({ pTwoFirstSecondary: itemValue })}
        >
          <Picker.Item label="Select an option" value="" />
          <Picker.Item label="Headhunter: 1pt for each enemy Character that is destroyed." value="headhunter" />
          <Picker.Item label="*Kingslayer: 1 point for every 2 wounds to enemy character non-monster or vehicle and 1 point for every 4 wounds to character with vehicle or monster keyword.   " value="kingslayer" />
          <Picker.Item label="*Marked for Death: Choose 4 of your opponent’s units with a Power Level of 7+. Earn 1 pt for each of these units destroyed." value="markedForDeath" />
          <Picker.Item label="Big Game Hunter: 1 point for every enemy model with the Monster or Vehicle keyword and 7+ wounds destroyed." value="bigGameHunter" />
          <Picker.Item label="*Titan Slayers: For every 8 wounds lost by enemy units with the Titanic keyword in total throughout the course of the game, earn 1 point. " value="titanSlayer" />
          <Picker.Item label="The Reaper: For every 20 enemy models destroyed, earn 1 point." value="reaper" />
          <Picker.Item label="Recon: Have a unit at least partially in each table quarter at the end of your player turn." value="recon" />
          <Picker.Item label="Behind Enemy Lines: If at least one of your units is wholly in the enemy Deployment Zone at the start of your turn, earn 1 Point." value="behindEnemyLines" />
          <Picker.Item label="The Butcher’s Bill: Destroy 2+ enemy units during a player turn to earn 1 Point." value="butchersBill" />
          <Picker.Item label="Ground Control: Earn 1 point for each objective held at the end of the last Battle Round played." value="groundControl" />
          <Picker.Item label="Old School: Earn 1 point for the following: First Strike, Slay the Warlord, Linebreaker, Last Strike" value="oldSchool" />

        </Picker>

        <Text style={styles.optionName}>Second Secondary</Text>
        <Picker
          selectedValue={this.state.pTwoSecondSecondary}
          onValueChange={(itemValue, itemIndex) => this.setState({ pTwoSecondSecondary: itemValue })}
        >
          <Picker.Item label="Select an option" value="" />
          <Picker.Item label="Headhunter: 1pt for each enemy Character that is destroyed." value="headhunter" />
          <Picker.Item label="*Kingslayer: 1 point for every 2 wounds to enemy character non-monster or vehicle and 1 point for every 4 wounds to character with vehicle or monster keyword.   " value="kingslayer" />
          <Picker.Item label="*Marked for Death: Choose 4 of your opponent’s units with a Power Level of 7+. Earn 1 pt for each of these units destroyed." value="markedForDeath" />
          <Picker.Item label="Big Game Hunter: 1 point for every enemy model with the Monster or Vehicle keyword and 7+ wounds destroyed." value="bigGameHunter" />
          <Picker.Item label="*Titan Slayers: For every 8 wounds lost by enemy units with the Titanic keyword in total throughout the course of the game, earn 1 point. " value="titanSlayer" />
          <Picker.Item label="The Reaper: For every 20 enemy models destroyed, earn 1 point." value="reaper" />
          <Picker.Item label="Recon: Have a unit at least partially in each table quarter at the end of your player turn." value="recon" />
          <Picker.Item label="Behind Enemy Lines: If at least one of your units is wholly in the enemy Deployment Zone at the start of your turn, earn 1 Point." value="behindEnemyLines" />
          <Picker.Item label="The Butcher’s Bill: Destroy 2+ enemy units during a player turn to earn 1 Point." value="butchersBill" />
          <Picker.Item label="Ground Control: Earn 1 point for each objective held at the end of the last Battle Round played." value="groundControl" />
          <Picker.Item label="Old School: Earn 1 point for the following: First Strike, Slay the Warlord, Linebreaker, Last Strike" value="oldSchool" />

        </Picker>

        <Text style={styles.optionName}>Third Secondary</Text>
        <Picker
          selectedValue={this.state.pTwoThirdSecondary}
          onValueChange={(itemValue, itemIndex) => this.setState({ pTwoThirdSecondary: itemValue })}
        >
          <Picker.Item label="Select an option" value="" />
          <Picker.Item label="Headhunter: 1pt for each enemy Character that is destroyed." value="headhunter" />
          <Picker.Item label="*Kingslayer: 1 point for every 2 wounds to enemy character non-monster or vehicle and 1 point for every 4 wounds to character with vehicle or monster keyword.   " value="kingslayer" />
          <Picker.Item label="*Marked for Death: Choose 4 of your opponent’s units with a Power Level of 7+. Earn 1 pt for each of these units destroyed." value="markedForDeath" />
          <Picker.Item label="Big Game Hunter: 1 point for every enemy model with the Monster or Vehicle keyword and 7+ wounds destroyed." value="bigGameHunter" />
          <Picker.Item label="*Titan Slayers: For every 8 wounds lost by enemy units with the Titanic keyword in total throughout the course of the game, earn 1 point. " value="titanSlayer" />
          <Picker.Item label="The Reaper: For every 20 enemy models destroyed, earn 1 point." value="reaper" />
          <Picker.Item label="Recon: Have a unit at least partially in each table quarter at the end of your player turn." value="recon" />
          <Picker.Item label="Behind Enemy Lines: If at least one of your units is wholly in the enemy Deployment Zone at the start of your turn, earn 1 Point." value="behindEnemyLines" />
          <Picker.Item label="The Butcher’s Bill: Destroy 2+ enemy units during a player turn to earn 1 Point." value="butchersBill" />
          <Picker.Item label="Ground Control: Earn 1 point for each objective held at the end of the last Battle Round played." value="groundControl" />
          <Picker.Item label="Old School: Earn 1 point for the following: First Strike, Slay the Warlord, Linebreaker, Last Strike" value="oldSchool" />

        </Picker>

        <Button title="Next" onPress={this.submitter} />

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
    color: "#2c3e50"
  },

  input: {
    height: 40,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'grey'
  }
});