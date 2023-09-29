import axios from 'axios'
import { IJWTUserModel } from '../models/IJWTUserModel'
import { IProduct, IProducts } from '../models/IProducts'

const base_url = "https://dummyjson.com/"
const config = axios.create({
  baseURL: base_url,
  timeout: 150000
})

//login user
export const userLogin = (username: string, password: string) => {
  const sendObj = {
    username: username,
    password: password
  }
  return config.post<IJWTUserModel>('auth/login', sendObj)
}

//all products
export const allProduct = () => {
  return config.get<IProducts>('products')
}

// single product
export const singleProduct = (id: number) => {
  return config.get<IProduct>('products/'+id)
}
