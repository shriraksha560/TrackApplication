import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Spacer from './Spacer';

import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NavLink = ({navigation, text, routeName}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(routeName);
      }}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

export default withNavigation(NavLink);
