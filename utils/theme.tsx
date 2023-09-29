import { getStatusBarHeight } from 'react-native-status-bar-height';
export const statusBarHeight = getStatusBarHeight()
export const backgroundColor = "#f0f0f0"
export const paddingSpace = 10
export const titleColor = "#060166"

// input style
export const inputStyle = {
    borderWidth: 1,
    padding: paddingSpace,
    borderColor: titleColor,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 10
  }

// btn style
export const btnView = {
    borderWidth: 1,
    padding: paddingSpace,
    borderRadius: 5
}

export const btnText = {
    fontSize: 18,
    textAlign: 'center' as 'center'
}