import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import {dummyPesanans} from '../../data'
import {ListHistory} from '../../components'
import { color } from '../../utils'

export default class History extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         pesanans: dummyPesanans
      }
    }
  render() {
      const {pesanans} = this.state
    return (
      <View style={styles.pages}>
        <ListHistory pesanans={pesanans} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: color.white,
    flex: 1
  }
})