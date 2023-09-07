import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5, Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { titles, colors, btn1, hr80} from '../globals/style'
const HomeHeadNav = () => {
    return (
        <View style={styles.container}>
            <Fontisto name="nav-icon-list-a" size={24} color="black" style={styles.myicon} />
            <View style={styles.containerin}>
                <Text style={styles.mytext}>Foodie</Text>
                <MaterialCommunityIcons name="food-outline" size={24} color="black" style={styles.myicon} />
            </View>
            <FontAwesome5 style={styles.myicon} name='user-circle' color="black" />
        </View>
    )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: colors.col1,
       // height: 50,
        padding: 10,
        elevation:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    containerin: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    myicon: {
        marginRight: 10,
        color: colors.text1,

    },
    mytext: {
        color: colors.text1,
        fontWeight: 'bold',
        fontSize: 18,
    },
})