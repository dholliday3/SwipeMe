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

export default class OptionsPage2 extends Component {
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
        <Text style={{fontSize: 50, fontStyle: 'italic', textAlign: 'center'}}>
        How Many Meal Swipes Will You Need?
        </Text>
        <Picker
          selectedValue={this.state.chosenDate}
          onValueChange={this.setDate}>
          <Picker.Item label="1" value="one" />
          <Picker.Item label="2" value="two" />
          <Picker.Item label="3" value="three" />
          <Picker.Item label="4" value="four" />
          <Picker.Item label="More than 4" value="fiveplus" />
        </Picker>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
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