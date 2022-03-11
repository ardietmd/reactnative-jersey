/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { dummyMenu, dummyProfile } from '../../data';
import { color, fonts, responsiveHeight, responsiveWidth } from '../../utils';
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUi } from '../../utils/constant';
import { ListMenu } from '../../components';



export default class Profile extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       profile: dummyProfile,
       menus: dummyMenu
    }
  }

  render() {
    const {profile, menus} = this.state
    return (
        <View style={styles.pages}>
          <View style={styles.container}>
            <Image source={profile.avatar} style={styles.foto}/>
            <View style={styles.profile}>
              <Text style={styles.nama}>{profile.nama}</Text>
              <Text style={styles.desc}>No. HP : {profile.nomorHp}</Text>
              <Text style={styles.desc}>{profile.alamat}</Text>
              <Text style={styles.desc}>{profile.kota}</Text>
            </View>
            <ListMenu menus={menus}/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: color.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(680),
    width: '100%',
    backgroundColor: color.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
 foto: {
   alignSelf: 'center',
   width: responsiveWidth(150),
   height: responsiveHeight(150),
   borderRadius: 10,
   marginTop: responsiveWidth(-75)
 },
 profile: {
   marginTop: 10,
   alignItems: 'center'
 },
 nama: {
   fontFamily: fonts.primary.bold,
   alignItems: 'center',
   fontSize: RFValue(24, heightMobileUi)
 },
 desc: {
   fontFamily: fonts.primary.regular,
   fontSize: RFValue(18, heightMobileUi)
 }
});
