import {Text, StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {color, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {IlustrasiRegistrasi1} from '../../assets/images';
import {Jarak, Inputan, ButtonCart} from '../../components';
export default class Register1 extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.btnBack}>
              <ButtonCart
                icon="arrow-left"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
            <View style={styles.ilustrasi}>
              <IlustrasiRegistrasi1 />
              <Text style={styles.title}>Daftar</Text>
              <Text style={styles.title}>Isi Daftar Diri Anda</Text>

              <View style={styles.wrapperCircle}>
                <View style={styles.circlePrimary}></View>
                <Jarak width={10} />
                <View style={styles.circleDisabled}></View>
              </View>
            </View>
            <View style={styles.card}>
              <Inputan label="Nama" />
              <Inputan label="Email" />
              <Inputan label="No. Handphone" keyboardType="number-pad" />
              <Inputan label="Password" secureTextEntry />
              <Jarak height={25} />
              <ButtonCart
                title="Continue"
                type="textIcon"
                icon="submit"
                padding={10}
                fontSize={18}
                onPress={() => this.props.navigation.navigate('Register2')}
              />
            </View>
            </ScrollView>
         
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: color.white,
  },
  ilustrasi: {
    alignItems: 'center',
    marginTop: responsiveHeight(50),
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary.light,
    color: color.primary,
  },
  wrapperCircle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  circlePrimary: {
    backgroundColor: color.primary,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10,
  },
  circleDisabled: {
    backgroundColor: color.border,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10,
  },
  card: {
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
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  btnBack: {
    marginLeft: 30,
    position: 'absolute',
  },
});
