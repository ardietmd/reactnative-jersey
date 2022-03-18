import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { color, fonts, responsiveWidth } from '../../../utils'
import ButtonCart from '../ButtonCart'

const CardJersey = ({jersey, navigation}) => {
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.container}>
                <Image source={jersey.gambar[0]} style={styles.gambar} />
                <Text style={styles.title}>{jersey.nama}</Text>
                <ButtonCart type="text" title="Detail Jersey" onPress={() => 
                navigation.navigate('JerseyDetail', {jersey})}/>
            </TouchableOpacity>
           
            
        </View>
    )
}

export default CardJersey

const styles = StyleSheet.create({
    
    container: {
        width: responsiveWidth(150),
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "thistle",
    },
    gambar: {
       width: 124,
       height: 124,
   },
   title: {
       fontFamily: fonts.primary.bold,
       fontSize: 13,
       textTransform: 'capitalize',
       textAlign: 'center',
       marginBottom: 20
   },
})
