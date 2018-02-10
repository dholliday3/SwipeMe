import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image, Value} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27

class HomeScreen extends Component {
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
            onPress={this._onPressButton}
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

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
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

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

