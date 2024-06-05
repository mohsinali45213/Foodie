import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import {TextInput} from 'react-native';
import Icons from '../Components/Icons';
import ButtonLight from '../Components/Button/ButtonLight';
import ButtonDark from '../Components/Button/ButtonDark';
const {width, height} = Dimensions.get('window');
const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Header icon={'bars-staggered'} />
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Find your</Text>
          <Text style={styles.title}>
            <Text style={styles.highlighter}>Best Food </Text> Here
          </Text>

          <View style={styles.searchBar}>
            <Icons
              type={'Ionicons'}
              name="search"
              color={'gray'}
              size={26}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Food..."
            />
            <TouchableOpacity activeOpacity={0.7} onPress={()=>setModalVisible(true)}>
            <View style={styles.filter}>
              <Icons
                type={'FontAwesome6'}
                name="sliders"
                color={'white'}
                size={22}
                style={styles.filterIcon}
              />
            </View>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.slider}>
              <View style={[styles.slideItem, styles.firstItem]}>
                <Text style={[styles.text, styles.firstItem]}>All</Text>
              </View>
              <View style={styles.slideItem}>
                <Icons
                  type={'FontAwesome6'}
                  name="burger"
                  size={30}
                  color={'#787878'}
                />
                <Text style={styles.text}>Fast Food</Text>
              </View>
              <View style={styles.slideItem}>
                <Icons
                  type={'Feather'}
                  name="coffee"
                  size={30}
                  color={'#787878'}
                />
                <Text style={styles.text}>Fast Food</Text>
              </View>
              <View style={styles.slideItem}>
                <Icons
                  type={'Ionicons'}
                  name="fast-food-outline"
                  size={30}
                  color={'#787878'}
                />
                <Text style={styles.text}>Snack</Text>
              </View>
            </View>
          </ScrollView>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate={'fast'}>
            <View style={styles.cartContainer}>
              <View style={styles.cart}>
                <Image
                  source={require('../assets/5.png')}
                  style={styles.cartImage}
                />
                <Text style={styles.cartTitle}>Egg Past</Text>
                <Text style={styles.cartDesc}>Spicey chicken pasta</Text>
                <Text style={styles.cartPrice}>$15.00</Text>
              </View>
              <View style={styles.cart}>
                <Image
                  source={require('../assets/1.png')}
                  style={styles.cartImage}
                />
                <Text style={styles.cartTitle}>Burger</Text>
                <Text style={styles.cartDesc}>Spicey chicken burger</Text>
                <Text style={styles.cartPrice}>$10.00</Text>
              </View>
              <View style={styles.cart}>
                <Image
                  source={require('../assets/2.png')}
                  style={styles.cartImage}
                />
                <Text style={styles.cartTitle}>Golden Chicken</Text>
                <Text style={styles.cartDesc}>Roasted golden chicken</Text>
                <Text style={styles.cartPrice}>$25.00</Text>
              </View>
              <View style={styles.cart}>
                <Image
                  source={require('../assets/3.png')}
                  style={styles.cartImage}
                />
                <Text style={styles.cartTitle}>Pizza</Text>
                <Text style={styles.cartDesc}>Tameto Pizza</Text>
                <Text style={styles.cartPrice}>$05.00</Text>
              </View>
              <View style={styles.cart}>
                <Image
                  source={require('../assets/4.png')}
                  style={styles.cartImage}
                />
                <Text style={styles.cartTitle}>Chicken Crispy</Text>
                <Text style={styles.cartDesc}>Crispy golden chicken</Text>
                <Text style={styles.cartPrice}>$15.00</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        style={styles.model}>
        <View style={styles.modelWrapper}>
          <View style={styles.modelContainer}>
            <Text style={styles.modelTitle}>Filters</Text>
            <Text style={styles.modelCategoryTitle}>Categories</Text>
            <View style={styles.modelCategoryContainer}>
              <Text style={styles.modelFirstCategory}>All</Text>
              <Text style={styles.modelCategory}>Fast Food</Text>
              <Text style={styles.modelCategory}>Snack</Text>
              <Text style={styles.modelCategory}>Drink</Text>
            </View>
            <View style={styles.modelButton}>
              <ButtonLight title={'Clear'} onPress={()=>setModalVisible(false)} />
              <ButtonDark title={'Apply'} onPress={()=>setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    color: '#282828',
    paddingHorizontal: 20,
  },
  highlighter: {
    color: '#E60023',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    position: 'relative',
    paddingHorizontal: 20,
  },
  searchInput: {
    fontSize: 17,
    backgroundColor: '#E0E0E1',
    flex: 1,
    padding: 13,
    paddingLeft: 45,
    borderRadius: 10,
    marginVertical: 25,
  },
  searchIcon: {
    position: 'absolute',
    top: 38,
    left: 10,
    zIndex: 10,
    paddingHorizontal: 20,
  },
  filter: {
    width: 45,
    height: 45,
    backgroundColor: '#E60023',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    transform: 'rotate(45deg)',
  },
  filterIcon: {
    transform: 'rotate(-45deg)',
  },
  slider: {
    flexDirection: 'row',
    gap: 20,
    paddingLeft: 20,
  },
  slideItem: {
    backgroundColor: '#E0E0E1',
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    gap: 10,
  },
  firstItem: {
    backgroundColor: '#E60023',
    color: 'white',
  },
  text: {
    fontSize: 15,
    color: '#787878',
    fontWeight: '900',
  },
  cartContainer: {
    paddingLeft: 20,
    paddingTop: 40,
    flexDirection: 'row',
    gap: 5,
  },
  cart: {
    backgroundColor: 'white',
    width: (width / 3) * 1.7,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 15,
    elevation: 2,
    margin: 5,
  },
  cartImage: {
    width: 180,
    height: 180,
    padding: 10,
  },
  cartTitle: {
    fontSize: 25,
    color: '#282828',
  },
  cartDesc: {
    fontSize: 16,
    color: '#989898',
  },
  cartPrice: {
    fontSize: 25,
    color: '#E60023',
    fontWeight: '900',
  },
  model: {},
  modelWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modelContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },
  modelTitle: {
    fontSize: 25,
    color: '#E60023',
    fontWeight: '900',
    textAlign:"center"
  },
  modelCategoryTitle: {
    fontSize: 20,
    color: '#282828',
    fontWeight: '900',
    marginTop:10
  },
  modelCategoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    gap:10
  },
  modelCategory: {
    backgroundColor:"#E0E0E1",
    paddingHorizontal:30,
    paddingVertical:10,
    borderRadius:10,
    fontSize:15,
    fontWeight:"900",
  },
  modelFirstCategory:{
    backgroundColor:"#E60023",
    paddingHorizontal:30,
    paddingVertical:10,
    borderRadius:10,
    fontSize:15,
    fontWeight:"900",
    color:"white"
  },
  modelButton: {
    width:"100%",
    flexDirection:"row",
    gap:20,
    marginTop:20
  },
});

export default Home;
