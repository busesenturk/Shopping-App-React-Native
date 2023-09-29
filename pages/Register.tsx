import { useState } from 'react';
import { 
StyleSheet, 
View, 
Text, 
TextInput, 
ScrollView, 
TouchableOpacity,
Alert, Image
} from 'react-native';

import { 
backgroundColor, 
statusBarHeight, 
paddingSpace, 
titleColor, 
inputStyle,
btnView,
btnText
} from '../utils/theme';
import BackBtn from '../components/BackButton'

export default function Register() {

  // state create
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const fncRegister = () => {
    console.log('fncRegister Call')
  }
  

  return (
    <ScrollView style={styles.container}>
      <BackBtn iconColor='red'/>
      <Image style={{ width: 64, height: 64, alignSelf: 'center', marginBottom: 20,  }} source={require('../assets/logo.png')} />
      <Text style={styles.title}>User Register</Text>
      <TextInput onChangeText={(txt: string) => setUserName(txt) } keyboardType='email-address' autoCapitalize='none'  placeholder='Username' style={inputStyle} />
      <TextInput onChangeText={(txt: string) => setPassword(txt) } secureTextEntry={true} placeholder='Password' style={inputStyle} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <TouchableOpacity onPress={fncRegister}>
          <View style={btnView}>
            <Text style={[btnText, { color: titleColor } ]}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: statusBarHeight,
    paddingLeft: paddingSpace,
    paddingRight: paddingSpace,
    paddingBottom: paddingSpace,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 30,
    color: titleColor,
    
  }
});