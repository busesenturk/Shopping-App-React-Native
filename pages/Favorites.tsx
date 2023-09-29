import { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { userGetData } from '../utils/storage';
import { backgroundColor, statusBarHeight, paddingSpace } from '../utils/theme';
import { useSelector, useDispatch} from 'react-redux'
import { StateType } from '../redux/Store';
import ProductItem from '../components/ProductItem';

export default function Favorites() {
  
  const likesData = useSelector( (obj: StateType) => obj.LikesReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("Likes Call")
    userGetData().then(res => {

    })
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        data={likesData}
        renderItem={({item}) => <ProductItem item={item} /> }
        keyExtractor={(item, index) => index.toString() }
      />
    </View>
  )
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
});
