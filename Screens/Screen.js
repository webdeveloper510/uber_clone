import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity, Image, ImageBackground, Button, TextInput, View, Text, ScrollView } from 'react-native';
const image = { uri: require('../assets/screen.png') };
const myIcon = <Icon name="right" size={60} color="#900" />;
function Screen({ navigation }) {
  return <View style={styles.container}>
         <View style={styles.image}>
         <Image
            style={styles.tinyLogo}
            source={image}
          />
         </View>
         <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ fontSize: 26,letterSpacing: 1 }}>{myIcon}</Text>
          </TouchableOpacity>
      </View>
}
const styles = {
    container: {
      flex: 1,
      backgroundColor:'#446efe',
    },
    tinyLogo: {
        height:'128px',
        width:'96%',
        position: 'absolute',
    marginTop: '65%' ,
    marginLeft: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 30,
       position:'absolute',
       bottom: 30,
      },
}
export default Screen;
