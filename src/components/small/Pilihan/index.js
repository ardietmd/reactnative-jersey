import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {color, fonts, responsiveHeight} from '../../../utils';
import { Picker } from '@react-native-picker/picker';

const Pilihan = ({label, datas, width, height, fontSize}) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <View style={styles.wrapperPicker}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker(width, height, fontSize)}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValue(itemValue)
          }>
          <Picker.Item label="--Pilih--" value="" style={{color: '#C4C4C4'}} />
          {datas.map((item, index) => {
              return <Picker.Item label={item} value={item} key={index} />
          })}
        </Picker>
      </View>
    </View>
  );
};

export default Pilihan;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: (fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
  }),
  picker: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
    width: width,
    height: height ? height : responsiveHeight(46),
    marginTop: -10,
    marginBottom: 10
  }),
  wrapperPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: color.border,
  }
});
