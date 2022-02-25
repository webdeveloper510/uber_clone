import React from 'react';
import { TouchableOpacity, Image, ImageBackground, Button, TextInput, View, Text, ScrollView } from 'react-native';

function Editprofile({ navigation }) {
    const [text, onChangeText] = React.useState(null);
  const [Email, onChangeEmail] = React.useState(null);
  const [Password, onChangePassword] = React.useState(null);
  const [Phone, onChangeNumber] = React.useState(null);
  const [Specialization, onChangespecial] = React.useState(null);

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
    }
  };
export default Editprofile