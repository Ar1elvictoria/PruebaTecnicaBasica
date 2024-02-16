import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TiskTosk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B30909',
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    width: '100%',
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default Header;
