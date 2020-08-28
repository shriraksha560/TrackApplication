import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation';

const AccountScreen = () => {
  const {signout} = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text>AccountScreen</Text>
      <Button title="Sign out" onPress={signout}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
