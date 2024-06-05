import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation(); 

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Welcome');
        }, 2000);
    
        return () => clearTimeout(timer);
    }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtLogo}>Foodie</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E60023',
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtLogo: {
    color: '#FFFFFF',
    fontSize: 80,
    fontFamily:"cursive"
  },
});

export default Splash