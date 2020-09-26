import { watchPositionAsync } from 'expo-location';
//import '../_mockLocation';

import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';
//import {Context as LocationContext} from '../context/LocationContext';

const TrackCreateScreen = () => {
  //const {addLocation} = useContext(LocationContext);

  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted) {
        console.log('You can use teh ACCESS_FINE_LOCATION');
      } else {
        console.log('ACCESS_FINE_LOCATION permission denied');
      }

      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 10000000,
          distanceInterval: 20,
        },
        (location) => {
          console.log(location);
        },
      );
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please grant us location access</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
