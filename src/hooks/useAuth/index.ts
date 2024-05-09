<<<<<<< HEAD
import { useCallback, useContext, useEffect, useState } from "react";
import { saveToken } from "../../storage";
import { logOut } from "../../storage/credentials";
import { useAppDispatch } from "../useStore";
import { logOutUser, setCredentials } from "../../store/slices";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const saveAuth = useCallback(
    async (token: string, user:any) => {
      console.log('\x1b[34m%s\x1b[0m', 'src/hooks/useAuth/index.ts:11 user', user);
      dispatch(setCredentials({ user: user }));
      await saveToken(token);
    },
    [saveToken]
  );

  const logOutAuth = useCallback(async () => {
    dispatch(logOutUser());
    await logOut();
  }, [logOut]);

  return { saveAuth, logOutAuth };
};

=======
import { useCallback, useContext, useEffect, useState } from 'react';
import { saveToken } from '../../storage';
import { logOut } from '../../storage/credentials';



const useAuth = () => {
  const saveAuth=useCallback(async(token:string)=>{
    await saveToken(token);
  },[saveToken]);

  const logOutAuth=useCallback(async()=>{

    await logOut();

  },[logOut]);

  return {saveAuth,logOutAuth};
};


>>>>>>> 50fe44b2 (- add WS login implementation)
export default useAuth;
