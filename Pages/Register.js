import React from "react";
import { TouchableOpacity, Image, ImageBackground, Button, TextInput, View, Text, ScrollView } from 'react-native';
import { 
  ArimaMadurai_500Medium,
} from '@expo-google-fonts/arima-madurai'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


function Register({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [Email, onChangeEmail] = React.useState(null);
  const [Password, onChangePassword] = React.useState(null);
  let {fontLoad } = useFonts(
    {
      ArimaMadurai_500Medium 
    }
  );
  return (
    <ScrollView >
    <View style={styles.container}>
         
        <View style={styles.overlay}>
        <View style={{marginHorizontal:'auto'}}>
        <Image
            style={styles.tinyLogo}
            source={require('../assets/logo01.png')}
          />
          </View>
          <View style={{ marginVertical: 30 }}></View>
          <View style={{
    
    padding: 28,
    borderRadius: 25,}}>
          <Text style={styles.bodytext}>Sign Up</Text>
          <Text style={{ fontSize: 20, letterSpacing: 1, fontFamily:' ArimaMadurai_500Medium' }}>Username :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholderTextColor="black"
            placeholder="Username"
            keyboardType="numeric"
          />
          <Text style={{ fontSize: 20, letterSpacing: 1, fontFamily:' ArimaMadurai_500Medium' }}>Email :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={Email}
            placeholderTextColor="black"
            placeholder="Email"
            keyboardType="numeric"
          />
          <Text style={{ fontSize: 20, letterSpacing: 1, fontFamily:' ArimaMadurai_500Medium' }}>Password :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={Password}
            secureTextEntry={true}
            placeholderTextColor="black"
            placeholder="Password"
            keyboardType="numeric"
          />
          <Text style={{ fontSize: 20, letterSpacing: 1, fontFamily:' ArimaMadurai_500Medium' }}>Confirm Password :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            secureTextEntry={true}
            placeholderTextColor="black"
            placeholder="Confirm Password"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={{ color: 'white', fontFamily:' ArimaMadurai_500Medium', fontSize: 20,letterSpacing: 1  }}>Register</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center', fontFamily:' ArimaMadurai_500Medium', letterSpacing: 1,  marginTop:62, fontSize:17,color: 'black', fontWeight: '500', display:'flex',justifyContent:'center'}}>you have already account?  <TouchableOpacity
            style={styles.ancer}
               onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ fontSize:17, letterSpacing: 1,color: '#32407a', fontWeight: '600',paddingLeft:5,marginBottom:-5}}>Login</Text>
          </TouchableOpacity></Text>
        </View>
        </View>
       
    </View>
    </ScrollView>

  );
}

const styles = {
  container: {
    flex: 1,
  },
  ancer:{
   
    fontSize:25
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  tinyLogo: {
    height: 129,
    width: 183
  },
  button: {
    alignItems: "center",
    backgroundColor: "#32407a",
    padding: 11,
    height: 51,
    borderRadius: 5,
    marginTop: 24
  },
  bodytext: {
    fontSize: 25,
    marginTop: 10,
    marginBottom:18,
    textAlign: 'center',
    color:'#2e3d78',
    fontWeight: 800,
    letterSpacing: 2,
    fontFamily:' ArimaMadurai_500Medium'
  },
  forget: {
    textAlign: 'center',
    letterSpacing: 2
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth:1,
    borderRadius: 5,
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    fontFamily:' ArimaMadurai_500Medium'
    
  },
  overlay: {
    flex: 1,
   paddingTop: 50,
   paddingBottom:50,
  backgroundColor:'#ffff',
  }
};

export default Register