import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, Image, TextInput, View, Text, ScrollView } from 'react-native';
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
// import '../assets/style.css';



function Pediatrician({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  return (
    <ScrollView>
    <View style={styles.container}>
      <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholderTextColor="black"
            placeholder="Seach for Doctor"
            keyboardType="numeric"
          />
          <View style={styles.row1}>
            <View style={styles.cardbody1}>
            <Image
              source={require('../assets/avatar.png')}
              style={{ width: 150, height: 150,borderRadius:100, marginVertical:10 }}
            />
            </View>
            <View style={styles.cardbody2}>
               <Text>Dr. Ronan Peiterson</Text>
               <Text style={{color:'#6a5f5f', fontWeight:'500'}}>Pediatrician</Text>
               <Text style={{color:'#7583f2'}}>8 Years Experience</Text>
              
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.book}
            onPress={() => navigation.navigate('Docterprofile')}
          >
            <Text style={{ color:'#cddc39', fontSize: 14 }}>Book Video Consult </Text>
          </TouchableOpacity>
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.Appoin}
          >
            <Text style={{ color:'#6b7af5', fontSize: 14 }}>Book Appointment </Text>
          </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={styles.cardbody1}>
            <Image
              source={require('../assets/avatar2.png')}
              style={{ width: 150, height: 150,borderRadius:100, marginVertical:10 }}
            />
            </View>
            <View style={styles.cardbody2}>
               <Text>Dr.Beatriz Watson</Text>
               <Text style={{color:'#6a5f5f', fontWeight:'500'}}>Pediatrician</Text>
               <Text style={{color:'#7583f2'}}>8 Years Experience</Text>
              
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.book}
          >
            <Text style={{ color:'#cddc39', fontSize: 14 }}>Book Video Consult </Text>
          </TouchableOpacity>
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.Appoin}
          >
            <Text style={{ color:'#6b7af5', fontSize: 14 }}>Book Appointment </Text>
          </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={styles.cardbody1}>
            <Image
              source={require('../assets/avatar.png')}
              style={{ width: 150, height: 150,borderRadius:100, marginVertical:10 }}
            />
            </View>
            <View style={styles.cardbody2}>
               <Text>Dr. Brayden Trump</Text>
               <Text style={{color:'#6a5f5f', fontWeight:'500'}}>Pediatrician</Text>
               <Text style={{color:'#7583f2'}}>8 Years Experience</Text>
              
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.book}
          >
            <Text style={{ color:'#cddc39', fontSize: 14 }}>Book Video Consult </Text>
          </TouchableOpacity>
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.Appoin}
          >
            <Text style={{ color:'#6b7af5', fontSize: 14 }}>Book Appointment </Text>
          </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={styles.cardbody1}>
            <Image
              source={require('../assets/avatar2.png')}
              style={{ width: 150, height: 150,borderRadius:100,marginVertical:10 }}
            />
            </View>
            <View style={styles.cardbody2}>
               <Text>Dr. Appollonia Ellison</Text>
               <Text style={{color:'#6a5f5f', fontWeight:'500'}}>Pediatrician</Text>
               <Text style={{color:'#7583f2'}}>8 Years Experience</Text>
              
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.book}
          >
            <Text style={{ color:'#cddc39', fontSize: 14 }}>Book Video Consult </Text>
          </TouchableOpacity>
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.Appoin}
          >
            <Text style={{ color:'#6b7af5', fontSize: 14   }}>Book Appointment </Text>
          </TouchableOpacity>
            </View>
          </View>
    </View>
    </ScrollView>
  );
}



const styles = {
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  card: {
    padding:20,
  },
  book: {
  backgroundColor:'#feedd1',
  color:'#fc9b0c',
  borderColor:'#cddc39',
  padding: 6,
  borderWidth:2,
  marginHorizontal:5,
  },
  CallNow: {
    borderColor:'blue',
    borderWidth: 2,
    borderRadius:10,
    width: 107,
    padding: 8,
  },
  Appoin:{
    backgroundColor:'#e4e6ff',
    borderColor:'#aab3ed',
    padding: 6,
    borderWidth:2,
    marginHorizontal:5,
  },
  cardbody1: {
     width:'50%',
  },
  cardbody2: {
    width:'50%',
    foat:'left',
    padding:12,
    marginVertical:40
 },
 row1: {
  flexDirection: "row",
  flexWrap: "wrap",
  borderRadius:20,
  margin: 12,
  padding: 12,
  boxShadow:' 0 8px 16px 0 rgb(0 0 0 / 20%)',
},
  input: {
    height: 56,
    marginVertical: 12,
    marginHorizontal:12,
    borderColor: 'black',
    borderWidth:1,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft:15,
    paddingRight: 15,
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
  },
  col: {
    width: '50%',
    textAlign: 'left',
    paddingleft:10
  },

};
export default Pediatrician