import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buyButton}>
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 3,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  buyButton: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})