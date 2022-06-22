import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils';

const Inputan = ({
  textArea,
  width,
  label,
  height,
  fontSize,
  placeHolder,
  value,
  secureTextEntry,
  keyboardType
}) => {
  if (textArea) {
    return (
      <View style={styles.container}>
        <Text style={styles.label(fontSize)}>{label} :</Text>
        <TextInput
          style={styles.inputTextArea(fontSize)}
          multiline={true}
          numberOfLines={3}
          value={value}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>{label}</Text>
      <TextInput style={styles.input(fontSize, width, height)} value={value} secureTextEntry={secureTextEntry} keyboardType={keyboardType}/>
    </View>
  );
};

export default Inputan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: fontSize => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
  }),
  input: (fontSize, width, height) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
    width: width,
    height: height,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e0e0e0',
    paddingVertical: 5,
    paddingHorizontal: 10,
  }),
  inputTextArea: fontSize => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e0e0e0',
    paddingVertical: 5,
    paddingHorizontal: 10,
  }),
  wrapperText: {
   paddingVertical: 5
  },
  boldText: {
    fontFamily: fonts.primary.bold
  }
});
