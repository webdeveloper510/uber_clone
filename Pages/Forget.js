import React from "react";
import { TouchableOpacity, Image, ImageBackground, Button, TextInput, View, Text } from 'react-native';
const image = { uri: require('../assets/background.png') };
function Forget({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  return (
    <View style={styles.container}>
       
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
        <Image
            style={styles.tinyLogo}
            source={require('../assets/logo1.png')}
          />
          <View style={{ marginVertical: 80 }}></View>
          <h3 style={styles.bodytext}>Reset Password</h3>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholderTextColor="black"
            placeholder="Enter Email"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={{ color: 'white', fontSize: 26,letterSpacing: 1  }}>Submit</Text>
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
export default Forget