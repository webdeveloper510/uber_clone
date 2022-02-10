import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity, Image, ImageBackground, Button, TextInput, View, Text } from 'react-native';
const myIcon = <Icon name="star" size={30} color="#cddc39" />;

function Docterprofile(navigation) {
  return <View style={styles.container}>
         <View style={styles.row}>
             <View style={styles.col}>
                  <Text style={{color:'white',}}> Dr. Brayden Trump</Text>
                  <Text style={{color:'white', margin: 0}}>Pediatrician</Text>
                  <Text style={{color:'white'}}>{myIcon} 4.76 Rating</Text>
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

           <Text style={styles.text}>
           Experience
           </Text>
           <Text style={styles.lorem}>10 Years</Text>

           <Text style={styles.text}>Availability</Text>
              <Text style={styles.lorem}>8:00AM - 10:30PM</Text>
          
           <Text style={styles.text}>Location</Text>
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
    // text: {
    //  fontSize:21
    // },
    // lorem: {
    //   fontSize:19,
    // },
    map:{
      height:'200px',
      width: '100%'
    },

    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      padding:10,
      marginTop:12
    },
    col: {
      width: '50%',
      paddingLeft:20
    },
    col1: {
      width: '50%',
      textAlign: 'center',
      paddingleft:10
    },
    boddy: {
      backgroundColor:'#ffff',
      borderRadius:30,
      padding:'20px'
    }
}
export default Docterprofile;
