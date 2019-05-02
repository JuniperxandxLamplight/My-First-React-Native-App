import React, { Component } from 'react';
import { Alert, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import shroomies from './assets/shroomies.jpg';

export default class HelloWorldApp extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onPressButton(){
    Alert.alert('You pressed the button you asshole')
  }

  render() {
    return (
      <ScrollView>
        <View style={{ padding: 10, flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput style={{flex: 2}}
        placeholder="What's Your Favorite Mushroom?"
        onChangeText={(text) => this.setState({text})}
        />
          <View style={{backgroundColor: 'aqua'}}>
            <Button
            onPress={this._onPressButton}
            title="Don't Press Me"
            color="blue"
            />
          </View>
          <Image source={shroomies} style={{flex: 2}}/>
          <Text style={{flex: 1}}>Super Cool Mushrooms</Text>
        </View>
      </ScrollView>
    );
  }
}
