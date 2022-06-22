/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo} from '../../assets'
import { Ilustrasi } from '../../assets';

export default class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('MainApp')
        }, 3000)
    }

  render() {
    return (
        <View style={styles.pages}>
            <Logo />
            <View style={styles.ilustrasi}>
            <Ilustrasi />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    pages : { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
     },
    ilustrasi: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        bottom: 0
    }

});