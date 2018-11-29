/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import Video from 'react-native-video';

//import sounds
import sound from './src/assets/sounds/laser.mp3';

// import components
import GameStartScreen from './src/startScreen/GameStartScreen';

type Props = {};
export default class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            isGameOn: false,
            score: 0,
            level: 0,
        }

        this.startGame = this.startGame.bind(this);
    }
    startGame = () => {
        this.setState({
            isGameOn:true,
        });
    }
    render() {
        return ( 
        <View style = { styles.container }>
            <StatusBar backgroundColor = "#2E4053"
            barStyle = "light-content" />
            <Video source={sound}   // Can be a URL or a local file.
                repeat={false} 
                paused={!this.state.isGameOn}
                onLoadStart={ () => console.log("Loading sound" ) } 
                onBuffer={ () => console.log("Buffering sound" ) } 
                onEnd={ () => console.log("Ending sound" ) } 
                onError={ (err) => console.log(err)  }/> 
            <GameStartScreen setGameStart={() => this.startGame()}/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34495E',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})