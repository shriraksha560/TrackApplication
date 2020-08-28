import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
      points.push({
        latitude: 37.33233 + i * 0.01,
        longitude: -122.03121 + i * 0.01,
      });
    } else {
      points.push({
        latitude: 37.33233 - i * 0.01,
        longitude: -122.03121 + i * 0.01,
      });
    }
  }
  return (
    <MapView
      style={styles.map}
      zoomEnabled={true}
      scrollEnabled={true}
      showsScale={true}
      minZoomLevel={2} // default => 0
      maxZoomLevel={15} // default => 20
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}>
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
