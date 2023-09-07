import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { colors } from '../globals/style'

const carouseldata = [
  {
    image: require('../../assets/OfferSliderImages/img1.png'),
    id: '1',
  },
  {
    image: require('../../assets/OfferSliderImages/img2.png'),
    id: '2',
  },
  {
    image: require('../../assets/OfferSliderImages/img3.png'),
    id: '3',
  },
]

const Offerslider = () => {
  return (
    <View>
      <View style={styles.offerslider}>
        <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true}
        dotColor={colors.text2} activeDotColor={colors.text1}
        nextButton={<Text style={styles.buttonText}>›</Text>}
        prevButton={<Text style={styles.buttonText}>‹</Text>}
    >
          <View style={styles.slider}>
            <Image source={require('../../assets/OfferSliderImages/img1.png')} style={styles.image}/>
          </View>
          <View style={styles.slider}>
            <Image source={require('../../assets/OfferSliderImages/img2.png')} style={styles.image}/>
          </View>
          <View style={styles.slider}>
            <Image source={require('../../assets/OfferSliderImages/img3.png')} style={styles.image}/>
          </View>
        </Swiper>
      </View>
    </View>
  )
}

export default Offerslider

const styles = StyleSheet.create({
  offerslider: {
    width: '100%',
    height: 200,
    backgroundColor: colors.col1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:10,
    marginVertical:10,
  },
  slider: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.col1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  buttonText: {
    color: colors.text1,
    fontSize: 40,
    fontWeight: '500',
    backgroundColor: 'white',
    borderRadius: 20,
    width:40,
    height:40,
    textAlign:'center',
    lineHeight:40,
  },
})
