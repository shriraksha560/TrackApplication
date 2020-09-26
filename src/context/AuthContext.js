import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';
import AsyncStorage from '@react-native-community/async-storage';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {...state, token: action.payload};
    case 'signin':
      return {errorMessage: '', token: action.payload};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'signout':
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: 'signin', payload: token});
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({type: 'clear_error_message'});
};
const signup = (dispatch) => {
  return async ({email, password}) => {
    try {
      console.log("1");

      const response = await trackerApi.post('/signup', {email, password});
      console.log(response.data);
      console.log("2");

      await AsyncStorage.setItem('token', response.data.token);
      console.log("3");

      //   await AsyncStorage.getItem('token');
      dispatch({type: 'signup', payload: response.data.token});
      console.log("4");

      navigate('TrackList');
      //navigate to main flow
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with Signup',
      });
    }
  };
};

const signout = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow');
  } catch (e) {
    console.log('signout catch :' + e);
  }
};

const signin = (dispatch) => {
  return async ({email, password}) => {
    try {
      console.log("1");
      const response = await trackerApi.post('/signin', {email, password});
      console.log("2");

      await AsyncStorage.setItem('token', response.data.token);
      console.log("3");

      dispatch({type: 'signin', payload: response.data.token});
      console.log("4");

      navigate('TrackList');
    } catch (e) {
      console.log('e : ' + e);

      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with Signin',
      });
    }
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, clearErrorMessage, tryLocalSignIn},
  {token: null, errorMessage: ''},
);
