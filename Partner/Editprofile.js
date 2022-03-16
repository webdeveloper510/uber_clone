import React from 'react';
import { TouchableOpacity, Image, ImageBackground, Button, TextInput, View, Text, ScrollView } from 'react-native';
import { 
  ArimaMadurai_500Medium,
} from '@expo-google-fonts/arima-madurai'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

function Editprofile({ navigation }) {
    const [text, onChangeText] = React.useState(null);
  const [Email, onChangeEmail] = React.useState(null);
  const [Password, onChangePassword] = React.useState(null);
  const [Phone, onChangeNumber] = React.useState(null);
  const [Specialization, onChangespecial] = React.useState(null);
  let {fontLoad } = useFonts(
    {
      ArimaMadurai_500Medium 
    }
  );
  return (
    <ScrollView >
    <View style={styles.container}>
         
        <View style={styles.overlay}>
         
          <Text style={styles.bodytext}>Edit Profile</Text>
          <View style={{ marginVertical: 10 }}></View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholderTextColor="black"
            placeholder="Full Name"
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={Email}
            placeholderTextColor="black"
            placeholder="Email"
            keyboardType="email"
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
            value={Phone}
            placeholderTextColor="black"
            placeholder="Phone No"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangespecial}
            value={Specialization}
            placeholderTextColor="black"
            placeholder="Specialization"
            keyboardType="text"
          />
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={{ color: 'white', fontSize: 20,letterSpacing: 1  }}>Save</Text>
          </TouchableOpacity>
        </View>
     
    </View>
    </ScrollView>
  )
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
    marginVertical: 12,
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
  padding:25
  }
};
export default Editprofile