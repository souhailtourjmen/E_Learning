import React, {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ef87bf9c (Create module auth signIn)
=======
>>>>>>> 4cdec91b (first unit project)
=======
=======
>>>>>>> 69415541 (Create module auth signIn)
>>>>>>> 54475f41 (Create module auth signIn)
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
<<<<<<< HEAD
<<<<<<< HEAD
    const [checkedSegment, setCheckedSegment] = useState<number>(route?.params?.navigationParams.checkedSegment);
=======
    const [checkedSegment, setCheckedSegment] = useState<number>(route?.params?.checkedSegment);
>>>>>>> ef87bf9c (Create module auth signIn)
=======
    console.log(route)
=======
>>>>>>> 00287c65 (-add new service profile)
    const [checkedSegment, setCheckedSegment] = useState<number>(route?.params?.navigationParams.checkedSegment);
>>>>>>> 3179387e (add feature chat module)
    
    const [pushMail, setPushMail] = useState<boolean>(false);
    const [accessData, setAccessData] = useState<boolean>(false);
    const [defaultValues, setDefaultValues] = useState<DefaultValues>({
<<<<<<< HEAD
<<<<<<< HEAD
      email:"testNewEleve@gmail.com",
      password:"Azerty1234",
=======
      email: Config?.email || '',
      password: Config?.password || '',
>>>>>>> ef87bf9c (Create module auth signIn)
=======
      email:"testNewEleve@gmail.com",
      password:"Azerty1234",
>>>>>>> 00287c65 (-add new service profile)
    });
    const [gender] = useState(
      i18next.t(TEXT.SignUp.gender, {
        returnObjects: true,
      }),
    );
<<<<<<< HEAD
<<<<<<< HEAD
    useEffect(() => {
      setCheckedSegment(route?.params?.navigationParams.checkedSegment);
    }, [route?.params?.navigationParams.checkedSegment]);
=======
    
>>>>>>> ef87bf9c (Create module auth signIn)
=======
    useEffect(() => {
      setCheckedSegment(route?.params?.navigationParams.checkedSegment);
    }, [route?.params?.navigationParams.checkedSegment]);
>>>>>>> 3179387e (add feature chat module)
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
<<<<<<< HEAD
=======
>>>>>>> 4cdec91b (first unit project)
=======
>>>>>>> 54475f41 (Create module auth signIn)
  
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
<<<<<<< HEAD
>>>>>>> 4cdec91b (first unit project)
=======
=======
  
>>>>>>> 69415541 (Create module auth signIn)
>>>>>>> 54475f41 (Create module auth signIn)
