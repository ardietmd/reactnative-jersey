import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import { color, fonts } from '../../../utils'


const TextOnly = ({title, fontSize, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text(fontSize)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextOnly

const styles = StyleSheet.create({
    container:{
        backgroundColor: color.primary,
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    text: (fontSize) => ({
        color: color.white,
        textAlign: 'center',
        fontSize: fontSize ? fontSize : 13,
        fontFamily: fonts.primary.bold
    })
  
})
