import React from 'react';

import {AppRegistry, View, Text, StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    defaultText: {
        fontSize: 22,
        padding: 10,
        marginTop: 20,
        color: 'black'
    },
    selectedText:{
        backgroundColor: 'yellow'
    }
})

class NewApp extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}>Meredith</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Derek</Text>
        <Text style={styles.defaultText}>Christina</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => NewApp);
export default NewApp;
