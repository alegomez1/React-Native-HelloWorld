import React from 'react';
import Axios from 'axios'

import {Dimensions, Image,ImageBackground, AppRegistry, View, Text, StatusBar, StyleSheet} from 'react-native';

import picSierra from './assets/Sierra-Spencer.png'
import picTanner from './assets/Tanner-McTab.png'


class NewApp extends React.Component {

    state={
        backgroundColor: 'blue'
    }

    componentDidMount(){
        console.log('Component loaded')
        Axios.get('https://miami-transit-api.herokuapp.com/api/TrainTracker.json').then(respone =>{
            console.log('response----', respone)
        })
    }

    changeColor = (backgroundColor) =>{
        console.log('change color clicked!')
        this.setState({backgroundColor})
        this.changeColor = this.changeColor.bind(this)
    }

  render() {
      const { backgroundColor} = this.state
    return (
      <View style={[
          styles.container,
          {backgroundColor}
      ]}>
      <Text style={styles.button} onPress={() => this.changeColor('green')}>Green</Text>
      <Text style={styles.button} onPress={() => this.changeColor('red')}>Red</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({


    container:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center'
    },
    button:{
        fontSize: 30,
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'stretch',
        textAlign: 'center'
    }
})

AppRegistry.registerComponent('HelloWorld', () => NewApp);
export default NewApp;
