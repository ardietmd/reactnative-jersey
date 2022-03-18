import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { CardKeranjang } from '../../small';


const ListKeranjang = ({keranjangs}) => {
  return (
    <ScrollView >
      <View style={styles.container}>
        {keranjangs.map((keranjang) => {
          return <CardKeranjang keranjang={keranjang} key={keranjang.id} />;
        })}
      </View>
    </ScrollView>
  )
}

export default ListKeranjang

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    }
})