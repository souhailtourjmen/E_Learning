import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useInputBoxViewController from './viewController';


const InputBox = ({
  chatRoomID,

}: {
  chatRoomID?: string;

}) => {
 const {setMessage,message,onSendPress}=useInputBoxViewController()
  
  const onPress =useCallback( () => {
    onSendPress(message);
    Keyboard.dismiss;
  },[onSendPress,setMessage]);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -150;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'position'}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{width: '100%'}}>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          {/* <Icon name="laugh-beam" size={24} color="grey" /> */}
          <TextInput
            placeholder={'Type a message'}
            style={styles.textInput}
            multiline
            value={message}
            onChangeText={setMessage}
          />
          {/* <Icon name="link" size={24} color="grey" style={styles.icon} />
          {!message && (
            <Icon name="camera" size={24} color="grey" style={styles.icon} />
          )} */}
        </View>
        <TouchableWithoutFeedback onPress={onPress} accessible={false}>
          <View style={styles.buttonContainer}>
            <Icon name="paper-plane" size={20} color="white" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
};

export default InputBox;
