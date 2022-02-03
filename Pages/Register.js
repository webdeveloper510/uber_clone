import React from "react";
import { TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, View, Text } from 'react-native';
 
const image = { uri: "https://www.pngitem.com/pimgs/m/700-7009042_clip-art-freeuse-download-go-nurse-best-nursing.png" };
export default function Register() {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
         <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.overlay}>
    <Image
          style={styles.tinyLogo}
          source={require('./assets/logo.png')}
        />      
      <View style={{marginVertical:80}}></View>
      <h3 style={styles.bodytext}>Create your account</h3>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholderTextColor = "white"
        placeholder="Username"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholderTextColor = "white"
        placeholder="Email"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        secureTextEntry={true}
        placeholderTextColor = "white"
        placeholder="Password"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        secureTextEntry={true}
        placeholderTextColor = "white"
        placeholder="Confirm Password"
        keyboardType="numeric"
      />
       <TouchableOpacity
        style={styles.button}
      >
        <Text style={{color:'white',fontSize: 26}}>Register</Text>
      </TouchableOpacity>
      </View>
     <p></p>
    </ImageBackground>
  </View>
  
  );
}

const styles = {
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  tinyLogo:{
        height:70
  },
  button: {
    alignItems: "center",
    backgroundColor: "#337ab7",
    padding: 17,
    height: 60,
    borderRadius: 30,
    marginTop:50
  },
  bodytext:{
    fontSize: 24,
    marginTop: 10,
    textAlign:'center',
  },
  forget: {
    textAlign:'right',
  },
  input: {
    height: 56,
    marginVertical: 12,
    borderColor: 'white',
    borderRadius: 30,
    fontSize: 26,
    textAlign:'center',
    color: 'white' ,
    backgroundColor:'#cbc5c5d4',
    padding: 10,
  },
  overlay: {
      flex: 1,
    padding:30
  }
};
