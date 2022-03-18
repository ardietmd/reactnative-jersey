/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { ButtonCart, CardLiga, Inputan, Jarak, JerseySlider, Pilihan } from '../../components';
import { color, fonts, heightMobileUi, numberWithCommas, responsiveHeight, responsiveWidth } from '../../utils';
import { RFValue } from "react-native-responsive-fontsize";


export default class JerseyDetail extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       jersey: this.props.route.params.jersey,
       images: this.props.route.params.jersey.gambar
    }
  }

  render() {
    const {jersey, images} = this.state
    const {navigation} = this.props
    return (
        <View style={styles.pages}>
            <View style={styles.button}>
                <ButtonCart icon="arrow-left" onPress={() => navigation.goBack()} />
            </View>
            <JerseySlider images={images}/>
          <View style={styles.container}>
              <View style={styles.liga}>
                <CardLiga liga={jersey.liga}/>
              </View>
              
              <View style={styles.desc}>
                <Text style={styles.nama}>{jersey.nama}</Text>
                <Text style={styles.harga}>Harga: RP {numberWithCommas(jersey.harga)}</Text>

                <View style={styles.garis}/>
                <View style={styles.wraperDesc}>
                    <Text style={styles.wraperDesc}>Berat : {jersey.berat}</Text>
                    <Text style={styles.wraperDesc}>Kualitas : {jersey.jenis}</Text>
                </View>
                <View style={styles.wrapperInput}>
                    <Inputan
                      label="Jumlah"
                      width={responsiveWidth(166)}
                      height={responsiveHeight(43)}
                      fontSize={13}
                    />
                    <Pilihan
                      label="Pilih Ukuran"
                      textArea
                      width={responsiveWidth(166)}
                      height={responsiveHeight(43)}
                      fontSize={13}
                      datas={jersey.ukuran}
                    />
                </View>
                
                <Inputan style={styles.keterangan}
                  label="Keterangan"
                  textArea
                  fontSize={13}
                  placeholder="Isi jika ingin menambahkan Name Tag (nama & nomor punggung"
                  />

                  <Jarak height={13}/>
                <ButtonCart 
                  title="Masuk Keranjang"
                  type="textIcon"
                  icon="keranjang-putih"
                  padding={responsiveHeight(17)}
                  fontSize={18} />
              </View>
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
    height: responsiveHeight(450),
    width: '100%',
    backgroundColor: color.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
 button: {
     position: 'absolute',
     marginLeft: 30,
     marginTop: 30,
     zIndex: 1
 },
 desc: {
     marginHorizontal: 30
 },
 nama: {
     fontFamily: fonts.primary.bold,
     fontSize: RFValue(20, heightMobileUi),
     textTransform: 'capitalize'
 },
 harga: {
    fontFamily: fonts.primary.light,
    fontSize: RFValue(20, heightMobileUi),

 },
 liga: {
     alignItems: 'flex-end',
     marginRight: 30,
     marginTop: -30
 },
 garis: {
     borderWidth: 0.5,
     marginTop: 10
 },
 wraperDesc: {
     flexDirection: 'row',
     marginRight: 30,
     marginTop: 10
 },
 wrapperInput: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginTop: 10
 },
 keterangan: {
   marginBottom: 10
 }

});
