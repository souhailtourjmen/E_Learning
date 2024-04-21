import React, {
    ReactElement,
  } from 'react';
  import { StyleSheet, View, SafeAreaView } from 'react-native';
  import ForgetPassword from '../../../modules/auth/forgetPassword';

import { STYLES } from '../../../styles';
  type propForgetPasswordScreen = {};
  const ForgetPasswordScreen = ({ }: propForgetPasswordScreen): ReactElement => {
    return (
      <>
       
        <SafeAreaView style={[STYLES.safeAreaBgBackground,{backgroundColor:'black'}]}>
          <View>
            <ForgetPassword />
            
          </View>
        </SafeAreaView>
      </>
  
    );
  };
  export default ForgetPasswordScreen;
  