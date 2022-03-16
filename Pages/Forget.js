import React from "react";
import { TouchableOpacity, Image, ImageBackground, TextInput, View, Text } from 'react-native';
import { 
  ArimaMadurai_500Medium,
} from '@expo-google-fonts/arima-madurai';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

function Forget({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  let {fontLoad } = useFonts(
    {
      ArimaMadurai_500Medium 
    }
  );
  return (
    <View style={styles.container}>
       
        <View style={styles.overlay}>
        <View style={{marginHorizontal:'auto'}}>
        <Image
            style={styles.tinyLogo}
            source={require('../assets/logo01.png')}
          />
          </View>
          <View style={{ marginVertical: 80 }}></View>
          <View style={{
    
    padding: 28,
    borderRadius: 25,}}>
          <Text style={styles.bodytext}>Reset Password</Text>
          <Text style={{ fontSize: 20, letterSpacing: 1, fontFamily:' ArimaMadurai_500Medium' }}>Enter your email :</Text>
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
            <Text style={{ color: 'white', fontSize: 17,letterSpacing: 1  }}>Submit</Text>
          </TouchableOpacity>
        </View>
        </View>

    </View>

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
export default Forget