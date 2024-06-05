import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {Image} from 'react-native-animatable';

const Likes = ({navigation}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      decelerationRate={'fast'}>
      <Header title={'Favorites'} onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.cart}>
          <Image source={require('../assets/5.png')} style={styles.cartImage} />
          <View style={styles.details}>
            <Text style={styles.title}>Egg Past</Text>
            <Text style={styles.description}>Spicey chicken pasta</Text>
            <Text style={styles.price}>$15.00</Text>
          </View>
        </View>
        <View style={styles.cart}>
          <Image source={require('../assets/1.png')} style={styles.cartImage} />
          <View style={styles.details}>
            <Text style={styles.title}>Burger</Text>
            <Text style={styles.description}>Spicey chicken burger</Text>
            <Text style={styles.price}>$10.00</Text>
          </View>
        </View>
        <View style={styles.cart}>
          <Image source={require('../assets/2.png')} style={styles.cartImage} />
          <View style={styles.details}>
            <Text style={styles.title}>Golden Chicken</Text>
            <Text style={styles.description}>Roasted golden chicken</Text>
            <Text style={styles.price}>$25.00</Text>
          </View>
        </View>
        <View style={styles.cart}>
          <Image source={require('../assets/3.png')} style={styles.cartImage} />
          <View style={styles.details}>
            <Text style={styles.title}>Pizza</Text>
            <Text style={styles.description}>Tameto Pizza</Text>
            <Text style={styles.price}>$05.00</Text>
          </View>
        </View>
        <View style={styles.cart}>
          <Image source={require('../assets/4.png')} style={styles.cartImage} />
          <View style={styles.details}>
            <Text style={styles.title}>Chicken Crispy</Text>
            <Text style={styles.description}>Crispy golden chicken</Text>
            <Text style={styles.price}>$15.00</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Likes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:90
  },
  cart: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cartImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginHorizontal: 10,
    gap:10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#282828',
  },
  description: {
    fontSize: 16,

  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E60023',
  },
});
