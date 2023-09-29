import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import { userGetData } from '../utils/storage';
import { Hoshi } from 'react-native-textinput-effects';
import MapView, { Marker } from 'react-native-maps';
import { backgroundColor, statusBarHeight, paddingSpace } from '../utils/theme';
import { IJWTUserModel } from '../models/IJWTUserModel';

export default function Profile() {
  const [user, setUser] = useState<IJWTUserModel>();

  useEffect(() => {
    console.log('Profile Call');
    userGetData().then((res) => {
      if (res) {
        setUser(res);
      }
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {user && (
        <>
          <Hoshi
            label={'Name'}
            borderColor={'#4287f5'}
            borderHeight={1}
            inputPadding={0}
            backgroundColor={'#F9F7F6'}
            style={{ marginBottom: 15 }}
            inputStyle={{ paddingTop: 15, paddingLeft: 15, fontSize: 15 }}
            labelStyle={{ paddingLeft: 15 }}
            defaultValue={user.firstName}
          />
          <Hoshi
            label={'Surname'}
            borderColor={'#4287f5'}
            borderHeight={1}
            inputPadding={0}
            backgroundColor={'#F9F7F6'}
            style={{ marginBottom: 15 }}
            inputStyle={{ paddingTop: 15, paddingLeft: 15, fontSize: 15 }}
            labelStyle={{ paddingLeft: 15 }}
            defaultValue={user.lastName}
          />
        </>
      )}
      <MapView
        style={{ width: '100%', height: 300 }}
        initialRegion={{
          latitude: 41.0224123,
          longitude: 28.9187957,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
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
});
