import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconKeranjang, IconArrowLeft, KeranjangPutih} from '../../../assets/icons';
import {color, fonts} from '../../../utils';


const TextIcon = ({ icon, onPress, title, fontSize }) => {

  const Icon = () => {
    if (icon === 'keranjang') {
      return <IconKeranjang />;
    } else if (icon === 'arrow-left') {
      return <IconArrowLeft />;
    } else if (icon === 'keranjang-putih') {
        return <KeranjangPutih />
    }
    return <IconKeranjang />;
  };


  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.tittle(fontSize)}> {title}</Text>
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tittle: (fontSize) => ({
    color: color.white,
    fontSize: fontSize ? fontSize : 15,
    fontFamily: fonts.primary.bold,

  })
});
