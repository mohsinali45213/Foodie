import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from './Icons'
const {width} = Dimensions.get("window")
const Header = ({icon,title,onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.icon} onPress={onPress}>
      <Icons type={"FontAwesome6"} name={icon?icon:"angle-left"} color={"white"} size={20} style={{transform:"rotate(-45deg)"}}/>
      </Pressable>
      <Text style={styles.heading}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"center",
    paddingLeft:25,
    paddingVertical:20,
    position:"relative",
    // gap:100
  },
  icon:{
    backgroundColor:"#E60023",
    position:"relative",
    paddingHorizontal:15,
    width:45,
    height:45,
    justifyContent:"center",
    alignItems:"center",
    transform:"rotate(45deg)",
    borderRadius:10,
    elevation:3,
    zIndex:10
  },
  heading:{
    width:width,
    position:"absolute",
    fontSize:20,
    fontWeight:"500",
    color:"black",
    textAlign:"center",
    justifyContent:"center"
  }
})