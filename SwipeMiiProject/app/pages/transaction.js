import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, SectionList } from 'react-native';

export default class Transaction extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:40, textAlign:'center'}}>
        Transaction Information
        </Text>
        <SectionList
          sections={[
            {title: 'Buyer', data: ['Devin']},
            {title: 'Contact Information', data: ['123-456-7890']},
            {title: 'Restaurant', data: ['Olive']},
            {title: 'Meal Swipes', data: ['2']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('home')}
            title="Cancel"
          />
          <Button
            onPress={() => this.props.navigation.navigate('profile')}
            title="Confirm"
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
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});