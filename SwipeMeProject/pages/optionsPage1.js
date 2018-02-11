import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  StyleSheet,
  Picker,
  Button,
  Alert,
  Text
} from 'react-native'

export default class OptionsPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 70, fontStyle: 'italic', textAlign: 'center'}}>
        Which Restaurant?
        </Text>
        <Picker
          selectedValue={this.state.chosenDate}
          onValueChange={this.setDate}>
          <Picker.Item label="Farm House" value="FH" />
          <Picker.Item label="Local Chef" value="LC" />
          <Picker.Item label="Olive" value="OL" />
          <Picker.Item label="Panera Bread" value="PB" />
          <Picker.Item label="Simple Servings" value="SS" />
          <Picker.Item label="Spice Trail" value="ST" />
          <Picker.Item label="Starbucks" value="SB" />
        </Picker>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('optionsPage2')}
            title="Confirm"
            color="#841584"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 90
  }
})