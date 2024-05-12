import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {COLORS, ROUTES} from '../../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useColorScheme} from '../../../../hooks';

const NewMessageButton = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const onPress = () => {
    navigation.navigate(ROUTES.CONTACTS);
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: COLORS[colorScheme].background,
          borderColor: COLORS[colorScheme].tint,
        },
      ]}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="comment-alt" color={COLORS[colorScheme].tint} size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default NewMessageButton;
