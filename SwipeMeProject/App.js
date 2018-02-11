import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation';
import HomePage from './pages/homepage';
import OptionsPage1 from './pages/optionsPage1';
import OptionsPage2 from './pages/optionsPage2';
import Profile from './pages/profile';


const RootStack = StackNavigator(
  {
    home: {
      screen: HomePage,
    },
    optionsPage1: {
      screen: OptionsPage1,
    },
    optionsPage2: {
      screen: OptionsPage2,
    },
    profile: {
      screen: Profile,
    },
  },
  {
    initialRoute: 'home',
  }
);


export default class App extends Component {
  render() {
    return <RootStack />;
  }
}