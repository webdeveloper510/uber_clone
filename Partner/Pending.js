import React from 'react'
import { View,Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { withTheme } from 'react-native-elements'

function Pending({ navigation }) {

  return (
    <ScrollView  style={styles.body}>
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Pending Order</Text>
      </View>
      <View style={styles.row}>
      <View style={styles.col}>
        <Text style={styles.order}>Pending</Text>
        <Text style={styles.ordertext}>20-Dec-2020, 3:00 PM</Text>
      </View>
      <View style={styles.col1}>
      <Image
              source={require('../assets/avatar2.png')}
              style={{ width: 80, height: 80,borderRadius:100,marginHorizontal:'auto' }}
            />
      </View>
      </View>
      <View style={styles.row}>
      <View style={styles.col}>
        <Text style={styles.order}>Pending</Text>
        <Text style={styles.ordertext}>21-Dec-2020, 3:00 PM</Text>
      </View>
      <View style={styles.col1}>
      <Image
              source={require('../assets/avatar.png')}
              style={{ width: 80, height: 80,borderRadius:100,marginHorizontal:'auto' }}
            />
      </View>
      </View>


      <View style={styles.row}>
      <View style={styles.col}>
        <Text style={styles.order}>Pending</Text>
        <Text style={styles.ordertext}>22-Dec-2020, 3:00 PM</Text>
      </View>
      <View style={styles.col1}>
      <Image
              source={require('../assets/avatar2.png')}
              style={{ width: 80, height: 80,borderRadius:100,marginHorizontal:'auto' }}
            />
      </View>
      </View>


      <View style={styles.row}>
      <View style={styles.col}>
        <Text style={styles.order}>Pending</Text>
        <Text style={styles.ordertext}>23-Dec-2020, 3:00 PM</Text>
      </View>
      <View style={styles.col1}>
      <Image
              source={require('../assets/avatar.png')}
              style={{ width: 80, height: 80,borderRadius:100,marginHorizontal:'auto' }}
            />
      </View>
      </View>


      <View style={styles.row}>
      <View style={styles.col}>
        <Text style={styles.order}>Pending</Text>
        <Text style={styles.ordertext}>23-Dec-2020, 3:00 PM</Text>
      </View>
      <View style={styles.col1}>
      <Image
              source={require('../assets/avatar.png')}
              style={{ width: 80, height: 80,borderRadius:100,margin:'auto' }}
            />
      </View>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = {
    body: {
     backgroundColor:'white',
    },
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  cancel: {
    width: '50%',
    textAlign: 'left',
    paddingleft:10
  },
  row: { 
    flexDirection: "row",
  flexWrap: "wrap",
  marginLeft:10,
  marginBottom :10,
  marginTop:10,
  borderRadius:6,
  padding:10,
  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowRadius: 8,
  borderBottomWidth:0.5,
  },
  col: {
    width: '77%',
    textAlign: 'left',
    paddingleft:10
  },
  col1: {
    width: '23%',
    textAlign: 'right',
  },
  ordertext:{
    fontSize:17,
    color:'#6d6d6d',
  },
  order: {
    marginBottom:10,
    fontSize:20,
  },
  header: {
    fontSize:30,
    padding:17,
    textAlign:'center',
  },
  button: {

  }
}
export default Pending