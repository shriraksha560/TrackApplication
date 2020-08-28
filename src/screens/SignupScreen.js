import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/navLink';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(
    AuthContext,
  );

 
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
        // onWillFocus={() => {}}
        // onDidFocus={() => {}}
        //  onWillBlur={() => {}}
        onDidBlur={() => {}}
      />
      <AuthForm
        headerText="Sign up for tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={signup}
      />

      <NavLink
        text="Already have an Account?Sign-in instead!!"
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

// SignupScreen.navigationOptions = () => {
//   return {
//     header: null
//   };
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SignupScreen;
