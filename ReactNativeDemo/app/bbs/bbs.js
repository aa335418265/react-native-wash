
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  Button
} from 'react-native';


export default class BBS extends React.Component {
  static navigationOptions = {
    title: '月亮社区',
  };
  render() {
        return (
            //根View
            <View style={styles.container}>
                <Image style={styles.imageStyle}
                       source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {   //根View样式
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    imageStyle: {
        width:100,
        height:100
    }
});

