import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

// import stylesheet 
import GameStartStyles from './GameStartStyles';

type Props = {};
export default class GameStartScreen extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={GameStartStyles.welcome}>Remember ME or don't ?</Text>
      </View>
    );
  }
}