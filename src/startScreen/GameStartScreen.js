import React, {Component} from 'react';
import {Platform, Text, View, Image, TouchableOpacity} from 'react-native';


// import stylesheet 
import GameStartStyles from './GameStartStyles';

export default class GameStartScreen extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={GameStartStyles.container}>
         <Image
          style={{width: 100 , height: 100}}
          source={require('../assets/images/shapes.png')}
        />
        <Text style={GameStartStyles.welcome}>Remember Me?</Text>
        <TouchableOpacity style={GameStartStyles.startButtonContainer} onPress={this.props.setGameStart}>
          <View style={GameStartStyles.startButtonWrapper}>
            <Text style={GameStartStyles.welcome}>Start</Text>
          </View>
          <View style={GameStartStyles.startButtonShadow}></View>
        </TouchableOpacity>
      </View>
    );
  }
} 