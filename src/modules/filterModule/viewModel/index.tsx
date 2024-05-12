import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import { useFetchCourseByNiveauQuery } from "../../../store/services/course";
import { useRoute } from "@react-navigation/native";
const useFilterModuleViewModels = () => {
  const filter: any = useRoute()?.params;
  const { data, isLoading } = useFetchCourseByNiveauQuery(decodeURIComponent(filter?.params?.filter), {
      skip: !filter?.params?.filter,
    });
  const values = useMemo(() => {
    return { courses: data?.cours||[], };
  }, [data]);
  return values;
};
export default useFilterModuleViewModels;
