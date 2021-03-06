import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image, Value} from 'react-native';
import { isInLocation } from '../config/model';

export default class HomePage extends Component {
  _onPressButton = () => {
    var location = isInLocation(1, 1, 1, 1);
    Alert.alert('You tapped the button! ' + location)
    //Todo1: need to do something when touch seller photo
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '100%', height: '55%', backgroundColor: 'steelblue'}}
        />
        <View style={styles.buyButtonContainer}>
          <Button style={{height: 100}}
            onPress={() => this.props.navigation.navigate('options1')}
            title="Buy"
          />
        </View>
        <View style={styles.sellButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Sell"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
   //justifyContent: 'center',
  },
  buyButtonContainer: {
    marginTop: 60,
    flex: 2
  },
  sellButtonContainer: {
    //margin: 10
    flex: 3
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})


