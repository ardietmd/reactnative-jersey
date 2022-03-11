import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { fonts } from '../../../utils'

const Inputan = ({textArea, width, label, height, fontSize, placeHolder}) => {
    if(textArea) {
        return(
            <View style={styles.container}>
                <Text style={styles.label(fontSize)}>{label} :</Text>
                <TextInput style={styles.inputTextArea(fontSize)}/>
            </View>
        )
    }
  return (
    <View>
      <Text>{label}</Text>
      <TextInput style={styles.input(fontSize, width, height)}/>
    </View>
  )
}

export default Inputan

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  label: (fontSize) => ({
    fontSize: fontSize ? fontSize: 18,
    fontFamily: fonts.primary.regular
  }),
  input: (fontSize, width, height) => ({
    fontSize: fontSize ? fontSize: 18,
    fontFamily: fonts.primary.regular,
    width: width,
    height: height,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e0e0e0",
    paddingVertical: 5,
    paddingHorizontal: 10
  }),
  inputTextArea: (fontSize) => ({
    fontSize: fontSize ? fontSize: 18,
    fontFamily: fonts.primary.regular,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e0e0e0",
    paddingVertical: 5,
    paddingHorizontal: 10
  })
})