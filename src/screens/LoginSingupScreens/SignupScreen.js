import React, { useState } from 'react'
import { View, Text,StyleSheet, TextInput, TouchableOpacity,TextField,ScrollView,StatusBar,currentHeight, Image} from 'react-native'
import { titles, colors, btn1, hr80} from '../../globals/style'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const SignupScreen = ({navigation}) => {
  const [fullnamefocus,setFullnamefocus] = useState(false);
  const [emailfocus,setEmailfocus] = useState(false);
  const [passwordfocus,setPasswordfocus] = useState(false);
  const [phonefocus,setPhonefocus] = useState(false);
  const [showpassword,setShowpassword] = useState(false);
  const [showcpassword,setShowcpassword] = useState(false);
  const [cpasswordfocus,setcPasswordfocus] = useState(false);
  const [addressfocus,setAddressfocus] = useState(false);

  return (
    <ScrollView style={styles.containermain}>
        <View style={styles.container}>
      <Text style={styles.head1}>Sign Up</Text>

      <View style={styles.inputout}>
      <AntDesign name="user" size={24} 
      color={fullnamefocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Full Name' 
        onFocus={()=> {
          setFullnamefocus(true);
          setEmailfocus(false);
          setPhonefocus(false);
          setPasswordfocus(false);
          setShowpassword(false);
          setAddressfocus(false);
        }}
        />
      </View>


      <View style={styles.inputout}>
      <Entypo name="email" size={24} color={emailfocus === true ? colors.text1 : colors.text2}  />
        <TextInput style={styles.input} placeholder='Email' 
        onFocus={()=> {
          setEmailfocus(true);
          setPhonefocus(false);
          setPasswordfocus(false);
          setShowpassword(false);
          setAddressfocus(false);
        }}
        />
      </View>
      {/*  */}

      <View style={styles.inputout}>
      
      <Feather name="smartphone" size={24} color={phonefocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Phone Number' 
        onFocus={()=> {
            setFullnamefocus(false);
          setEmailfocus(false);
          setPhonefocus(true);
          setPasswordfocus(false);
          setShowpassword(false);
          setAddressfocus(false);
        }}
        />
      </View>
{/* password start */}

      <View style={styles.inputout}
      color={emailfocus === true ? colors.text1 : colors.text2} >
        <MaterialCommunityIcons name='lock-outline' size={24} 
      color={passwordfocus == true ? colors.text1 : colors.text2}  />
        <TextInput style={styles.input} placeholder='Password' 
        onFocus={()=>{
            setFullnamefocus(false);
          setEmailfocus(false);
          setPasswordfocus(true);
          setPhonefocus(false);
          setcPasswordfocus(false);
          setAddressfocus(false);
        }}
        secureTextEntry={showpassword === false ? true : false}
        />
        <Octicons name={showpassword == false ? "eye-closed" : "eye"} size={24} color="black"
        onPress={()=>{
          setShowpassword(!showpassword);
        }} />
      </View>
{/* password end */}
{/* confirm password start */}
      <View style={styles.inputout}
      color={emailfocus === true ? colors.text1 : colors.text2} >
        <MaterialCommunityIcons name='lock-outline' size={24} 
      color={cpasswordfocus == true ? colors.text1 : colors.text2}  />
        <TextInput style={styles.input} placeholder='Confirm Password' 
        onFocus={()=>{
            setFullnamefocus(false);
          setEmailfocus(false);
          setPhonefocus(false);
          setcPasswordfocus(true);
          setPasswordfocus(false);
          setAddressfocus(false);
        }}
        secureTextEntry={showcpassword === false ? true : false}
        />
        <Octicons name={showcpassword == false ? "eye-closed" : "eye"} size={24} color="black"
        onPress={()=>{
          setShowcpassword(!showcpassword);
        }} />
      </View>
{/* confirm password end */}     
{/* <Text style={styles.address}>Please enter address</Text> */}
    <View style={styles.inputout}
      color={addressfocus === true? colors.text1 : colors.text2} >
        <FontAwesome name="address-book" size={24} color={addressfocus === true ? colors.text1 : colors.text2} />
       
    <TextInput style={styles.input} placeholder='Address'
    onFocus={()=>{
        setAddressfocus(true);
      setFullnamefocus(false);
      setEmailfocus(false);
      setPhonefocus(false);
      setcPasswordfocus(false);
      setPasswordfocus(false);
    }}
    ></TextInput>
    </View>


      <TouchableOpacity style={btn1}>
        <Text style={{color:colors.col1,fontSize: titles.btntxt,
           fontWeight:"bold"}}>Sign Up</Text>
      </TouchableOpacity>

      {/* <Text style={styles.forgot}>Forgot Password</Text> */}
      <Text style={styles.or}>OR</Text>
      {/* <Text style={styles.gftxt}>Sign In With</Text> */}

      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <AntDesign name='google' size={24} color="#EA4335" />
          </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
          <View style={styles.gficon}>
            <FontAwesome5 name='facebook-f' size={24} color="#3b5998" />
          </View>

        </TouchableOpacity>
      </View>

      <View style={hr80}></View>
      
      <Text >You already have an account ? 
          <Text style={styles.signup} onPress={()=>navigation.navigate('login')}> Sign In</Text>
      </Text>
      
      </View>
    </ScrollView>
  )
}

const styles= StyleSheet.create({
    containermain: {
        //flex: 1,
        width: '100%',
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: '100%',
        verticalAlignment   : 'middle',
        paddingTop: StatusBar.currentHeight,
    
      },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: '100%',
    verticalAlignment   : 'middle',
    paddingTop: StatusBar.currentHeight,

  },
  head1: {
    fontSize: titles.title1,
    fontWeight: 'bold',
    color: colors.text1,
    textAlign: 'center',
    marginVertical:10,
  },
  inputout: {
    flexDirection: 'row',
    marginVertical: 10,
    width:'80%',
    backgroundColor:colors.col1,
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:10,
    alignSelf: 'center',
    elevation: 20,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  input: {
    fontSize: 18,
    //color: colors.text1,
    marginLeft: 10,
    width: '80%',
  },
  forgot: {
    //fontSize: 18,
    color: colors.text2,
    //textAlign: 'center',
   // marginVertical:10,
    marginTop:20,
    marginBottom:10,
  },
  or: {
    //fontSize: 18,
    color: colors.text1,
    //textAlign: 'center',
    marginVertical:10,
    fontWeight: 'bold',
  },
  gftxt: {
    fontSize: 25,
    color: colors.text2,
    //textAlign: 'center',
    marginVertical:10,
    
  },
  gf:{
    flexDirection: 'row',
    
  },
  gficon:{
    width: 50,
   // height: 50,
    margin:10,
    backgroundColor: '#fff',
    borderRadius: 10,
    //justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    elevation: 20,
  },
  signup: {
    color:colors.text1,
  },
  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: 'center',
    marginVertical:20,
  },
  swiperimage:{
    width: '20%',
    height: '20%',
    margin:10,
    backgroundColor: '#fff',
    borderRadius: 10,
  }
});
export default SignupScreen