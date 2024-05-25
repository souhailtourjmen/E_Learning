import * as yup from 'yup';

export const eleveSchema = yup.object().shape({
  classe: yup
    .string()
    .required('La classe est requise'),  // message personnalisé ou i18n
  datenai: yup
    .string()
    .required('La date de naissance est requise')
    .typeError('La date de naissance doit être une date valide'),
  email: yup
    .string()
    .required('L\'email est requis')
    .email('L\'email doit être valide')
    .matches(/@[a-zA-Z0-9-]+\.[a-zA-Z]{1,}$/, 'L\'email doit être valide'),
  gouvernorat: yup
    .string()
    .required('Le gouvernorat est requis'),
  matricule: yup
    .string()
    .required('Le matricule est requis')
    .matches(/^\d+$/, 'Le matricule doit être un nombre valide'),
  nom: yup
    .string()
    .required('Le nom est requis'),
  numero: yup
    .string()
    .required('Le numéro de téléphone est requis')
    .matches(/^\d+$/, 'Le numéro de téléphone doit être un nombre valide'),
  prenom: yup
    .string()
    .required('Le prénom est requis')
});