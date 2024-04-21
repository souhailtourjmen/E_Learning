import React, {
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { styles } from './styles';



import { Calendar } from '@ui-kitten/components';
import moment from 'moment';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { ModalCustom, RenderIcon, Text, View } from '../..';
import { COLORS, TEXT } from '../../../constant';
import { i18next } from '../../../config';


type propsDateForm = {
  control?: Control<any> | undefined;
  name: string;
  rules?:
  | Omit<
    RegisterOptions<FieldValues, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  | undefined;
  label?: ReactElement | undefined;
  styleComponent?: ViewStyle | undefined;
  style?: ViewStyle | undefined;
  initialDate?: string | undefined;
};
const now = new Date();
const intialData = new Date(
  now.getFullYear() - 18,
  now.getMonth() - 1,
  now.getDate(),
);
const max = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate() - 1);
const min = new Date(now.getFullYear() - 60, now.getMonth(), now.getDate() - 1);

const DateForm = ({
  control,
  name,
  rules = {},
  label,
  styleComponent,
  style,
  initialDate,
}: propsDateForm): ReactElement => {
  const [date, setDate] = useState<Date | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState(
    i18next.t(TEXT.SignUp.placeholder.DtN),
  );
  useEffect(() => {
    if (date) {
      setPlaceholder(moment(date).format('DD/MM/YYYY'));
    } else if (initialDate) {
      console.log('%cindex.tsx line:67 initialDate', 'color: #007acc;', initialDate);
      setPlaceholder(initialDate)
    }
  }, [date]);
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
            ]}>
            <TouchableOpacity
              onPress={() => {
                setIsOpen(prev => !prev);
              }}>
              <View style={[styles.styleSelect, styles.ViewBirthday]}>
                <Text style={{ color: date ? COLORS.primary : '#011A33A3' }}>
                  {placeholder}
                </Text>
                <TouchableOpacity onPress={() => setIsOpen(prev => !prev)}>
                 <RenderIcon name='calendar'/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <ModalCustom visible={isOpen} setVisible={setIsOpen}>
              <View>
                <Calendar
                  max={max}
                  min={min}
                  date={date ? date : intialData}
                  onSelect={(nextDate: Date) => {
                    setDate(nextDate);
                    onChange(`${moment(nextDate).format('DD/MM/YYYY')}`);
                    setIsOpen(prev => !prev);
                  }}
                />
              </View>
            </ModalCustom>
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
export default DateForm;
