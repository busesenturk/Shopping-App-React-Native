import { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, FlatList } from 'react-native';
import { allProduct } from '../utils/service';
import { userGetData } from '../utils/storage';
import { Toast } from 'toastify-react-native';

import { backgroundColor, statusBarHeight, paddingSpace } from '../utils/theme';
import { IProduct } from '../models/IProducts';
import ProductItem from '../components/ProductItem';

export default function Product() {
  useEffect(() => {
    userGetData().then((res) => {
      // console.log(res)
    });
  }, []);

  const [load, setLoad] = useState(true);
  const [arr, setArr] = useState<IProduct[]>([]);
  useEffect(() => {
    setLoad(true);
    allProduct()
      .then((res) => {
        setArr(res.data.products);
      })
      .catch((err) => {
        Toast.error('Product List Fail!');
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  return (
    <View style={styles.container}>
    { load &&
      <ActivityIndicator
        size="large"
        animating={load}
        hidesWhenStopped={!load}
      />
    } 

    { !load &&
     <FlatList
      data={arr}
      renderItem={({item}) => <ProductItem item={item}/>}
      keyExtractor = {(_item, index) => index.toString()}
     />
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: paddingSpace,
    paddingLeft: paddingSpace,
    paddingRight: paddingSpace,
    paddingBottom: paddingSpace,
  },
});
