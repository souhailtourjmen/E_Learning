export interface NavigationParamsType {
    screen: string | {};
    name?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 97ed279c (- add dynamic screen details)
=======
>>>>>>> af751c6f (- add new screen onbording)
=======
=======
>>>>>>> 343adf8e (- add dynamic screen details)
>>>>>>> 11b8c648 (- add dynamic screen details)
    params?: any;
  }

  export interface Credentials {
    email: string;
    password?: string;
    path?:string;
  }
  export interface ReclamationCredentials {
    message?: string;
    order_id?: string;
    object?: string;
  }
  export interface UpdatePasswordCredentials {
    new_password?: string;
    confirmation_password: string;
  }
  export interface ForgetPasswordCredentials {
    email?: string;
  }
  export interface UpdateProfileCredentials {
    birthday?: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
  }
  export interface SignUpBody {
    prenom?: string;
    nom?: string;
    email?: string;
    password?: string;
    path?: string;
    numero?: string;
    datenai?: string;
    gouvernorat?: string;
    classe?: string;
    matricule?: string;
  }
  export interface Video {
<<<<<<< HEAD
    _id: string;
    description: string;
    url: string;
    subtitle: string;
    thumb: string;
    title: string;
<<<<<<< HEAD
<<<<<<< HEAD
}
  
  export interface POSTMessage {
    nom: string;
    prenom: string;
    photo?: string;
    contenu: string;
}
export interface DefaultValues {
  classe: string;
  datenai: string;
  email: string;
  gouvernorat: string;
  matricule: string;
  nom: string;
  numero: string;
  prenom: string;
}
=======
    navigationParams?: NavigationItemType | any;
  }
  export interface NavigationItemType {
    screen: string;
    id?: string;
    slug?: string;
    title?: string;
    description?: string;
    image?: string;
  }
<<<<<<< HEAD
>>>>>>> 5c6f7ff1 (- add new screen onbording)
=======
  export interface Credentials {
    email: string;
    password?: string;
    path?:string;
  }
  export interface ReclamationCredentials {
    message?: string;
    order_id?: string;
    object?: string;
  }
  export interface UpdatePasswordCredentials {
    new_password?: string;
    confirmation_password: string;
  }
  export interface ForgetPasswordCredentials {
    email?: string;
  }
  export interface UpdateProfileCredentials {
    birthday?: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
  }
  export interface SignUpBody {
    prenom?: string;
    nom?: string;
    email?: string;
    password?: string;
<<<<<<< HEAD
    // password_confirmation?: string;
    gender?: string;
    phone?: string;
    birthday?: string;
  }
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
    path?: string;
    numero?: string;
    datenai?: string;
    gouvernorat?: string;
    classe?: string;
    matricule?: string;
  }
>>>>>>> 1df81466 (module auth and regsister token done)
=======
    description: string;
    sources: string;
    subtitle: string;
    thumb: string;
    title: string;
}
<<<<<<< HEAD
>>>>>>> 97ed279c (- add dynamic screen details)
=======
=======
    navigationParams?: NavigationItemType | any;
  }
  export interface NavigationItemType {
    screen: string;
    id?: string;
    slug?: string;
    title?: string;
    description?: string;
    image?: string;
  }
<<<<<<< HEAD
>>>>>>> 9c8d4eae (- add new screen onbording)
<<<<<<< HEAD
>>>>>>> af751c6f (- add new screen onbording)
=======
=======
  export interface Credentials {
    email: string;
    password?: string;
    path?:string;
  }
  export interface ReclamationCredentials {
    message?: string;
    order_id?: string;
    object?: string;
  }
  export interface UpdatePasswordCredentials {
    new_password?: string;
    confirmation_password: string;
  }
  export interface ForgetPasswordCredentials {
    email?: string;
  }
  export interface UpdateProfileCredentials {
    birthday?: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
  }
  export interface SignUpBody {
    prenom?: string;
    nom?: string;
    email?: string;
    password?: string;
<<<<<<< HEAD
    // password_confirmation?: string;
    gender?: string;
    phone?: string;
    birthday?: string;
  }
>>>>>>> df35d18d (- add WS login implementation)
<<<<<<< HEAD
>>>>>>> c662ef07 (- add WS login implementation)
=======
=======
    path?: string;
    numero?: string;
    datenai?: string;
    gouvernorat?: string;
    classe?: string;
    matricule?: string;
  }
>>>>>>> 30639760 (module auth and regsister token done)
<<<<<<< HEAD
>>>>>>> 67e6b12f (module auth and regsister token done)
=======
=======
}
>>>>>>> 343adf8e (- add dynamic screen details)
<<<<<<< HEAD
>>>>>>> 11b8c648 (- add dynamic screen details)
=======
=======
}
  
  export interface POSTMessage {
    nom: string;
    prenom: string;
    photo?: string;
    contenu: string;
}
>>>>>>> 248b181a (add feature chat module)
>>>>>>> 3179387e (add feature chat module)
