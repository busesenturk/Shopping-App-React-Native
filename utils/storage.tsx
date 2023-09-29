import AsyncStorage from '@react-native-async-storage/async-storage';
import { IJWTUserModel } from '../models/IJWTUserModel';
import { IProduct } from '../models/IProducts';

export const userSetData = async (data: IJWTUserModel) => {
  const st = JSON.stringify(data)
  await AsyncStorage.setItem('@user', st)
}

export const userGetData = async () => {
  try {
    const stData = await AsyncStorage.getItem('@user')
    const userModel = JSON.parse(stData) as IJWTUserModel
    return userModel;
  } catch (err) {
      return null
  }
};

// Likes Store Data
export const likesSetData = async (data: IProduct[]) => {
  const st = JSON.stringify(data)
  await AsyncStorage.setItem('@likes', st)
}

// Likes Get Data
export const likesGetData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@likes')
    return jsonValue != null ? JSON.parse(jsonValue) as IProduct[] : null
  } catch(err) {
    return null
  }
}