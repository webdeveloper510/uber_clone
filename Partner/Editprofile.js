import React from 'react';
import { TouchableOpacity, Image, ImageBackground, Button, TextInput, View, Text, ScrollView } from 'react-native';

function Editprofile( navigation ) {
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
          <Text style={styles.bodytext}>Edit Profile</Text>
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
            value={number}
            secureTextEntry={true}
            placeholderTextColor="black"
            placeholder="Phone No"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            secureTextEntry={true}
            placeholderTextColor="black"
            placeholder="Specialization"
            keyboardType="text"
          />
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={{ color: 'white', fontSize: 26,letterSpacing: 1  }}>Save</Text>
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
      height: 70,
      width: 270
    },
    button: {
      alignItems: "center",
      backgroundColor: "#337ab7",
      padding: 17,
      height: 67,
      marginTop: 24,
      
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
      fontSize: 26,
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'white',
      padding: 10,
      shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowColor: '#171717',
    },
    overlay: {
      flex: 1,
      padding: 30,
      background:'linear-gradient(2deg, #000000c7, #ffffff00)',
    }
  };
export default Editprofile