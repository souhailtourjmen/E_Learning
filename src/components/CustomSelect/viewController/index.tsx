import React, {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
  } from 'react';
  import useCustomDatePickerViewModels from '../viewModel';
  
  const useCustomSelectViewController = () => {
    const handleItemPress = (
      item: any,
      index: number,
      selectedValue: any,
      setSelectedValue: any,
      setSelectedIndex: React.Dispatch<React.SetStateAction<number>>,
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
      setSelectedIndex(index);
      setSelectedValue(
        item.name
          ? Array.isArray(selectedValue)
            ? {
                ...item,
                quantity: `${index + 1}`,
              }
            : item.name
          : item + 1,
      );
      setIsOpen(prev => !prev);
    };
    const handleItemPressRemove = (
      item: any=null,
      selectedValue: any,
      setSelectedValue: any,
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
      remove: boolean = true,
    ) => {
      setSelectedValue(item, remove);
      setIsOpen(prev => !prev);
    };
    return {handleItemPress,handleItemPressRemove};
  };
  export default useCustomSelectViewController;
  