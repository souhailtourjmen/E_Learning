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
  password: yup
    .string()
    .required(i18next.t(TEXT.SignUp.PasswordRequired))
    // .min(
    //   8,
    //   ({min}) => `Le mot de passe doit contenir au moins ${min} caractères`,
    // )
    // .matches(/\w*[A-Z]\w*/, i18n.t(TEXT.SignUp.PasswordCapitalLettre))
    // .matches(/\d/, i18n.t(TEXT.SignUp.PasswordNumberCheck)),
});
export const emailValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required(i18next.t(TEXT.SignUp.EmailRequired))
      .email(i18next.t(TEXT.SignUp.EmailValid))
      .matches(/@[a-zA-Z0-9-]+\.[a-zA-Z]{1,}$/, i18next.t(TEXT.SignUp.EmailValid)),
  });