import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonDark from "../Components/Button/ButtonDark"
import ButtonLight from '../Components/Button/ButtonLight'
const WelCome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque provident in quisquam voluptate animi. Harum quas sed adipisci iure quae.</Text>
      <ButtonDark title={"Login"} onPress={()=>navigation.navigate("Login")}/>
      <ButtonLight title={"Sign up"} onPress={()=>navigation.navigate("Register")}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",
    padding:20,
    gap:15,
    paddingBottom:120
  },
  title:{
    fontSize:30,
    color:"#E60023"
  },
  desc:{
    textAlign:"center",
    paddingBottom:50,
    paddingHorizontal:10
  },
})

export default WelCome