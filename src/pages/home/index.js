/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {
  BannerSlider,
  ButtonCart,
  HeaderComponent,
  Jarak,
  ListJerseys,
  ListLiga,
} from '../../components';
import {dummyLiga, dummyJersey} from '../../data';
import {color, fonts} from '../../utils';
import { connect } from 'react-redux';
import {getUser, GET_USER} from '../../actions/UserAction';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ligas: dummyLiga,
      jerseys: dummyJersey,
    };
  }

// componentDidMount() {
//   this.props.getUser();
// }

  render() {
    const {ligas, jerseys} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        {/* <HeaderComponent navigation={navigation} /> */}
        <BannerSlider />
          <ScrollView>
            <View style={styles.pilihLiga}>
              <Text style={styles.label}>Pilih Liga</Text>
              <ListLiga ligas={ligas} />
            </View>
            <View style={styles.pilihJersey}>
              <Text style={styles.label}>
                Pilih <Text style={styles.labelBold}>Jersey</Text> yang anda suka
              </Text>
            
              {/* <ListJerseys jerseys={jerseys} navigation={navigation}/> */}
              {/* <ButtonCart type="text" title="Lihat Semua"/> */}
            </View>
          </ScrollView>
        <Jarak height={100}/>
        
      </View>
    );
  }
}

// const mapStateProps = (state) => ({
//   dataUser: state.UserReducer.dataUser
// })


export default Home
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: color.white,
  },
  pilihLiga: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  pilihJersey: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  labelBold: {
    marginBottom: 10,
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
});
