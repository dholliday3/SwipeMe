import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, View, Image } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert("no")
  }

  _onPressCancel() {
    Alert.alert("Are you sure?")
  }

  render() {
    let pic = {
        uri: 'https://res.cloudinary.com/teepublic/image/private/s--E-fxVegu--/t_Preview/b_rgb:ffffff,c_lpad,f_jpg,h_630,q_90,w_1200/v1515227040/production/designs/2258222_3.jpg'
    };
    return (
      <View style={styles.container}>

        <Image source = {pic} style={{width: 200, height: 200}}/>
        <Text style = {styles.blue}>Name: Ugandan Knuckles{'\n'}
        Number: {'\t'}404-555-5555{'\n'}
        ETA: {'\t'}5 minutes</Text> 
            
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
    margin: 60
  },
  alternativeLayoutButtonContainer: {
    margin: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  blue: {
    fontSize: 20,
    color: 'blue',
    marginLeft: 15
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
