import React from "react";
import { TouchableOpacity, Image, ImageBackground, StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col}>
          <text>India</text>
        </View>
        <View style={styles.col2}>
          <text>India</text>
        </View>
      </View>
    </View>

  );
}

const styles = {
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  col: {
    width: '50%',
    textAlign: 'center'
  },
  col2: {
    width: '50%',
    textAlign: 'right',
    paddingRight: '10px',
  }

};
