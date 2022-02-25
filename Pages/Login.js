import React from "react";
import { TouchableOpacity, Image, ImageBackground, ScrollView, TextInput, View, Text } from 'react-native';
import { 
  NunitoSans_200ExtraLight,
  NunitoSans_200ExtraLight_Italic,
  NunitoSans_300Light,
  NunitoSans_300Light_Italic,
  NunitoSans_400Regular,
  NunitoSans_400Regular_Italic,
  NunitoSans_600SemiBold,
  NunitoSans_600SemiBold_Italic,
  NunitoSans_700Bold,
  NunitoSans_700Bold_Italic,
  NunitoSans_800ExtraBold,
  NunitoSans_800ExtraBold_Italic,
  NunitoSans_900Black,
  NunitoSans_900Black_Italic 
} from '@expo-google-fonts/nunito-sans'
const image =  require('../assets/background.png') ;
console.log(image)
function Login({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  return (
<ScrollView>
    <View  style={styles.container}>
     
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View
      style={styles.overlay}>
        <View style={{marginHorizontal:'auto'}}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/logo1.png')}
          />
          </View>
          <View style={{ marginVertical: 40 }}></View>
          <Text style={styles.bodytext}>Sign In </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholderTextColor="black"
            placeholder="Email"
            keyboardType="email"
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
            <Text style={{ color: 'white', fontSize:23, textAlign:'center' }}>Forget Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ color: 'white', fontSize: 26, letterSpacing: 1 }}>Sign In</Text>
          </TouchableOpacity>
       
       
       <Text style={{textAlign:'center', letterSpacing: 1,  marginTop:62, fontSize:20,color: 'white', fontWeight: '500', display:'flex',justifyContent:'center'}}>Or Sign up with  <TouchableOpacity
            style={styles.ancer}
               onPress={() => navigation.navigate('Register')}
          >
            <Text style={{ fontSize:20, letterSpacing: 1,color: '#3f00ff', fontWeight: '600',paddingLeft:5,marginBottom:-5 }}>Register</Text>
          </TouchableOpacity></Text>
       
          
       </View>
      </ImageBackground>
   
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
    height: 70,
    width: 270
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
    fontSize: 25,
    marginTop: 10,
    marginBottom:18,
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