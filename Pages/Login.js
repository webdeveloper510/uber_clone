import React from "react";
import { TouchableOpacity, Image, ImageBackground, Button, TextInput, View, Text } from 'react-native';
const image = { uri: require('../assets/background.png') };
function Login({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  return (

    <View  style={styles.container}>
     
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View
      style={styles.overlay}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/logo1.png')}
          />
          <View style={{ marginVertical: 40 }}></View>
          <h3 style={styles.bodytext}>Sign in your Account</h3>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholderTextColor="black"
            placeholder="Email"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            secureTextEntry={true}
            placeholderTextColor="black"
            placeholder="Password"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.forget}
               onPress={() => navigation.navigate('Forget')}
          >
            <Text style={{ color: 'white',fontFamily:"Roboto Condensed", fontSize:'23px' }}>Forget Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ color: 'white', fontSize: 26,fontFamily:"Roboto Condensed", letterSpacing: 1 }}>Sign In</Text>
          </TouchableOpacity>
       
       
       <p style={{textAlign:'center', letterSpacing: 1,  marginTop:'62px', fontSize:'20px',color: 'white', fontWeight: 500, display:'flex',justifyContent:'center'}}>Or Sign up with  <TouchableOpacity
            style={styles.ancer}
               onPress={() => navigation.navigate('Register')}
          >
            <Text style={{ fontSize:'20px', letterSpacing: 1,color: '#337ab7',fontFamily:"Roboto Condensed", fontWeight: 600,paddingLeft:'10px', }}>Register</Text>
          </TouchableOpacity></p>
       
          
       </View>
      </ImageBackground>
   
    </View>

  );
}

const styles = {
  container: {
    flex: 1,
  },
  ancer:{
   
    fontSize:'25px'
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  tinyLogo: {
    height: 70
  },
  button: {
    alignItems: "center",
    backgroundColor: "#337ab7",
    padding: 17,
    height: 67,
    borderRadius: 30,
    marginTop: 24
  },
  bodytext: {
    fontSize: 29,
    marginTop: 48,
    textAlign: 'center',
    color:'#000000',
    letterSpacing: 2
  },
  forget: {
    textAlign: 'center',
    letterSpacing: 2
  },
  input: {
    height: 56,
    marginVertical: 12,
    borderColor: 'white',
    borderRadius: 30,
    fontSize: 26,
    fontFamily:"Roboto Condensed",
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
  },
  overlay: {
    flex: 1,
    padding: 30,
    background:'linear-gradient(2deg, #000000c7, #ffffff00)'
  }
};
export default Login;