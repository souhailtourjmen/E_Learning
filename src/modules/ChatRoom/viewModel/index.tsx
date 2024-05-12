import { useRoute } from "@react-navigation/native";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";
import { useColorScheme } from "../../../hooks";
import { useFetchAllChatsQuery } from "../../../store/services";
import { useAppSelector } from "../../../hooks/useStore";
import { selectUser } from "../../../store/slices/auth";
const useChatRoomViewModels = () => {
  const { data, error, isLoading } = useFetchAllChatsQuery();
  const user=useAppSelector(selectUser);

  const values = useMemo(() => {
    return {
      messages: data?.messages,
      isLoading,
      user
    };
  }, [data,isLoading,user]);
  return values;
};
export default useChatRoomViewModels;
