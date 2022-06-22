/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ButtonCart, Inputan, Jarak, } from '../../components';
import { Ilustrasi, Logo } from '../../assets';
import { color, fonts, responsiveHeight } from '../../utils';

export default class Login extends Component {

  render() {
    return (
        <View style={styles.pages}>
          <View style={styles.logo}>
            <Logo />
          </View>
          <View style={styles.cardLogin}>
            <Inputan label="Email" />
            <Inputan label="Password" secureTextEntry />
            <Jarak height={25} />
            <ButtonCart title="Login" type="text" padding={12} fontSize={18}  onPress={() => this.props.navigation.navigate('Register1')}/>
          </View>

            <View style={styles.register}>
                <Text style={styles.textBlue}>Belum Punya Akun ?</Text>
                <Text style={styles.textBlue} onPress={() => this.props.navigation.navigate('Register1')}>Klik Untuk Daftar</Text>
            </View>
          
         
        </View>
    );
  }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: color.white,
      },
      ilustrasi: {
        position: 'absolute',
        bottom: 0,
        right: -100,
      },
      logo: {
        alignItems: 'center',
        marginTop: responsiveHeight(70)
      },
      cardLogin: {
        backgroundColor: color.white,
        marginHorizontal: 30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
        padding: 30,
        borderRadius: 10,
        marginTop: 10
      },
      register: {
          alignItems: 'center',
          marginTop: 10
      },
      textBlue: {
          fontSize: 18,
          fontFamily: fonts.primary.bold,
          color: color.primary
      }
});