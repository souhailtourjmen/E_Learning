import React, {ReactElement, memo, useState} from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  ViewStyle,
  TextStyle,
  Pressable,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import useCustomSelectViewController from './viewController';
import { Text, View } from '..';
import { COLORS } from '../../constant';
import { formatCurrency } from '../../helper/currency';

type PropsCustomSelect = TouchableOpacity['props'] & {
  items?: any[];
  showHeader?: boolean;
  titleLeft?: string;
  title?: string;
  showIndex?: boolean;
  titleRight?: string;
  setSelectedValue: any;
  selectedValue: string | any;
  showTitle?: boolean;
  colorIcon?: string;
  styleItems?: ViewStyle;
  styleItem?: ViewStyle;
  styleTextItem?: TextStyle;
  textSelect?: TextStyle;
  styleSelect?: any;
  styleContainer?: ViewStyle;
  customTitle?: ReactElement;
  customIndex?: number;
  customButtonDeleted?: boolean;
  hidenIndexInTitle?: boolean;
};

const CustomSelect = ({
  items,
  showIndex = false,
  showHeader = false,
  hidenIndexInTitle = false,
  ...others
}: PropsCustomSelect): ReactElement => {
  const {handleItemPress, handleItemPressRemove} =
    useCustomSelectViewController();

  const [selectedIndex, setSelectedIndex] = useState<number>(
    others?.customIndex || 0,
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderHeaderText = () => {
    if (others?.customTitle) {
      return others.customTitle;
    }

    const selectedItem = items && items[selectedIndex];
    if (selectedItem?.name) {
      const formattedPrice = formatCurrency({
        number: selectedItem.price ?? 0,
      });
      return `${selectedItem.name}${formattedPrice}`;
    }

    return `${items && parseInt(items[selectedIndex]) + 1} ${
      others?.showTitle ? others.title : ''
    }`;
  };
  // console.log('%cindex.tsx line:71 items', 'color: #007acc;', items);
  return (
    <View style={[others?.styleContainer,{borderRadius:30}]}>
      <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)} {...others}>
        <View
          style={[
            styles.select,
            others?.styleSelect,
            {borderRadius:30}
            // {backgroundColor: COLORS.lightGray},
          ]}>
          {showHeader ? (
            <Text style={[styles.textSelect, others?.textSelect]}>
              {renderHeaderText()}
            </Text>
          ) : hidenIndexInTitle ? (
            <Text>
              {` ${
                items && items.length > 0
                  ? items[selectedIndex]?.name
                  : others.selectedValue || ''
              }`}
            </Text>
          ) : (
            <Text>
              {`${selectedIndex + 1} ${
                items && items.length > 0
                  ? items[selectedIndex]?.name
                  : others.selectedValue || ''
              }`}
            </Text>
          )}
          {Array.isArray(others?.selectedValue) &&
            others.selectedValue.length > 0 &&
            others?.customButtonDeleted && (
              <Pressable
                onPress={() =>
                  handleItemPressRemove(
                    items ? items[others?.customIndex || 0] : {},
                    others?.selectedValue,
                    others?.setSelectedValue,
                    setIsOpen,
                  )
                }
                style={{
                  position: 'absolute',
                  right: 50,
                  width: 30,
                  alignItems: 'center',
                  
                }}>
                <Icon
                  name={'times'}
                  size={15}
                  color={others?.colorIcon ? others?.colorIcon : COLORS.primary}
                />
              </Pressable>
            )}
          <Icon
            name={isOpen ? 'angle-up' : 'angle-down'}
            size={25}
            color={others?.colorIcon ? others?.colorIcon : COLORS.primary}
          />
        </View>
      </TouchableWithoutFeedback>
      {isOpen && (
        <View
          style={[
            others?.styleItems,
           
            // styles.viewItems,
            // {backgroundColor: COLORS.lightGray},
          ]}>
          {items &&
            items.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.7}
                key={index}
                onPress={() =>
                  handleItemPress(
                    item,
                    index,
                    others?.selectedValue,
                    others?.setSelectedValue,
                    setSelectedIndex,
                    setIsOpen,
                  )
                }>
                <View
                  style={[
                    others?.styleItem,
                    styles.item,
                    {borderRadius:30},
                    {
                      backgroundColor:
                        selectedIndex === index
                          ? COLORS.lightGray
                          : COLORS.transparent,
                    },
                  ]}>
                  <Text
                    style={[
                      others?.styleTextItem,
                      styles.textItem,
                      {color: COLORS.primary},
                    ]}>
                    {`${others?.titleLeft ? others?.titleLeft : ''} ${
                      showIndex ? index + 1 : ''
                    } ${
                      item?.name && item?.price
                        ? `${item?.name} ${formatCurrency({
                            number:
                              item?.price === null
                                ? 0
                                : item?.price * (index + 1),
                          })}`
                        : item?.name
                        ? item?.name
                        : item + 1
                    } ${others?.titleRight ? others?.titleRight : ''}`}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      )}
    </View>
  );
};

export default memo(CustomSelect);
