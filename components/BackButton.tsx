import {  TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function BackButton ( item : { iconColor?: string } ) {

  const navigation = useNavigation()

  return (
      <TouchableOpacity onPress={ () => navigation.goBack() } hitSlop={{top: 20, right: 20, bottom: 20, left: 20}} style={{  position: 'absolute'  }}>
        <Ionicons name="ios-chevron-back" size={28} color={ item.iconColor ? item.iconColor : 'black' } />
      </TouchableOpacity>
  )
}