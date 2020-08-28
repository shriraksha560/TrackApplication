import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm';
import {NavigationEvents} from 'react-navigation';
import NavLink from '../components/navLink';
import {Context} from '../context/AuthContext';

const SigninScreen = () => {
  const {state, signin, clearErrorMessage} = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
        // onWillFocus={() => {}}
        onDidFocus={() => {}}
        // onWillBlur={() => {}}
        onDidBlur={() => {}}
      />
      <AuthForm
        headerText="Sign In to your account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign in"
        onSubmit={signin}
      />
      <NavLink
        text="Don't have an Account??Sign-up instead!!"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SigninScreen;
