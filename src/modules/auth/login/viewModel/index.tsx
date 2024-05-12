import React, {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
  } from 'react';
  import Config from 'react-native-config';
  import { useRoute } from '@react-navigation/native';
import { i18next } from '../../../../config';
import { TEXT } from '../../../../constant';
  type DefaultValues = {
    email?: string;
    password?: string;
  };
  const useSignInModels = () => {
    const route: any = useRoute();
    console.log(route)
    const [checkedSegment, setCheckedSegment] = useState<number>(route?.params?.navigationParams.checkedSegment);
    
    const [pushMail, setPushMail] = useState<boolean>(false);
    const [accessData, setAccessData] = useState<boolean>(false);
    const [defaultValues, setDefaultValues] = useState<DefaultValues>({
      email: Config?.email || '',
      password: Config?.password || '',
    });
    const [gender] = useState(
      i18next.t(TEXT.SignUp.gender, {
        returnObjects: true,
      }),
    );
    useEffect(() => {
      setCheckedSegment(route?.params?.navigationParams.checkedSegment);
    }, [route?.params?.navigationParams.checkedSegment]);
    return {
      checkedSegment,
      setCheckedSegment,
      defaultValues,
      setDefaultValues,
      gender,
      pushMail,
      setPushMail,
      accessData,
      setAccessData
    };
  };
  export default useSignInModels;
  