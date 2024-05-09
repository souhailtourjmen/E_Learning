import React, {ReactElement} from 'react';
import {TextProps} from 'react-native';
import useMoreLessTextViewModels from './viewModel';
import {RenderIcon, Text, View} from '..';

type MoreLessTextProps = TextProps & {
  children: string;
  numberOfLines: number;
};

const MoreLessText = ({
  children,
  numberOfLines,
  ...Props
}: MoreLessTextProps): ReactElement => {
  const {isTruncatedText, setIsTruncatedText, showMore, setShowMore} =
    useMoreLessTextViewModels();

  return isTruncatedText ? (
    <>
    <View style={{flexDirection:'row',alignItems:'center'}}>
      <Text
        numberOfLines={showMore ? numberOfLines : 0}
        onPress={() => setShowMore(!showMore)}
        {...Props}>
        {children}
      </Text>
    </View>
      <Text
        onPress={() => setShowMore(!showMore)}
        style={{textAlign: 'right', marginTop: 10}}>
        {showMore ? (
          <Text category='h6'>more less</Text>
        ) : (
          <RenderIcon
            name={'chevron-up'}
            onPress={() => setShowMore(!showMore)}
          />
        )}
      </Text>
      </>
  ) : (
    <Text
      onTextLayout={(event: {nativeEvent: {lines: any}}) => {
        const {lines} = event.nativeEvent;
        setIsTruncatedText(lines?.length > numberOfLines);
      }}>
      {children}
    </Text>
    
  );
};

export default MoreLessText;
