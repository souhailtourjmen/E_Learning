export interface NavigationParamsType {
    screen: string | {};
    name?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 97ed279c (- add dynamic screen details)
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
>>>>>>> 97ed279c (- add dynamic screen details)
