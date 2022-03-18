/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import { ButtonCart, Jarak } from '../../small';
import { IconSeacrh } from '../../../assets/icons';
import {color, fonts, responsiveHeight} from '../../../utils';

export default class Header extends Component {

  render() {

    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <View style={styles.searchSection}>
            <IconSeacrh />
            <TextInput placeholder="Cari apa. . ." style={styles.input} />
          </View>
          <Jarak width={10}/>
          <ButtonCart icon="keranjang" totalKeranjang={2}  onPress={() => navigation.navigate('Keranjang')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    height: responsiveHeight(125),
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: color.white,
    borderRadius: 5,
    paddingLeft: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
  },
});
