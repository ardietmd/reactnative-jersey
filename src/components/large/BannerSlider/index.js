import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Slider1, Slider2} from '../../../assets/images';
import {SliderBox} from 'react-native-image-slider-box';
import {color, responsiveHeight, responsiveWidth} from '../../../utils';

export default class BannerSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [Slider1, Slider2],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
        //   autoplay
        //   circleLoop
          sliderBoxHeight={responsiveHeight(132)}
          ImageComponentStyle={styles.slider}
          dotStyle={styles.styleDot}
          dotColor={color.primary}
          imageLoadingColor={color.primary}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: -15
    },
    slider: {
        width: responsiveWidth(354),
        borderRadius: 10
    },
    styleDot: {
        width: 10,
        height: 5,
        borderRadius: 5
    }
});
