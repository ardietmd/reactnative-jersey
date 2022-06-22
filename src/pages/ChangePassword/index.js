import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Inputan from '../../components/small/Inputan'
import { color, fonts, responsiveHeight } from '../../utils'
import ButtonCart from '../../components/small/ButtonCart'
import { Jarak } from '../../components'


export default class ChangePassword extends Component {

  render() {
  
    return (
      <View style={styles.pages}>

          <View style={styles.wrapperPassword}>
           <Jarak height={30}/>
            <Inputan label="Password Lama" secureTextEntry/>
            <Inputan label="Password Baru" secureTextEntry/>
            <Inputan label="Konfirmasi Password" secureTextEntry/>
          </View>
         
          <View style={styles.submit}>
             <ButtonCart title="Submit" type="textIcon" icon="submit" padding={responsiveHeight(15)} fontSize={18}/>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    pages: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: 30,
    justifyContent: 'space-between'
},
    wrapperPassword: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
},
    submit: {
    marginVertical: 30,
    paddingHorizontal: 30,
}

})