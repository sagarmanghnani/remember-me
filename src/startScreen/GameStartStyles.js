import {StyleSheet} from 'react-native';
const GameStartStyles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems:'center',
      justifyContent:'center',
    },
    welcome: {
      fontSize: 40,
      textAlign: 'center',
      fontFamily: "GROBOLD",
      margin: 10,
      fontWeight: '200',
      // color: '#00a1a8',
      color: '#F2F3F4'
    },
    startButtonContainer:{
      marginTop: 100,
    },
    startButtonWrapper: {
      padding: 10,
      width: 200, 
      backgroundColor: '#27AE60',
      borderRadius: 7,
      zIndex: 1,
    },
    startButtonShadow:{
      padding: 20, 
      backgroundColor: '#196F3D',
      marginTop: -30,
      marginLeft: 5,
      borderRadius: 7,
      width: 195,
    }
  });

export default GameStartStyles ;  