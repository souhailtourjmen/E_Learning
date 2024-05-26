export interface NavigationParamsType {
    screen: string | {};
    name?: string;
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