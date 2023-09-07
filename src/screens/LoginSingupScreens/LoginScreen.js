import React, { useState } from 'react'
import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { titles, colors, btn1, hr80} from '../../globals/style'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const LoginScreen = ({navigation}) => {
  const [emailfocus,setEmailfocus] = useState(false);
  const [passwordfocus,setPasswordfocus] = useState(false);
  const [showpassword,setShowpassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign In</Text>
      <View style={styles.inputout}>
      <AntDesign name="user" size={24} 
      color={emailfocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Email' 
        onFocus={()=> {
          setEmailfocus(true);
          setPasswordfocus(false);
          setShowpassword(false);
        }}
        />
      </View>
      <View style={styles.inputout}
      color={emailfocus === true ? colors.text1 : colors.text2} >
        <MaterialCommunityIcons name='lock-outline' size={24} 
      color={passwordfocus == true ? colors.text1 : colors.text2}  />
        <TextInput style={styles.input} placeholder='Password' 
        onFocus={()=>{
          setEmailfocus(false);
          setPasswordfocus(true);
        }}
        secureTextEntry={showpassword === false ? true : false}
        />
        <Octicons name={showpassword == false ? "eye-closed" : "eye"} size={24} color="black"
        onPress={()=>{
          setShowpassword(!showpassword);
        }} />
      </View>
      <TouchableOpacity style={btn1} onPress={()=>{
        navigation.navigate('home');
      }}>
        <Text style={{color:colors.col1,fontSize: titles.btntxt,
           fontWeight:"bold"}}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.forgot}>Forgot Password</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In With</Text>

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
      
      <Text >Dont have an account ? 
          <Text style={styles.signup} onPress={()=>navigation.navigate('signup')}> Sign Up</Text>
      </Text>
      

    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  }
});
export default LoginScreen