import { useState, useEffect } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'toastify-react-native';
import { userLogin } from '../utils/service';
import { likesGetData, userSetData } from '../utils/storage';
import { IJWTUserModel } from '../models/IJWTUserModel';
import { ILikeAction } from '../redux/LikesReducer';
import { LikesEnum } from '../redux/LikesEnum';


export default function Login() {

  const navigation = useNavigation()

  // Default Redux Data
  useEffect(() => {
    likesGetData().then(obj => {
    if (obj) {
      obj.forEach(item => {
        const sendObj: ILikeAction = {
          type: LikesEnum.LIKE_ADD,
          payload: item
        }
        dispatch(sendObj)
      })
    } 
    })
  }, [])
  // state create
  const [username, setUserName] = useState('kminchelle')
  const [password, setPassword] = useState('0lelplR')

  const fncLogin = () => {
    if ( username === '' ) {
      Alert.alert('Fail', 'Username Empty!')
    }else if ( password === '' ) {
      Alert.alert('Fail', 'Password Empty!')
    }else if ( password.length < 5 ) {
      Alert.alert('Fail', 'Password 5 chars Fail!')
    }else {
      userLogin(username, password).then(async res => {
        if( res.status === 200 ) {
          await userSetData(res.data)
          //navigation.navigate("Product")
          navigation.replace("AppTab")
        }
      }).catch((error: { message: any; }) => {
        console.log(error.message)
        Toast.error("Username or Password Fail")
      })
    }
  }

  const fncRegister = () => {
    navigation.navigate("Register")
  }

  useEffect(() => {
    console.log("useEffect Call**", username)
  }, [username])

  return (
    <ScrollView style={styles.container}>
      <Image style={{ width: 64, height: 64, alignSelf: 'center', marginBottom: 20,  }} source={require('../assets/logo.png')} />
      <Text style={styles.title}>User Login</Text>
      <TextInput value={username} onChangeText={(txt: string) => setUserName(txt) } keyboardType='email-address' autoCapitalize='none'  placeholder='Username' style={inputStyle} />
      <TextInput value={password} onChangeText={(txt: string) => setPassword(txt) } secureTextEntry={true} placeholder='Password' style={inputStyle} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <TouchableOpacity onPress={fncLogin}>
          <View style={btnView}>
            <Text style={[btnText, { color: titleColor } ]}>Login</Text>
          </View>
        </TouchableOpacity>
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

function dispatch(sendObj: ILikeAction) {
throw new Error('Function not implemented.');
}
