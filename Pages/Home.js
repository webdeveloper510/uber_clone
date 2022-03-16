import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, Modal, Image, Pressable, ScrollView, TextInput, View, Text } from 'react-native';
import { 
  ArimaMadurai_500Medium,
} from '@expo-google-fonts/arima-madurai'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


const myIcon = <Icon name="notifications" size={30} color="#900" />;
const myIcon1 = <Icon name="location" size={30} color="#900" />;


function Home({ navigation }) {
  let {fontLoad } = useFonts(
    {
      ArimaMadurai_500Medium 
    }
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState(null);
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.location}>{myIcon1} India</Text>
        </View>
        <View style={styles.col2}>
          <Text style={{textAlign:'right'}}>{myIcon}</Text>
        </View>
      </View>
      <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholderTextColor="black"
            placeholder="Seach for Doctor"
            keyboardType="text"
          />
          <View style={styles.card}>
            <Text>Find your doctor by speciality</Text>

            <TouchableOpacity
            style={{}}
          >
            <Text style={{ color:'#7070ef', fontSize: 21 }}>View All </Text>
          </TouchableOpacity>
          </View>

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
            <Text style={{ color:'#cddc39', fontSize: 14 }}> Video Call </Text>
          </TouchableOpacity>
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.Appoin}
            onPress={() => setModalVisible(true)}
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
            <Text style={{ color:'#cddc39', fontSize: 14 }}>Video Call </Text>
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
            <Text style={{ color:'#cddc39', fontSize: 14 }}>Video Call </Text>
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
            <Text style={{ color:'#cddc39', fontSize: 14 }}>Video Call</Text>
          </TouchableOpacity>
            </View>
            <View style={styles.col}>
            <TouchableOpacity
            style={styles.Appoin}
            onPress={() => navigation.navigate('Pediatrician')}
          >
            <Text style={{ color:'#6b7af5', fontSize: 14 , fontFamily:'NunitoSans_400Regular_Italic'  }}>Book Appointment </Text>
          </TouchableOpacity>
            </View>
          </View>
    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <View style={{display:'block'}}>
            <Pressable
              style={[styles.button, styles.buttonClose1]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Decline </Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Confirm</Text>
            </Pressable>
            </View>
          
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}



const styles = {
  container: {
    flex: 1,
    backgroundColor:'white',
   fontFamily:' ArimaMadurai_500Medium'
    
  },
  card: {
    padding:20,
  },
  CallNow: {
    borderColor:'blue',
    borderWidth: 2,
    borderRadius:10,
    width: 107,
    padding: 8,
    marginTop:10,
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
    padding:12,
 },
 row1: {
  flexDirection: "row",
  flexWrap: "wrap",
  borderRadius:20,
  margin: 12,
  boxShadow:' 0 8px 16px 0 rgb(0 0 0 / 20%)',
},
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding:10
  },
  location:{
    fontSize:22,
    fontFamily:' ArimaMadurai_500Medium',
  },
  col: {
    width: '50%',
    textAlign: 'left',
    paddingleft:10
  },
  input: {
    height: 56,
    marginVertical: 12,
    marginHorizontal:12,
    borderColor: 'black',
    borderWidth:1,
    borderRadius: 5,
    fontFamily:' ArimaMadurai_500Medium',
    fontSize: 16,
    paddingLeft:15,
    paddingRight: 15,
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
  },
  col2: {
    width: '50%',
    textAlign: 'center',
    paddingRight: 10,
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    float: 'left',
    width:'50%',
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonClose1: {
    backgroundColor: "#f3214c",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  centeredView: {
    marginTop: 40
  }

};
export default Home