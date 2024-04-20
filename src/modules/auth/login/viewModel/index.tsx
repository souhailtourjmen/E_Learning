import React, {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ef87bf9c (Create module auth signIn)
=======
>>>>>>> 4cdec91b (first unit project)
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
<<<<<<< HEAD
    const [checkedSegment, setCheckedSegment] = useState<number>(route?.params?.navigationParams.checkedSegment);
=======
    const [checkedSegment, setCheckedSegment] = useState<number>(route?.params?.checkedSegment);
>>>>>>> ef87bf9c (Create module auth signIn)
    
    const [pushMail, setPushMail] = useState<boolean>(false);
    const [accessData, setAccessData] = useState<boolean>(false);
    const [defaultValues, setDefaultValues] = useState<DefaultValues>({
<<<<<<< HEAD
      email:"testNewEleve@gmail.com",
      password:"Azerty1234",
=======
      email: Config?.email || '',
      password: Config?.password || '',
>>>>>>> ef87bf9c (Create module auth signIn)
    });
    const [gender] = useState(
      i18next.t(TEXT.SignUp.gender, {
        returnObjects: true,
      }),
    );
<<<<<<< HEAD
    useEffect(() => {
      setCheckedSegment(route?.params?.navigationParams.checkedSegment);
    }, [route?.params?.navigationParams.checkedSegment]);
=======
    
>>>>>>> ef87bf9c (Create module auth signIn)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4cdec91b (first unit project)
  
=======
Dispatch,
SetStateAction,
useCallback,
useEffect,
useState,
} from 'react';
const useLoginViewModels = () => {
return {};
};
export default useLoginViewModels;
<<<<<<< HEAD
>>>>>>> ab93aef2 (first unit project)
=======
  
>>>>>>> ef87bf9c (Create module auth signIn)
=======
>>>>>>> e6aa837d (first unit project)
>>>>>>> 4cdec91b (first unit project)
