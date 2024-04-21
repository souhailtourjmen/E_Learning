import React, {
  ReactElement,
  memo,
  useState,
} from 'react';
import {
  StyleProp,
  TextInputProps,
  TextProps,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity
} from 'react-native';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { styles } from './styles';
import { Input } from '@ui-kitten/components';
import { RenderProp } from '@ui-kitten/components/devsupport';
import { useColorScheme } from '../../../hooks';
import { RenderIcon, Text } from '../..';
import { COLORS } from '../../../constant';

type propsCustomInputForm = TextInputProps & {
  control?: Control<any> | undefined;
  name: string;
  rules?:
  | Omit<
    RegisterOptions<FieldValues, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  | undefined;
  placeholder?: string | undefined;
  secureTextEntry?: boolean | undefined;
  editPassword?: boolean | undefined;
  disabled?: boolean | undefined;
  styleComponent?: ViewStyle | undefined;
  handleEditPassword?: () => void;
  styleCurrency?: ViewStyle | undefined;
  label?: ReactElement | undefined;
  caption?: RenderProp<TextProps> | React.ReactText | undefined;
  styleInput?: ViewStyle | undefined;
  style?: ViewStyle | undefined;
  multiline?: boolean | undefined;
  textStyle?: StyleProp<TextStyle>;
  currencyInput?: boolean;
  textInputRef?: React.MutableRefObject<null>;
};
const CustomInputForm = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  editPassword,
  disabled,
  styleInput,
  textStyle,
  styleComponent,
  label,
  caption,
  style,
  handleEditPassword,
  multiline = false,
  currencyInput = false,
  styleCurrency,
  textInputRef,
  ...other
}: propsCustomInputForm): ReactElement => {
 
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const toggleSecureEntry = () => {
    setShowPassword(!showPassword);
  };
  const isDarkMode = useColorScheme() === 'dark';

  const renderIcon = (): any => {
    if (secureTextEntry) {
      return (
        <TouchableOpacity activeOpacity={.7} onPress={toggleSecureEntry}>
          {/* {showPassword ? (
            <AppIcons iconType={IconType.Eye} color={COLORS?.primary} style={{ marginRight: 12 }} />
          ) : (
            <AppIcons iconType={IconType.EyeSlash} color={COLORS?.primary} style={{ marginRight: 12 }} />
          )} */}

        </TouchableOpacity>
      );
    } else if (editPassword) {
      return (
        <TouchableOpacity activeOpacity={.7} onPress={handleEditPassword}>
          {/* <AppIcons iconType={IconType.Edit} color={COLORS?.primary} style={{ marginRight: 12 }} /> */}
        </TouchableOpacity>
      );
    } else {
      <></>;
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View
          style={[{ flexDirection: 'column', alignItems: 'baseline' }, style]}>
          {label ? (
            <View>{label}</View>
          ) : (
            <View>
              <Text>{''}</Text>
            </View>
          )}
          <View
            style={[
              styles.container,
              { borderColor: error ? 'red' : COLORS.transparent },
              styleComponent,
              currencyInput
                ? {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }
                : {},
            ]}>
            <Input
              ref={textInputRef}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[
                { width: currencyInput ? 'auto' : '100%' },
                styles.input,
                styleInput,
              ]}
              accessoryRight={renderIcon}
              caption={caption}
              textStyle={[textStyle, isDarkMode ? { color: COLORS.primary } : {}]}
              multiline={multiline}
              secureTextEntry={showPassword}
              disabled={disabled}
              {...other}
            />
            {currencyInput && (
              <View
                style={[
                  {
                    alignSelf: 'center',
                    alignItems: 'center',
                    // marginTop: '5%',
                  },
                  styleCurrency,
                ]}>
                <RenderIcon
                  name="euro-sign"
                  sizeIcon={12}
                  styleIcon={{
                    fontWeight: '400',
                    alignSelf: 'center',
                    color: COLORS.primary,
                  }}
                />
              </View>
            )}
          </View>
          {error && (
            <Text style={{ color: 'red', alignSelf: 'stretch' }}>
              {error.message || 'Error'}
            </Text>
          )}
        </View>
      )}
    />
  );
};
export default memo(CustomInputForm);
