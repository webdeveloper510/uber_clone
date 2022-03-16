import React from "react";
import { TouchableOpacity, Image, ImageBackground, ScrollView, TextInput, View, Text } from 'react-native';
// import LinearGradient from "react-native-linear-gradient";
import { 
  ArimaMadurai_500Medium,
} from '@expo-google-fonts/arima-madurai'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


function Login({ navigation }) {
  
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  let {fontLoad } = useFonts(
    {
      ArimaMadurai_500Medium 
    }
  );
  
  return (
    // <LinearGradient
    // color={['#B64A32', '#2AEADC']}
    // start={{x:0, y:0}}
    // end={{x:0, y:1}}>
<ScrollView>
    <View  style={styles.container}>
  
      <View
      style={styles.overlay}>
        <View style={{marginHorizontal:'auto'}}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/logo01.png')}
          />
          </View>
          <View style={{ marginVertical: 35 }}></View>
          <View style={{
    
    padding: 28,
    borderRadius: 25,}}>
          <Text style={styles.bodytext}>Sign In </Text>
          <Text style={{ fontSize: 20, letterSpacing: 1, fontFamily:' ArimaMadurai_500Medium' }}>Email :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholderTextColor="#a7a7a7"
            placeholder="Enter Email"
            keyboardType="email"
          />
          <Text style={{ fontSize: 20, letterSpacing: 1, fontFamily:' ArimaMadurai_500Medium' }}>Password :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            secureTextEntry={true}
            placeholderTextColor="#a7a7a7"
            placeholder="Enter Password"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.forget}
               onPress={() => navigation.navigate('Forget')}
          >
            <Text style={{ color: '#314287', fontSize:14, textAlign:'right',fontWeight:600, fontFamily:' ArimaMadurai_500Medium' }}>Forget Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ color: 'white', fontSize: 20, letterSpacing: 1, fontFamily:' ArimaMadurai_500Medium' }}>Sign In</Text>
          </TouchableOpacity>
       
       
       <Text style={{textAlign:'center', fontFamily:' ArimaMadurai_500Medium', letterSpacing: 1,  marginTop:62, fontSize:17,color: 'black', fontWeight: '500', display:'flex',justifyContent:'center'}}>Or Sign up with  <TouchableOpacity
            style={styles.ancer}
               onPress={() => navigation.navigate('Register')}
          >
            <Text style={{ fontSize:17, letterSpacing: 1,color: '#32407a', fontWeight: '600',paddingLeft:5,marginBottom:-5 }}>Register</Text>
          </TouchableOpacity></Text>
          </View>
       
          
       </View>
    </View>
    </ScrollView>
    // </LinearGradient>
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
export default Login;