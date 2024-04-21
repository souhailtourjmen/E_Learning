import React, {
    ReactElement,
  } from 'react';
  import { StyleSheet, SafeAreaView } from 'react-native';
import { STYLES } from '../../../styles';
import SignIn from '../../../modules/auth/login';

  type propsLoginScreen = {};
  const LoginScreen = (): ReactElement => {
  
    return (
      <>
       
        <SafeAreaView style={STYLES.safeAreaBgBackground}>
          <SignIn />
        </SafeAreaView>
  
      </>
  
    );
  };
  export default LoginScreen;
  