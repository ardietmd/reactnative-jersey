import React from 'react'
import { Image, StyleSheet, TouchableOpacity} from 'react-native'
import { color, responsiveHeight, responsiveWidth } from '../../../utils'

const CardLiga = ({liga}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={liga.gambar} style={styles.image}/>
        </TouchableOpacity>
    )
}

export default CardLiga

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.white,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
        borderRadius: 15,
      },
    image: {
        width: responsiveWidth(57),
        height: responsiveHeight(70),
    }
})
