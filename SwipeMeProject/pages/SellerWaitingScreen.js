import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, View, Image } from 'react-native';

export default class SellerWaitingScreen extends Component {
  _onPressCancel() {
    Alert.alert(
      "Are you sure you want to cancel?",
      'You will be sent back to the home screen.',
      [
        {text: 'Yes'},
        {text: 'No'},
      ],
        //{cancelable: false}
      )
  }

  _onFindingMatch() {
    myVar = setTimeout(function(){ Alert.alert("Timed out.",
            "Going back to home screen.\nRemember to check your phone!",
            [{text: 'Ok'}],
            {cancelable: false}); }, 30000);
    myVar;
    Alert.alert(
      "A match has been found.",
      'Are you ready to sell?\n(30 second timer)',
      [
        {text: 'Yes', onPress: () => {clearTimeout(myVar)}},
        {text: 'No', onPress: () => {clearTimeout(myVar)}},
      ],
      {cancelable: false}
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/621-200.png'}}
          style={{width: 140, height: 140, marginTop: 50}}/>

        <Text style = {styles.blue}>Waiting for a match...</Text> 
            
        <View style={styles.buttonContainer}>
            <Button
                onPress={this._onPressCancel}
                title="Cancel sale"
                color="#841584"
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
   alignItems: 'center',
  },
  buttonContainer: {
    margin: 100
  },
  blue: {
    fontSize: 25,
    color: 'blue',
    textAlign: 'center',
    marginTop: 60
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
