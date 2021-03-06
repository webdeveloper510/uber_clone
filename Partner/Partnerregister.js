import React from "react";
import { TouchableOpacity, Image, ImageBackground, Button, TextInput, View, Text, ScrollView } from 'react-native';
function Partnerregister({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [Email, onChangeEmail] = React.useState(null);
  const [Password, onChangePassword] = React.useState(null);
  return (
    <ScrollView >
    <View style={styles.container}>
        <View style={styles.overlay}>
        <View style={{marginHorizontal:'auto'}}>
        <Image
            style={styles.tinyLogo}
            source={require('../assets/logo1.png')}
          />
          </View>
          <View style={{ marginVertical: 40 }}></View>
          <Text style={styles.bodytext}>Sign Up</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholderTextColor="black"
            placeholder="Username"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={Email}
            placeholderTextColor="black"
            placeholder="Email"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={Password}
            secureTextEntry={true}
            placeholderTextColor="black"
            placeholder="Password"
            keyboardType="numeric"
          />
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
            <Text style={{ color: 'white', fontSize: 26,letterSpacing: 1  }}>Register</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center', letterSpacing: 1,  marginTop:62, fontSize:20,color: 'white', fontWeight: '500', display:'flex',justifyContent:'center'}}>you have already account?  <TouchableOpacity
            style={styles.ancer}
               onPress={() => navigation.navigate('Partnerlogin')}
          >
            <Text style={{fontSize:20, letterSpacing: 1,color: '#3f00ff', fontWeight: '600',paddingLeft:10,}}>Login</Text>
          </TouchableOpacity></Text>
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
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
  },
  overlay: {
    flex: 1,
    padding: 30,
    backgroundColor:'#00d9ff',
  }
}

export default Partnerregister