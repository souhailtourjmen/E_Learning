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


export default useAuth;
