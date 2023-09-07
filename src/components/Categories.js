import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import {colors} from '../globals/style'

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" 
          style={styles.myicon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="pizza-slice" size={24} color="black" 
          style={styles.myicon}
          />
          <Text style={styles.text}>pizza</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons name="noodles" size={24} color="black" 
          style={styles.myicon}
          />
          <Text style={styles.text}>Noodles</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" 
          style={styles.myicon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" 
          style={styles.myicon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" 
          style={styles.myicon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
container: {
  backgroundColor:colors.col1,
  width: '90%',
  elevation:10,
  borderRadius: 10,
},
head: {
  color:colors.text1,
  fontSize: 20,
  fontWeight: '300',
  margin:10,
  alignSelf: 'center',
  paddingBottom:5,
  borderBottomColor: colors.text1,
  borderBottomWidth:1,
},
box:{
  backgroundColor:colors.col1,
  elevation:20,
  margin:10,
  padding:10,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  
},
myicon:{
  color:colors.text3,
  marginRight:10,
},
mytext: {
  color:colors.text3,
},

})