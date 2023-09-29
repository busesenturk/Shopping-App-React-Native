import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Platform, Vibration } from 'react-native'
import Swiper from 'react-native-swiper'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, Fontisto, Ionicons } from '@expo/vector-icons';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values'

export default function Onboarding () {

  const navigation = useNavigation()
  const [index, setIndex] = useState(0)
  console.log(JSON.stringify(Platform))
  console.log(uuidv4)

  useEffect(() => {
    if (index > 0) {
      if ( Platform.OS === 'ios') {
        Vibration.vibrate(500)  
      } else {
        Vibration.vibrate(400)
      }
    }
  }, [index])

  return (
  <>
    <StatusBar hidden={true} />
      <Swiper 
      style={styles.swipeContainer} 
      showsButtons={true}
      onIndexChanged={(index) => setIndex(index)}
      loadMinimal={true}
      loadMinimalSize= {3}
      >
        <View style={styles.box}>
          <FontAwesome5 name="shopping-basket" size={135} color={'#060166'} />
        </View>
        <View style={styles.box}>
          <Fontisto name="shopping-basket-add" size={135} color={'#060166'} />
        </View>
        <View style={styles.box}>
          <Ionicons name="enter-outline" size={135} color={'#060166'} />
          <View style={{margin: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginStack')}>
            <View style={{backgroundColor: '#060166', width: '100%', borderRadius: 10, padding: 10}}>
              <Text style= {{ textAlign: 'center', fontSize: 18, color: '#f0f0f0'}}>Go Shopping</Text>
            </View>
            </TouchableOpacity>
            </View>
        </View>
      </Swiper>
  </>
  )
}

const styles = StyleSheet.create({
  swipeContainer: {

  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})