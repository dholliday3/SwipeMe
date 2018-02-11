import React, { Component } from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomePage from '../pages/homepage';
import Options1 from '../pages/options1';
import Options2 from '../pages/options2';
import Profile from '../pages/profile';
import Signup from '../pages/signup';
import BuyerConfirmed from '../pages/buyerFound';
import Finished from '../pages/finished';
import SellerWaiting from '../pages/sellerWaiting';
import Transaction from '../pages/transaction';

//functions
export const Home = StackNavigator(
  {
    home: {
      screen: HomePage,
    },
    options1: {
      screen: Options1,
    },
    options2: {
      screen: Options2,
    },
    profile: {
      screen: Profile,
    },
    signup: {
      screen: Signup,
    },
    buyerConfirmed: {
      screen: BuyerConfirmed,
    },
    finished: {
      screen: Finished,
    },
    sellerWaiting: {
      screen: SellerWaiting,
    },
    transaction: {
      screen: Transaction,
    },
  },
  {
    initialRoute: 'home',
  }
);

export const SignupStack = StackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Signup',
    },
  },
});

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Signup: {
    screen: SignupStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
