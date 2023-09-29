import { IProduct } from '../models/IProducts';
import { LikesEnum } from '../redux/LikesEnum';
import { likesGetData, likesSetData } from '../utils/storage';

export interface ILikeAction {
  type: LikesEnum;
  payload: IProduct;
}

export const LikesReducer = (state: IProduct[] = [], action: ILikeAction) => {
  switch (action.type) {

    case LikesEnum.LIKE_ADD:
    const firstIndex = state.findIndex((item) => item.id === action.payload.id)
    if ( firstIndex == -1 ) {
      const newArr = [...state, action.payload]
      likesSetData(newArr)
      return newArr
    }
    return state
    
    case LikesEnum.LIKE_REMOVE:
      const index = state.findIndex((item) => item.id === action.payload.id)
      const tempArr = Object.assign([], state)
      if (index > -1) {
        tempArr.splice(index, 1)
        likesSetData(tempArr)
        return tempArr
      }
      return state

    default:
      return state
  }
};
