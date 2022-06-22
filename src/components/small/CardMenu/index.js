import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {IconArrowRight} from '../../../assets';
import {color, fonts, responsiveHeight} from '../../../utils';

const CardMenu = ({menu, navigation}) => {
  return (
    <TouchableOpacity  style={styles.container} onPress={() => navigation.navigate(menu.halaman)}>
        <View style={styles.menu}>
            {menu.gambar}
            <Text style={styles.text}>{menu.nama}</Text>
        </View>
    
      <IconArrowRight />
    </TouchableOpacity >
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    backgroundColor: color.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 50,
    padding: responsiveHeight(15),
    borderRadius: 10,
    alignItems: 'center'
  },
  text: {
      fontFamily: fonts.primary.bold,
      marginLeft: 20,
      color: '#212121'
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
