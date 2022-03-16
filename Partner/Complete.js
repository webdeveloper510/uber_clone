import React from 'react'
import { 
  ArimaMadurai_500Medium,
} from '@expo-google-fonts/arima-madurai'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { View,Image, Text, ScrollView } from 'react-native'

function Complete({ navigation }) {
  let {fontLoad } = useFonts(
    {
      ArimaMadurai_500Medium 
    }
  );
  return (
    <ScrollView >
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Complete Order</Text>
      </View>
      <View style={styles.row}>
      <View style={styles.col}>
        <Text style={styles.order}>Order#: 985645</Text>
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
        <Text style={styles.order}>Order#: 986522</Text>
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
        <Text style={styles.order}>Order#: 987252</Text>
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
        <Text style={styles.order}>Order#: 988906</Text>
        <Text style={styles.ordertext}>23-Dec-2020, 3:00 PM</Text>
      </View>
      <View style={styles.col1}>
      <Image
              source={require('../assets/avatar.png')}
              style={{ width: 80, height: 80,borderRadius:100,marginHorizontal:'auto' }}
            />
      </View>
      </View>

    </View>
    </ScrollView>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor:'white',
    fontFamily:' ArimaMadurai_500Medium'
  },
  row: { 
    flexDirection: "row",
  flexWrap: "wrap",
  marginLeft:10,
  marginBottom :10,
  marginTop:10,
  borderRadius:6,
  fontFamily:' ArimaMadurai_500Medium',
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
    fontFamily:' ArimaMadurai_500Medium'
  },
  order: {
    marginBottom:10,
    fontSize:20,
    fontFamily:' ArimaMadurai_500Medium'
  },
  header: {
    fontSize:30,
    padding:17,
    textAlign:'center',
    fontFamily:' ArimaMadurai_500Medium'
  }
}
export default Complete