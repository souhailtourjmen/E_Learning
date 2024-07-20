import * as yup from 'yup';
import { i18next } from '../../config';
import { TEXT } from '../../constant';


export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(i18next.t(TEXT.Login.EmailValid))
    .matches(/@[a-zA-Z0-9-]+\.[a-zA-Z]{1,}$/, i18next.t(TEXT.SignUp.EmailValid))
    .required(i18next.t(TEXT.Login.EmailRequired)),
  gender: yup.string(),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3179387e (add feature chat module)
  path: yup.string().required(i18next.t(TEXT.SignUp.GenderRequired)),
  password: yup
    .string()
    .required(i18next.t(TEXT.SignUp.PasswordRequired))
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 30639760 (module auth and regsister token done)
  // .min(
  //   8,
  //   ({min}) => `Le mot de passe doit contenir au moins ${min} caractères`,
  // )
  // .matches(/\w*[A-Z]\w*/, i18next.t(TEXT.SignUp.PasswordCapitalLettre))
  // .matches(/\d/, i18next.t(TEXT.SignUp.PasswordNumberCheck)),
<<<<<<< HEAD
});
export const emailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required(i18next.t(TEXT.SignUp.EmailRequired))
    .email(i18next.t(TEXT.SignUp.EmailValid))
    .matches(/@[a-zA-Z0-9-]+\.[a-zA-Z]{1,}$/, i18next.t(TEXT.SignUp.EmailValid)),
});

// SignUp

export const signUpValidationSchema = yup.object().shape({
  prenom: yup
    .string()
    .required(i18next.t(TEXT.SignUp.FirstNameRequired))
    .matches(/^[aA-zZ\s]+$/, i18next.t(TEXT.SignUp.Caps))
    .min(3, i18next.t(TEXT.SignUp.FirstNameShort))
    .max(30, i18next.t(TEXT.SignUp.FirstNameLong)),
  nom: yup
    .string()
    .required(i18next.t(TEXT.SignUp.LastNameRequired))
    .matches(/^[aA-zZ\s]+$/, i18next.t(TEXT.SignUp.Caps))
    .min(3, i18next.t(TEXT.SignUp.LastNameShort))
    .max(30, i18next.t(TEXT.SignUp.LastNameLong)),
  numero: yup
    .string()
    .required(i18next.t(TEXT.SignUp.PhoneNumberRequired))
    .matches(/\d{8,}$/, i18next.t(TEXT.SignUp.PhoneNumberLength),
    ),
    matricule: yup
    .string()
    .required('matricule')
    .matches(/\d{12,}$/, i18next.t(TEXT.SignUp.PhoneNumberLength),
    ),
  password: yup
    .string()
    .required(i18next.t(TEXT.SignUp.PasswordRequired))
    .min(8, ({ min }) => `Le mot de passe doit contenir au moins ${min} caractères`)
    .matches(/\w*[A-Z]\w*/, i18next.t(TEXT.SignUp.PasswordCapitalLettre))
    .matches(/\d/, i18next.t(TEXT.SignUp.PasswordNumberCheck)),
  datenai: yup
    .string()
    .required(i18next.t(TEXT.SignUp.DateRequired))
    .typeError(i18next.t(TEXT.SignUp.DateField)),
  gouvernorat: yup.string().required(i18next.t(TEXT.SignUp.GenderRequired)),
  classe: yup.string().required(i18next.t(TEXT.SignUp.GenderRequired)),
  path: yup.string().required(i18next.t(TEXT.SignUp.GenderRequired)),
  email: yup
    .string()
    .required(i18next.t(TEXT.SignUp.EmailRequired))
    .matches(/@[a-zA-Z0-9-]+\.[a-zA-Z]{1,}$/, i18next.t(TEXT.SignUp.EmailValid))
    .email(i18next.t(TEXT.SignUp.EmailValid)),
});

=======
<<<<<<< HEAD
  password: yup
    .string()
    .required(i18next.t(TEXT.SignUp.PasswordRequired))
  // .min(
  //   8,
  //   ({min}) => `Le mot de passe doit contenir au moins ${min} caractères`,
  // )
  // .matches(/\w*[A-Z]\w*/, i18next.t(TEXT.SignUp.PasswordCapitalLettre))
  // .matches(/\d/, i18next.t(TEXT.SignUp.PasswordNumberCheck)),
});
export const emailValidationSchema = yup.object().shape({
<<<<<<< HEAD
=======
    // .min(
    //   8,
    //   ({min}) => `Le mot de passe doit contenir au moins ${min} caractères`,
    // )
    // .matches(/\w*[A-Z]\w*/, i18n.t(TEXT.SignUp.PasswordCapitalLettre))
    // .matches(/\d/, i18n.t(TEXT.SignUp.PasswordNumberCheck)),
});
export const emailValidationSchema = yup.object().shape({
>>>>>>> 54475f41 (Create module auth signIn)
    email: yup
      .string()
      .required(i18next.t(TEXT.SignUp.EmailRequired))
      .email(i18next.t(TEXT.SignUp.EmailValid))
      .matches(/@[a-zA-Z0-9-]+\.[a-zA-Z]{1,}$/, i18next.t(TEXT.SignUp.EmailValid)),
  });
<<<<<<< HEAD
>>>>>>> ef87bf9c (Create module auth signIn)
=======
  email: yup
    .string()
    .required(i18next.t(TEXT.SignUp.EmailRequired))
    .email(i18next.t(TEXT.SignUp.EmailValid))
    .matches(/@[a-zA-Z0-9-]+\.[a-zA-Z]{1,}$/, i18next.t(TEXT.SignUp.EmailValid)),
});

// SignUp

export const signUpValidationSchema = yup.object().shape({
  prenom: yup
    .string()
    .required(i18next.t(TEXT.SignUp.FirstNameRequired))
    .matches(/^[aA-zZ\s]+$/, i18next.t(TEXT.SignUp.Caps))
    .min(3, i18next.t(TEXT.SignUp.FirstNameShort))
    .max(30, i18next.t(TEXT.SignUp.FirstNameLong)),
  nom: yup
    .string()
    .required(i18next.t(TEXT.SignUp.LastNameRequired))
    .matches(/^[aA-zZ\s]+$/, i18next.t(TEXT.SignUp.Caps))
    .min(3, i18next.t(TEXT.SignUp.LastNameShort))
    .max(30, i18next.t(TEXT.SignUp.LastNameLong)),
  numero: yup
    .string()
    .required(i18next.t(TEXT.SignUp.PhoneNumberRequired))
    .matches(/\d{8,}$/, i18next.t(TEXT.SignUp.PhoneNumberLength),
    ),
    matricule: yup
    .string()
    .required('matricule')
    .matches(/\d{12,}$/, i18next.t(TEXT.SignUp.PhoneNumberLength),
    ),
  password: yup
    .string()
    .required(i18next.t(TEXT.SignUp.PasswordRequired))
    .min(8, ({ min }) => `Le mot de passe doit contenir au moins ${min} caractères`)
    .matches(/\w*[A-Z]\w*/, i18next.t(TEXT.SignUp.PasswordCapitalLettre))
    .matches(/\d/, i18next.t(TEXT.SignUp.PasswordNumberCheck)),
  datenai: yup
    .string()
    .required(i18next.t(TEXT.SignUp.DateRequired))
    .typeError(i18next.t(TEXT.SignUp.DateField)),
  gouvernorat: yup.string().required(i18next.t(TEXT.SignUp.GenderRequired)),
  classe: yup.string().required(i18next.t(TEXT.SignUp.GenderRequired)),
  path: yup.string().required(i18next.t(TEXT.SignUp.GenderRequired)),
  email: yup
    .string()
    .required(i18next.t(TEXT.SignUp.EmailRequired))
    .matches(/@[a-zA-Z0-9-]+\.[a-zA-Z]{1,}$/, i18next.t(TEXT.SignUp.EmailValid))
    .email(i18next.t(TEXT.SignUp.EmailValid)),
});

>>>>>>> 1df81466 (module auth and regsister token done)
=======
>>>>>>> 69415541 (Create module auth signIn)
<<<<<<< HEAD
>>>>>>> 54475f41 (Create module auth signIn)
=======
=======
});
export const emailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required(i18next.t(TEXT.SignUp.EmailRequired))
    .email(i18next.t(TEXT.SignUp.EmailValid))
    .matches(/@[a-zA-Z0-9-]+\.[a-zA-Z]{1,}$/, i18next.t(TEXT.SignUp.EmailValid)),
});

// SignUp

export const signUpValidationSchema = yup.object().shape({
  prenom: yup
    .string()
    .required(i18next.t(TEXT.SignUp.FirstNameRequired))
    .matches(/^[aA-zZ\s]+$/, i18next.t(TEXT.SignUp.Caps))
    .min(3, i18next.t(TEXT.SignUp.FirstNameShort))
    .max(30, i18next.t(TEXT.SignUp.FirstNameLong)),
  nom: yup
    .string()
    .required(i18next.t(TEXT.SignUp.LastNameRequired))
    .matches(/^[aA-zZ\s]+$/, i18next.t(TEXT.SignUp.Caps))
    .min(3, i18next.t(TEXT.SignUp.LastNameShort))
    .max(30, i18next.t(TEXT.SignUp.LastNameLong)),
  numero: yup
    .string()
    .required(i18next.t(TEXT.SignUp.PhoneNumberRequired))
    .matches(/\d{8,}$/, i18next.t(TEXT.SignUp.PhoneNumberLength),
    ),
    matricule: yup
    .string()
    .required('matricule')
    .matches(/\d{12,}$/, i18next.t(TEXT.SignUp.PhoneNumberLength),
    ),
  password: yup
    .string()
    .required(i18next.t(TEXT.SignUp.PasswordRequired))
    .min(8, ({ min }) => `Le mot de passe doit contenir au moins ${min} caractères`)
    .matches(/\w*[A-Z]\w*/, i18next.t(TEXT.SignUp.PasswordCapitalLettre))
    .matches(/\d/, i18next.t(TEXT.SignUp.PasswordNumberCheck)),
  datenai: yup
    .string()
    .required(i18next.t(TEXT.SignUp.DateRequired))
    .typeError(i18next.t(TEXT.SignUp.DateField)),
  gouvernorat: yup.string().required(i18next.t(TEXT.SignUp.GenderRequired)),
  classe: yup.string().required(i18next.t(TEXT.SignUp.GenderRequired)),
  path: yup.string().required(i18next.t(TEXT.SignUp.GenderRequired)),
  email: yup
    .string()
    .required(i18next.t(TEXT.SignUp.EmailRequired))
    .matches(/@[a-zA-Z0-9-]+\.[a-zA-Z]{1,}$/, i18next.t(TEXT.SignUp.EmailValid))
    .email(i18next.t(TEXT.SignUp.EmailValid)),
});

>>>>>>> 30639760 (module auth and regsister token done)
>>>>>>> 67e6b12f (module auth and regsister token done)
