import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconKeranjang, IconArrowLeft } from '../../../assets/icons'
import { color } from '../../../utils'
import TextIcon from './TextIcon'
import TextOnly from './TextOnly'

const ButtonCart = (props) => {

    const Icon = () => {
        if(icon === 'keranjang') {
            return <IconKeranjang />
        } else if (icon === 'arrow-left') {
            return <IconArrowLeft />
        } 
    
    return <IconKeranjang />
    }

    const { icon, totalKeranjang, type, onPress } = props;
        if(type === "text") {
            return <TextOnly {...props}/>
        } else if (type === "textIcon") {
            return <TextIcon {...props}/>
        }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon />
            {totalKeranjang && (
                <View style={styles.notif}>
                    <Text style={styles.textNotif}>{totalKeranjang}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default ButtonCart

const styles = StyleSheet.create({
    container:{
        backgroundColor: color.white,
        padding: 10,
        borderRadius: 5
    },
    notif: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'red',
        borderRadius: 3,
        padding: 3,
    },
    textNotif: {
        fontSize: 8,
        color: color.white
    }
})
