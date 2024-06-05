import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from '../Components/Icons'
import Header from '../Components/Header'

const Payment = ({navigation}) => {
  return (
    <View>
      <Header title={"Payment"}  onPress={()=>navigation.goBack()}/>
      <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("Address")}>
        <View style={styles.container}>
          <Text style={styles.title}>Choose Address</Text>
          <Icons type={"FontAwesome6"} name={"angle-right"} color={"#282828"} size={22}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("PaymentMethod")}>
        <View style={styles.container}>
          <Text style={styles.title}>Payment Method</Text>
          <Icons type={"FontAwesome6"} name={"angle-right"} color={"#282828"} size={22}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginHorizontal:20,
    backgroundColor:"white",
    borderRadius:10,
    padding:20,
    marginTop:20,
    elevation:3
  },
  title:{
    fontSize:16,
    fontWeight:"bold",
    color:"#282828"
  }
})