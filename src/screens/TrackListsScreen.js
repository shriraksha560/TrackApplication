import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const TrackListScreen = ({navigation}) => {
  return (
    <>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to track detail screen"
        onPress={() => {
          navigation.navigate('TrackDetail');
        }}></Button>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
