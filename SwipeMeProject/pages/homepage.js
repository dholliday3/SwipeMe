import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image, Value} from 'react-native';

export default class HomePage extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '100%', height: '55%', backgroundColor: 'steelblue'}}
        />
        <View style={styles.buyButtonContainer}>
          <Button style={{height: 100}}
            onPress={() => this.props.navigation.navigate('optionsPage1')}
            title="Buyer"
          />
        </View>
        <View style={styles.sellButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Seller"
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


