import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, View, Text } from 'react-native';
// import '../assets/style.css';
const myIcon = <Icon name="notifications" size={30} color="#900" />;
const myIcon1 = <Icon name="location" size={30} color="#900" />;


function Pediatrician({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  return (
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
              style={{ width: '150px', height: '150px',borderRadius:50, margin:'auto' }}
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
            <Text style={{ color:'#cddc39', fontSize: 18 }}>Book Video Consult </Text>
          </TouchableOpacity>
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.Appoin}
          >
            <Text style={{ color:'#6b7af5', fontSize: 18 }}>Book Appointment </Text>
          </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={styles.cardbody1}>
            <Image
              source={require('../assets/avatar2.png')}
              style={{ width: '150px', height: '150px',borderRadius:50, margin:'auto' }}
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
            <Text style={{ color:'#cddc39', fontSize: 18 }}>Book Video Consult </Text>
          </TouchableOpacity>
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.Appoin}
          >
            <Text style={{ color:'#6b7af5', fontSize: 18 }}>Book Appointment </Text>
          </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={styles.cardbody1}>
            <Image
              source={require('../assets/avatar.png')}
              style={{ width: '150px', height: '150px',borderRadius:50, margin:'auto' }}
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
            <Text style={{ color:'#cddc39', fontSize: 18 }}>Book Video Consult </Text>
          </TouchableOpacity>
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.Appoin}
          >
            <Text style={{ color:'#6b7af5', fontSize: 18 }}>Book Appointment </Text>
          </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={styles.cardbody1}>
            <Image
              source={require('../assets/avatar2.png')}
              style={{ width: '150px', height: '150px',borderRadius:50, margin:'auto' }}
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
            <Text style={{ color:'#cddc39', fontSize: 18 }}>Book Video Consult </Text>
          </TouchableOpacity>
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.Appoin}
          >
            <Text style={{ color:'#6b7af5', fontSize: 18 }}>Book Appointment </Text>
          </TouchableOpacity>
            </View>
          </View>
    </View>

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