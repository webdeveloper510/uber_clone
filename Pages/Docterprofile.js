import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity, Image, ImageBackground, Button, TextInput, View, Text } from 'react-native';
const myIcon = <Icon name="star" size={30} color="#cddc39" />;

function Docterprofile(navigation) {
  return <View style={styles.container}>
         <View style={styles.row}>
             <View style={styles.col}>
                  <h3 style={{color:'white',}}> Dr. Brayden Trump</h3>
                  <p style={{color:'white', margin: 0}}>Pediatrician</p>
                  <p style={{color:'white'}}>{myIcon} 4.76 Rating</p>
                 </View>
                 <View style={styles.col1}>
                     <Image 
                     style={styles.profile}
                      source={require('../assets/profile.png')}/>
                     </View>    
         </View>
         <View style={styles.boddy}>
           <Text style={styles.lorem}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </Text>

           <h3 style={styles.text}>
           Experience
           </h3>
           <Text style={styles.lorem}>10 Years</Text>

           <h3 style={styles.text}>Availability</h3>
              <Text style={styles.lorem}>8:00AM - 10:30PM</Text>
          
           <h3 style={styles.text}>Location</h3>
           <Image 
                     style={styles.map}
                      source={require('../assets/map.png')}/>
         </View>
  </View>;
}
const styles = {
    container: {
      flex: 1,
      backgroundColor:'#151c48'
    },

    profile:{
        height:'200px',
        width: '200px'
    },
    text: {
     fontSize:'21px'
    },
    lorem: {
      fontSize:'19px',
    },
    map:{
      height:'200px',
      width: '100%'
    },

    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      padding:"10px",
      marginTop:'12%'
    },
    col: {
      width: '50%',
      paddingLeft:20
    },
    col1: {
      width: '50%',
      textAlign: 'center',
      paddingleft:'10px'
    },
    boddy: {
      backgroundColor:'#ffff',
      borderRadius:'30px',
      padding:'20px'
    }
}
export default Docterprofile;
