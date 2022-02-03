import React from "react";
import { TouchableOpacity, ImageBackground, StyleSheet, TextInput, View, Text } from 'react-native';

const image = { uri: "https://www.pngitem.com/pimgs/m/700-7009042_clip-art-freeuse-download-go-nurse-best-nursing.png" };
export default function App() {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
         <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.overlay}>
      <h1 style={styles.headtext} >Welcome Back</h1>
      <h3>Login in your account</h3>
      <View style={{marginVertical:50}}></View>
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
       <TouchableOpacity
        style={styles.button}
      >
        <Text style={{color:'white',fontSize: 26}}>Login</Text>
      </TouchableOpacity>
      </View>
     
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
  button: {
    alignItems: "center",
    backgroundColor: "#337ab7",
    padding: 17,
    height: 74,
    borderRadius: 30,
    marginTop:50
  },
  headtext: {
    marginTop: 70,
    fontSize: 42
  },
  input: {
    height: 74,
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
    backgroundColor:'#ffffff3d',
    flex: 1,
    padding:30
  }
};
