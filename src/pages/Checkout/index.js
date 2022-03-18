import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { color, fonts, numberWithCommas, responsiveHeight } from '../../utils'
import { ButtonCart, CardAlamat, Jarak, Pilihan } from '../../components'
import { dummyPesanans, dummyProfile } from '../../data'



export default class CheckOut extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
         profile: dummyProfile,
         pesanan: dummyPesanans[0],
         expedisi: []
        
      }
    }
  render() {

    const {profile, pesanan, expedisi} = this.state;
      
    return (
      <View style={styles.pages}>
          <View style={styles.isi}>
            <Text style={styles.textBold}>Apakah benar alamat ini ?</Text>
          
            <CardAlamat profile={profile}/>

            <View style={styles.totalHarga}>
              <Text style={styles.textBold}>Total Harga :</Text>
              <Text style={styles.textBold}>
                Rp. {numberWithCommas(pesanan.totalHarga)}
              </Text>
            </View>
            
            <Pilihan label="pilih ekspedisi" datas={expedisi}/>
            <Jarak height={10}/>

            <Text style={styles.textBold}>Biaya Ongkir :</Text>

            <View style={styles.ongkir}>
              <Text style={styles.text}>Untuk Berat : {pesanan.berat} kg</Text>
              <Text style={styles.textBold}>Rp. {numberWithCommas(15000)}</Text>
            </View>
          
            <View style={styles.ongkir}>
              <Text style={styles.text}>Estimasi Waktu</Text>
              <Text style={styles.textBold}>2-3 Hari</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <View style={styles.totalHarga}>
              <Text style={styles.textBold}>Total Harga :</Text>
              <Text style={styles.textBold}>
                Rp. {numberWithCommas(pesanan.totalHarga+15000)}
              </Text>
            </View>
            <ButtonCart
              title=" Bayar"
              type="textIcon"
              fontSize={18}
              padding={responsiveHeight(15)}
              icon="keranjang-putih"
              onPress={() => this.props.navigation.navigate('Checkout')}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: color.white,
        paddingTop: 30,
        marginBottom: 30
    },
    isi: {
        paddingHorizontal: 30,
      },
    textBold: {
        fontSize: 18,
        fontFamily: fonts.primary.bold,
      },
    text: {
        fontSize: 18,
        fontFamily: fonts.primary.regular,
      },
    totalHarga: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
      },
    ongkir: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    footer: {
        paddingHorizontal: 30,
        backgroundColor: color.white,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 11,
        paddingBottom: 30,
        marginHorizontal: 50,
        marginVertical: 50,
      },
})