import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, View, Text } from 'react-native';

const myIcon = <Icon name="notifications" size={30} color="#900" />;
const myIcon1 = <Icon name="location" size={30} color="#900" />;


function Home({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col}>
          <text style={styles.location}>{myIcon1} India</text>
        </View>
        <View style={styles.col2}>
          <text>{myIcon}</text>
        </View>
      </View>
      <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholderTextColor="black"
            placeholder="Seach for Doctor"
            keyboardType="numeric"
          />
          <View style={styles.card}>
            <h3>Find your doctor by speciality</h3>

            <TouchableOpacity
            style={styles.button}
          >
            <Text style={{ color:'#7070ef', fontSize: 21 }}>View All </Text>
          </TouchableOpacity>
          </View>

          <View style={styles.row1}>
            <View style={styles.cardbody1}>
            <Image
              source={require('../assets/download.jpg')}
              style={{ width: '98%', height: '100%',borderRadius:'20px' }}
            />
            </View>
            <View style={styles.cardbody2}>
               <h3>New York City DOHMH Public Health Laboratory</h3>
               <h5 style={{color:'#6a5f5f', fontWeight:500}}>455 1st Avenue, New York , NY Unite.....</h5>
               <TouchableOpacity
            style={styles.CallNow}
            onPress={() => navigation.navigate('Pediatrician')}
          >
            <Text style={{ color:'#7070ef', fontSize: 21 }}>Call Now </Text>
          </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={styles.cardbody1}>
            <Image
              source={require('../assets/download1.jpg')}
              style={{ width: '98%', height: '100%',borderRadius:'20px' }}
            />
            </View>
            <View style={styles.cardbody2}>
               <h3>New York City DOHMH Public Health Laboratory</h3>
               <h5 style={{color:'#6a5f5f', fontWeight:500}}>455 1st Avenue, New York , NY Unite.....</h5>
               <TouchableOpacity
            style={styles.CallNow}
            onPress={() => navigation.navigate('Pediatrician')}
          >
            <Text style={{ color:'#7070ef', fontSize: 21 }}>Call Now </Text>
          </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={styles.cardbody1}>
            <Image
              source={require('../assets/download2.jpg')}
              style={{ width: '98%', height: '100%',borderRadius:'20px' }}
            />
            </View>
            <View style={styles.cardbody2}>
               <h3>New York City DOHMH Public Health Laboratory</h3>
               <h5 style={{color:'#6a5f5f', fontWeight:500}}>455 1st Avenue, New York , NY Unite.....</h5>
               <TouchableOpacity
            style={styles.CallNow}
            onPress={() => navigation.navigate('Pediatrician')}
          >
            <Text style={{ color:'#7070ef', fontSize: 21 }}>Call Now </Text>
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
  CallNow: {
    borderColor:'blue',
    borderWidth: '2px',
    borderRadius:10,
    width: 107,
    padding: 8,
  },
  tinyLogo: {
    width:'100%',
  },
  cardbody1: {
     width:'50%',
  },
  cardbody2: {
    width:'50%',
    foat:'left',
    padding:'12px',
 },
 row1: {
  flexDirection: "row",
  flexWrap: "wrap",
  borderRadius:'20px',
  margin: 12,
  boxShadow:' 0 8px 16px 0 rgb(0 0 0 / 20%)',
},
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding:"10px"
  },
  location:{
    forntSize:'22px',
  },
  col: {
    width: '50%',
    textAlign: 'left',
    paddingleft:'10px'
  },
  input: {
    height: 56,
    marginVertical: 12,
    marginHorizontal:12,
    borderColor: 'black',
    borderWidth:'1px',
    borderRadius: 5,
    fontSize: 16,
    paddingLeft:15,
    paddingRight: 15,
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
  },
  col2: {
    width: '50%',
    textAlign: 'right',
    paddingRight: '10px',
  },

};
export default Home