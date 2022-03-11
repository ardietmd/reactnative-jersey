import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { fonts, responsiveWidth } from '../../../utils'
import ButtonCart from '../ButtonCart'

const CardJersey = ({jersey, navigation}) => {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Image source={jersey.gambar[0]} style={styles.gambar} />
                <Text style={styles.title}>{jersey.nama}</Text>
            </TouchableOpacity>
           <ButtonCart type="text" title="Detail" onPress={() => 
            navigation.navigate('JerseyDetail', {jersey})}/>
            
        </View>
    )
}

export default CardJersey

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        width: responsiveWidth(150),
        alignItems: 'center',
        padding: 10,
        marginBottom: 5,
        borderRadius: 10
    },
    gambar: {
       width: 124,
       height: 124
   },
   title: {
       fontFamily: fonts.primary.bold,
       fontSize: 13,
       textTransform: 'capitalize',
       textAlign: 'center'
   }
})
