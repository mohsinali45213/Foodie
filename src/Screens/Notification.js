import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const Notification = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header title={"Notification"} onPress={()=>navigation.goBack()}/>
        <Text style={styles.heading}>New</Text>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to foodie</Text>
          <Text style={styles.massage}>Lorem input doers sit ament</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to foodie</Text>
          <Text style={styles.massage}>Lorem input doers sit ament</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to foodie</Text>
          <Text style={styles.massage}>Lorem input doers sit ament</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({
  heading:{
    fontSize:20,
    marginVertical:20,
    paddingLeft:20,
    color:"#282828"
  },
  container:{
    marginHorizontal:10,
    marginVertical:10,
    padding:15,
    borderRadius:10,
    backgroundColor:'#fff',
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:12,
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:4,
    gap:5
  },
  title:{
    fontSize:20,
    color:"#282828",
  },
  massage:{
    fontSize:15,
  },
})