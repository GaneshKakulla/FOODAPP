import { View, Text, StyleSheet,StatusBar,TextInput } from 'react-native'
import React from 'react'
import HomeHeadNav from '../components/HomeHeadNav';
import Categories from '../components/Categories';
import Offerslider from '../components/Offerslider';
import { AntDesign } from '@expo/vector-icons';
import {colors} from '../globals/style';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar />
        <HomeHeadNav />
        <View style={styles.searchBox}>
          <AntDesign name="search1" size={24} color="black" style={styles.searchIcon} />
          <TextInput placeholder='search' style={styles.input} />
        </View>
        
        <Categories />
        <Offerslider/>
      {/* <Text>HomeScreen</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.col1,
    alignItems: 'center',
    width: '100%',
    
  },
  searchBox: {
    flexDirection:'row',
    width: '90%',
    backgroundColor:colors.col1,
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    margin: 20,
    elevation:20,
  },
  input:{
    width: '90%',
    marginLeft:10,
    fontSize:10,
    color:colors.text1
    
  },
  searchIcon:{
    color:colors.text1,
  },
});
export default HomeScreen