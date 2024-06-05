import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import ButtonDark from '../Components/Button/ButtonDark';

const Address = ({navigation}) => {
  const [checked, setChecked] = useState(1);
  return (
    <ScrollView>
      <Header title={'Choose Address'} onPress={() => navigation.goBack()} />
      <View style={styles.main}>
        <TouchableOpacity activeOpacity={1} onPress={() => setChecked(1)}>
          <View style={styles.container}>
            <View style={styles.subContainer}>
              <Text style={styles.title}>My Home Address</Text>
              <Text style={styles.dest}>Home</Text>
              <Text style={styles.add}>
                384285 , Vadu,Patan,Guajarat,India (Near by D-Mart)
              </Text>
            </View>
            <View style={styles.radioContainer}>
              {checked === 1 ? <View style={styles.radio}></View> : ''}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => setChecked(2)}>
          <View style={styles.container}>
            <View style={styles.subContainer}>
              <Text style={styles.title}>My Home Address</Text>
              <Text style={styles.dest}>Home</Text>
              <Text style={styles.add}>
                384285 , Vadu,Patan,Guajarat,India (Near by D-Mart)
              </Text>
            </View>
            <View style={styles.radioContainer}>
              {checked === 2 ? <View style={styles.radio}></View> : ''}
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate("NewAdd")}>
      <Text style={styles.titleNew}>Add New Address</Text>
      </TouchableOpacity>

      <View style={styles.button}>
        <ButtonDark title={'Done'}  onPress={() => navigation.goBack()}/>
      </View>
    </ScrollView>
  );
};

export default Address;

const styles = StyleSheet.create({
  main: {
    padding: 20,
    gap: 20,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  subContainer: {
    gap: 4,
    width: '95%',
  },
  title: {
    fontSize: 16,
    color: '#282828',
  },
  dest: {
    fontSize: 16,
  },
  add: {
    fontSize: 15,
    paddingTop: 5,
  },
  radioContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#555',
  },
  radio: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#E60023',
  },
  button: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  titleNew: {
    fontSize: 18,
    color: '#E60023',
    alignSelf: 'center',
    borderWidth:1,
    padding:10,
    paddingHorizontal:30,
    borderColor:"#E60023",
    borderRadius:10,
    marginTop:30,
    marginBottom:20,
    textAlign:"center",
  },
});
