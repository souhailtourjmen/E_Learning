import React, {
    ReactElement,
    memo,
    useCallback,
    useEffect,
    useState,
  } from 'react';
  import {StyleSheet, View} from 'react-native';

  import {styles} from './styles';
import { useColorScheme } from '../../hooks';
import { COLORS, TEXT } from '../../constant';
import { Button } from '..';
import { i18next } from '../../config';

  type propsSegmentComponent = {
    handleSegment: (item: number) => void;
    CheckedSegment: number;
  };
  const SegmentComponent = ({
    CheckedSegment,
    handleSegment,
  }: propsSegmentComponent): ReactElement => {

    const [Checked, setChecked] = useState<number>(CheckedSegment);
    const theme = useColorScheme();
    const [ColorChecked, setColorChecked] = useState<string>(COLORS.background);
    useEffect(() => {
      setColorChecked(theme != 'dark' ? COLORS.background : COLORS.background);
    }, [theme]);
    return (
      <View
        style={[
          styles.container,
          theme === 'dark'
            ? {backgroundColor: COLORS.primary}
            : {backgroundColor: COLORS.primary},
        ]}>
        <View style={styles.btnContainer}>
          <Button
            text={i18next.t(TEXT.Login.Sinscrire)}
            onPress={() => {
              setChecked(0);
              handleSegment(0);
            }}
            style={[
              {width: '45%'},
  
              Checked == 0
                ? {
                    backgroundColor: ColorChecked,
                    borderRadius: 30,
                  }
                : theme === 'dark'
                ? {backgroundColor: COLORS.primary}
                : {backgroundColor: COLORS.primary},
            ]}
            fontStyle={{
              color:
                Checked == 0
                  ? theme === 'dark'
                    ? COLORS.primary
                    : COLORS.primary
                  : theme != 'dark'
                  ? COLORS.background
                  : COLORS.background,
            }}
          />
          <Button
            text={i18next.t(TEXT.Login.SeConnecter)}
            style={[
              {width: '45%'},
              Checked == 1
                ? {
                    backgroundColor: ColorChecked,
                    borderRadius: 30,
                  }
                : theme === 'dark'
                ? {backgroundColor: COLORS.primary}
                : {backgroundColor: COLORS.primary},
            ]}
            fontStyle={{
              color:
                Checked == 1
                  ? theme === 'dark'
                    ? COLORS.primary
                    : COLORS.primary
                  : theme != 'dark'
                  ? COLORS.background
                  : COLORS.background,
            }}
            onPress={() => {
              setChecked(1);
              handleSegment(1);
            }}
          />
        </View>
      </View>
    );
  };
  export default memo(SegmentComponent);
  