import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  StyleSheet,
  Picker,
  Button,
  Alert,
  Text,
  Image
} from 'react-native'

export default class App extends Component {
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
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={styles.image}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 80
  },
  image: {
    height: 100,
    borderRadius: 50,
    width: 100,
    alignSelf: 'center'
  }
})