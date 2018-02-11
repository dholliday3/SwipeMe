import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, View, Image } from 'react-native';

export default class FinishedScreen extends Component {

  _onPressHome() {
    Alert.alert("Link to home screen.")
  }

  render() {
    return (
      <View style={styles.container}> 
        <Text style = {styles.blue}>Thank you for your services!</Text>

        <View style={styles.buttonContainer}>
            <Button
                onPress={this._onPressHome}
                title="Home"
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
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
    marginTop: 120
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
