<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4cdec91b (first unit project)
=======
>>>>>>> 54475f41 (Create module auth signIn)
import React, { ReactElement } from "react";

import { styles } from "./styles";

import { useForm } from "react-hook-form";
import { Platform, useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  Button,
  ButtonSocialMedia,
  GoBackButton,
  Link,
  ScrollView,
  SegmentComponent,
  Text,
  View,
} from "../../../components";
import { COLORS, ICONS, IMGS, TEXT } from "../../../constant";
import { i18next } from "../../../config";
import { CustomInputForm, DateForm } from "../../../components/form";
import { yupResolver } from "@hookform/resolvers/yup";
import useSignInModels from "./viewModel";
import useSignInController from "./viewController";
import { loginValidationSchema, signUpValidationSchema } from "../../../validation/formSignin";
import { LayoutAnimated } from "../../../layouts";
import Gouvernorats from "../../../mockData/Gouvernorats"
import NIVEAUX from "../../../mockData/NIVEAUX"
import SelectForm from "../../../components/form/SelectForm";
type propsSignIn = {};
const SignIn = ({}: propsSignIn): ReactElement => {
  const route: any = useRoute();
  const {} = useSignInModels();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const { handleSegment, checkedSegment, navigateToFPS,onSubmit } =
=======
  const { handleSegment, checkedSegment, accessData, navigateToFPS,onSubmit } =
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
  const { handleSegment, checkedSegment, navigateToFPS,onSubmit } =
>>>>>>> 1df81466 (module auth and regsister token done)
=======
=======
>>>>>>> 67e6b12f (module auth and regsister token done)
  const { handleSegment, checkedSegment, navigateToFPS,onSubmit } =
=======
  const { handleSegment, checkedSegment, accessData, navigateToFPS,onSubmit } =
>>>>>>> df35d18d (- add WS login implementation)
<<<<<<< HEAD
>>>>>>> c662ef07 (- add WS login implementation)
=======
=======
  const { handleSegment, checkedSegment, navigateToFPS,onSubmit } =
>>>>>>> 30639760 (module auth and regsister token done)
>>>>>>> 67e6b12f (module auth and regsister token done)
    useSignInController();
  const {
    reset,
    control,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(checkedSegment == 1 ? loginValidationSchema : signUpValidationSchema
      ),
    defaultValues: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      email:"tourjmenEleve@gmail.com",
=======
      email:"hello@gmail.com",
>>>>>>> 67e6b12f (module auth and regsister token done)
=======
      email:"hello@gmail.com",
=======
      email:"testMobile@gmail.com",
>>>>>>> 248b181a (add feature chat module)
>>>>>>> 3179387e (add feature chat module)
      password:'Azerty1234',
      path: "eleve",
      classe:'7ème',
      gouvernorat:`Gouvernorat de l'Ariana`
=======
      // ...defaultValues,
      email:"Hello@Gmail.Com",
      password:'Azerty1234',
      gender: "Homme",
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
=======
>>>>>>> c662ef07 (- add WS login implementation)
      email:"hello@gmail.com",
      password:'Azerty1234',
      path: "eleve",
      classe:'7ème',
      gouvernorat:`Gouvernorat de l'Ariana`
<<<<<<< HEAD
>>>>>>> 1df81466 (module auth and regsister token done)
=======
=======
      // ...defaultValues,
      email:"Hello@Gmail.Com",
      password:'Azerty1234',
      gender: "Homme",
>>>>>>> df35d18d (- add WS login implementation)
<<<<<<< HEAD
>>>>>>> c662ef07 (- add WS login implementation)
=======
=======
      email:"hello@gmail.com",
      password:'Azerty1234',
      path: "eleve",
      classe:'7ème',
      gouvernorat:`Gouvernorat de l'Ariana`
>>>>>>> 30639760 (module auth and regsister token done)
>>>>>>> 67e6b12f (module auth and regsister token done)
    },
  });
  const { height, width } = useWindowDimensions();

  return (
    <LayoutAnimated>
      <View style={styles.titleContainer}>
        <GoBackButton
          style={{
            marginTop:'10%',
            borderRadius: 50,
            width: 40,
            height: 40,
            padding: 10,
            backgroundColor: COLORS.primary,
          }}
          color={COLORS.background}
        />
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <SegmentComponent
            CheckedSegment={checkedSegment}
            handleSegment={(item: any) => handleSegment(item)}
          />

          <View
            style={[
              styles.form,
              { display: checkedSegment == 0 ? "none" : "flex" },
            ]}
          >
            <CustomInputForm
              styleComponent={styles.styleComponent}
              textStyle={styles.styleText}
              styleInput={styles.styleInput}
              name="email"
              control={control}
              placeholder={i18next.t(TEXT.Login.palcholder.email)}
              keyboardType="email-address"
            />

            <CustomInputForm
              styleComponent={styles.styleComponent}
              textStyle={styles.styleText}
              styleInput={styles.styleInput}
              name="password"
              control={control}
              placeholder={i18next.t(TEXT.SignUp.placeholder.password)}
              secureTextEntry={true}
            />
            <View style={styles.mdp}>
              <Link
                onPress={() => navigateToFPS()}
                text={i18next.t(TEXT.Login.MDPO)}
                color={COLORS.primary}
              />
            </View>
          <SelectForm  control={control} items={[{ name: 'eleve' }, { name: 'parent' }]} name={"path"}  style={styles.styleComponent}/>
          </View>

          <View
            style={[
              styles.form,
              { display: checkedSegment == 1 ? "none" : "flex" },
            ]}
          >
            {/* {gender && (
                <SelectForm
                  items={gender}
                  control={control}
                  name="gender"
                  styleComponent={styles.styleComponent}
                />
              )} */}

            <CustomInputForm
              styleComponent={styles.styleComponent}
              textStyle={styles.styleText}
              styleInput={styles.styleInput}
              name="nom"
              control={control}
              placeholder={i18next.t(TEXT.SignUp.placeholder.nom)}
            />
            <CustomInputForm
              styleComponent={styles.styleComponent}
              textStyle={styles.styleText}
              styleInput={styles.styleInput}
              name="prenom"
              control={control}
              placeholder={i18next.t(TEXT.SignUp.placeholder.prenom)}
            />
            <View style={{ width:"100%",}}>
            <DateForm
              control={control}
              name="datenai"
              styleComponent={styles.styleComponent}
            />

            </View>
            <CustomInputForm
              styleComponent={styles.styleComponent}
              textStyle={styles.styleText}
              styleInput={styles.styleInput}
              name="numero"
              control={control}
              placeholder={i18next.t(TEXT.SignUp.placeholder.tel)}
              keyboardType="number-pad"
              inputMode="numeric"
              maxLength={10}
            />
            <CustomInputForm
              styleComponent={styles.styleComponent}
              textStyle={styles.styleText}
              styleInput={styles.styleInput}
              name="matricule"
              control={control}
              placeholder={'matricule'}
              keyboardType="number-pad"
              inputMode="numeric"
              maxLength={12}
              
            />
            <CustomInputForm
              styleComponent={styles.styleComponent}
              textStyle={styles.styleText}
              styleInput={styles.styleInput}
              name="email"
              control={control}
              placeholder={i18next.t(TEXT.Login.palcholder.email)}
              keyboardType="email-address"
            />
            <CustomInputForm
              styleComponent={styles.styleComponent}
              textStyle={styles.styleText}
              styleInput={styles.styleInput}
              name="password"
              control={control}
              placeholder={i18next.t(TEXT.SignUp.placeholder.password)}
              secureTextEntry={true}
            />
            <SelectForm  control={control} items={Gouvernorats} name={"gouvernorat"}  style={styles.styleComponent}/>

            <SelectForm  control={control} items={NIVEAUX} name={"classe"}  style={styles.styleComponent}/>

<<<<<<< HEAD
<<<<<<< HEAD
=======
            <SelectForm  control={control} items={[{ name: 'eleve' }, { name: 'parent' }]} name={"path"}  style={styles.styleComponent}/>
>>>>>>> 1df81466 (module auth and regsister token done)
=======
>>>>>>> 3179387e (add feature chat module)
          </View>
          <View style={[styles.btnSubmit,{ width:"90%"},]}>
            {/* {isLoading && <Spinner />} */}

            <Button
              text={
                checkedSegment == 1
                  ? i18next.t(TEXT.Login.SeConnecter)
                  : i18next.t(TEXT.Login.Sinscrire)
              }
               fullWidth
              rounded
             
              style={{
                minHeight: 50,
                backgroundColor:
                 COLORS?.primary
                   
              }}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
          <View style={styles.separator}>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: COLORS.darkGray,
              }}
            />
          </View>
          <View style={styles.BTnSocial}>
            <ButtonSocialMedia
              text={i18next.t(TEXT.BUTTONS.Google)}
              img={ICONS.google_icon}
              textSyle={{ color: COLORS.darkGray }}
            />
            <ButtonSocialMedia
              text={i18next.t(TEXT.BUTTONS.Facebook)}
              img={ICONS.facebook_icon}
              style={{ backgroundColor: "#1877F2" }}
              textSyle={{ color: COLORS.background }}
            />
            {Platform.OS === "ios" && (
              <ButtonSocialMedia
                text={i18next.t(TEXT.BUTTONS.Apple)}
                img={ICONS.apple_icon}
                style={{ backgroundColor: "#050708" }}
                textSyle={{ color: COLORS.background }}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </LayoutAnimated>
  );
};
export default SignIn;
=======
import React, { ReactElement, memo, useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 54475f41 (Create module auth signIn)
=======
import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
<<<<<<< HEAD
>>>>>>> ef87bf9c (Create module auth signIn)

import {styles} from './styles';


import {useForm} from 'react-hook-form';
import {Platform} from 'react-native';
import {Radio, RadioGroup} from '@ui-kitten/components';


import {useNavigation, useRoute} from '@react-navigation/native';
import { Button, ButtonSocialMedia, Link, ScrollView, SegmentComponent, Text, View } from '../../../components';
import { COLORS, ICONS, IMGS, TEXT } from '../../../constant';
import { i18next } from '../../../config';
import { CustomInputForm, DateForm } from '../../../components/form';
import {yupResolver} from '@hookform/resolvers/yup';
import useSignInModels from './viewModel';
import useSignInController from './viewController';
import { loginValidationSchema } from '../../../validation/formSignin';
type propsSignIn = {};
const SignIn = ({}: propsSignIn): ReactElement => {
  const route: any = useRoute();
  const {} = useSignInModels();
  const {
    handleSegment,
    checkedSegment,
    defaultValues,
    gender,
    pushMail, setPushMail, accessData, setAccessData,
    navigateToFPS,
  } = useSignInController();
  const {
    reset,
    control,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(
      loginValidationSchema,
    ),
    defaultValues: {
      // ...defaultValues,
      gender: 'Homme',
    },
  });

  return (
    <>
      {/* <View style={styles.titleContainer}>
        <GoBackButton
          style={{borderRadius: 50, width: 40, height: 40, padding: 10}}
        />
      </View> */}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
       
          <View style={styles.container}>
            <SegmentComponent
              CheckedSegment={route?.params?.checkedSegment}
              handleSegment={(item: any) => handleSegment(item)}
            />

            <View
              style={[
                styles.form,
                {display: checkedSegment == 0 ? 'none' : 'flex'},
              ]}>
              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="email"
                control={control}
                placeholder={i18next.t(TEXT.Login.palcholder.email)}
                keyboardType="email-address"
              />

              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="password"
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.password)}
                secureTextEntry={true}
              />
              <View style={styles.mdp}>
                <Link
                  onPress={() => navigateToFPS()}
                  text={i18next.t(TEXT.Login.MDPO)}
                  color={COLORS.primary}
                />
              </View>
            </View>

            <View
              style={[
                styles.form,
                {display: checkedSegment == 1 ? 'none' : 'flex'},
              ]}>
              {/* {gender && (
                <SelectForm
                  items={gender}
                  control={control}
                  name="gender"
                  styleComponent={styles.styleComponent}
                />
              )} */}

              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="last_name"
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.nom)}
              />
              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="first_name"
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.prenom)}
              />
              <DateForm
                control={control}
                name="birthday"
                styleComponent={styles.styleComponent}
              />
              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="phone"
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.tel)}
                keyboardType="number-pad"
                inputMode="numeric"
                maxLength={10}
              />
              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="email"
                control={control}
                placeholder={i18next.t(TEXT.Login.palcholder.email)}
                keyboardType="email-address"
              />

              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="password"
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.password)}
                secureTextEntry={true}
              />

              <View
                style={{
                  alignItems: 'flex-start',
                 
                  paddingLeft: 40,
                  paddingRight: 40,
                  marginTop: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  <Radio
                    checked={pushMail}
                    onChange={nextChecked => setPushMail(nextChecked)}
                    style={styles.radio}
                    status="primary"
                  />

                  <View>
                    <Text style={[styles.radioTitle, {color: '#011A33'}]}>
                      {i18next.t(TEXT.SignUp.radio.pushMail)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.radioSubTitle}>
                  {i18next.t(TEXT.SignUp.radio.pushMailDescription)}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Radio
                    checked={accessData}
                    onChange={nextChecked => setAccessData(nextChecked)}
                    style={[styles.radio]}
                    status="primary"
                  />
                  <View>
                    <Text style={[styles.radioTitle, {color: '#011A33'}]}>
                      {i18next.t(TEXT.SignUp.radio.accessData)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.radioSubTitle}>
                  {i18next.t(TEXT.SignUp.radio.accessDataDescription)}
                </Text>
              </View>
            </View>
            <View style={styles.btnSubmit}>
              {/* {isLoading && <Spinner />} */}

              <Button
                text={
                  checkedSegment == 1
                    ? i18next.t(TEXT.Login.SeConnecter)
                    : i18next.t(TEXT.Login.Sinscrire)
                }
                // fullWidth
                rounded
                disabled={
                  checkedSegment == 1
                    ? false
                    : !pushMail || !accessData
                    ? true
                    : false
                }
                style={{
                  minHeight: 50,
                  backgroundColor:
                    checkedSegment == 1
                      ? COLORS?.primary
                      : !pushMail || !accessData
                      ? COLORS?.darkGray
                      : COLORS?.primary,
                }}
                
              />
            </View>
            <View style={styles.separator}>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: COLORS.darkGray,
                
                }}
              />
            </View>
            <View style={styles.BTnSocial}>
              <ButtonSocialMedia
                text={i18next.t(TEXT.BUTTONS.Google)}
                img={ICONS.google_icon}
                textSyle={{color: COLORS.darkGray}}
              />
              <ButtonSocialMedia
                text={i18next.t(TEXT.BUTTONS.Facebook)}
                img={ICONS.facebook_icon}
                style={{backgroundColor: '#1877F2'}}
                textSyle={{color: COLORS.background}}
              />
              {Platform.OS === 'ios' && (
                <ButtonSocialMedia
                  text={i18next.t(TEXT.BUTTONS.Apple)}
                  img={ICONS.apple_icon}
                  style={{backgroundColor: '#050708'}}
                  textSyle={{color: COLORS.background}}
                />
              )}
            </View>
          </View>
       
      </ScrollView>
    </>
  );
};
<<<<<<< HEAD
=======
=======
>>>>>>> 69415541 (Create module auth signIn)
>>>>>>> 54475f41 (Create module auth signIn)

import {styles} from './styles';


import {useForm} from 'react-hook-form';
import {Platform} from 'react-native';
import {Radio, RadioGroup} from '@ui-kitten/components';


import {useNavigation, useRoute} from '@react-navigation/native';
import { Button, ButtonSocialMedia, Link, ScrollView, SegmentComponent, Text, View } from '../../../components';
import { COLORS, ICONS, IMGS, TEXT } from '../../../constant';
import { i18next } from '../../../config';
import { CustomInputForm, DateForm } from '../../../components/form';
import {yupResolver} from '@hookform/resolvers/yup';
import useSignInModels from './viewModel';
import useSignInController from './viewController';
import { loginValidationSchema } from '../../../validation/formSignin';
type propsSignIn = {};
const SignIn = ({}: propsSignIn): ReactElement => {
  const route: any = useRoute();
  const {} = useSignInModels();
  const {
    handleSegment,
    checkedSegment,
    defaultValues,
    gender,
    pushMail, setPushMail, accessData, setAccessData,
    navigateToFPS,
  } = useSignInController();
  const {
    reset,
    control,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(
      loginValidationSchema,
    ),
    defaultValues: {
      // ...defaultValues,
      gender: 'Homme',
    },
  });

  return (
    <>
      {/* <View style={styles.titleContainer}>
        <GoBackButton
          style={{borderRadius: 50, width: 40, height: 40, padding: 10}}
        />
      </View> */}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
       
          <View style={styles.container}>
            <SegmentComponent
              CheckedSegment={route?.params?.checkedSegment}
              handleSegment={(item: any) => handleSegment(item)}
            />

            <View
              style={[
                styles.form,
                {display: checkedSegment == 0 ? 'none' : 'flex'},
              ]}>
              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="email"
                control={control}
                placeholder={i18next.t(TEXT.Login.palcholder.email)}
                keyboardType="email-address"
              />

              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="password"
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.password)}
                secureTextEntry={true}
              />
              <View style={styles.mdp}>
                <Link
                  onPress={() => navigateToFPS()}
                  text={i18next.t(TEXT.Login.MDPO)}
                  color={COLORS.primary}
                />
              </View>
            </View>

            <View
              style={[
                styles.form,
                {display: checkedSegment == 1 ? 'none' : 'flex'},
              ]}>
              {/* {gender && (
                <SelectForm
                  items={gender}
                  control={control}
                  name="gender"
                  styleComponent={styles.styleComponent}
                />
              )} */}

              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="last_name"
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.nom)}
              />
              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="first_name"
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.prenom)}
              />
              <DateForm
                control={control}
                name="birthday"
                styleComponent={styles.styleComponent}
              />
              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="phone"
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.tel)}
                keyboardType="number-pad"
                inputMode="numeric"
                maxLength={10}
              />
              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="email"
                control={control}
                placeholder={i18next.t(TEXT.Login.palcholder.email)}
                keyboardType="email-address"
              />

              <CustomInputForm
                styleComponent={styles.styleComponent}
                textStyle={styles.styleText}
                styleInput={styles.styleInput}
                name="password"
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.password)}
                secureTextEntry={true}
              />

              <View
                style={{
                  alignItems: 'flex-start',
                 
                  paddingLeft: 40,
                  paddingRight: 40,
                  marginTop: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}>
                  <Radio
                    checked={pushMail}
                    onChange={nextChecked => setPushMail(nextChecked)}
                    style={styles.radio}
                    status="primary"
                  />

                  <View>
                    <Text style={[styles.radioTitle, {color: '#011A33'}]}>
                      {i18next.t(TEXT.SignUp.radio.pushMail)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.radioSubTitle}>
                  {i18next.t(TEXT.SignUp.radio.pushMailDescription)}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Radio
                    checked={accessData}
                    onChange={nextChecked => setAccessData(nextChecked)}
                    style={[styles.radio]}
                    status="primary"
                  />
                  <View>
                    <Text style={[styles.radioTitle, {color: '#011A33'}]}>
                      {i18next.t(TEXT.SignUp.radio.accessData)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.radioSubTitle}>
                  {i18next.t(TEXT.SignUp.radio.accessDataDescription)}
                </Text>
              </View>
            </View>
            <View style={styles.btnSubmit}>
              {/* {isLoading && <Spinner />} */}

              <Button
                text={
                  checkedSegment == 1
                    ? i18next.t(TEXT.Login.SeConnecter)
                    : i18next.t(TEXT.Login.Sinscrire)
                }
                // fullWidth
                rounded
                disabled={
                  checkedSegment == 1
                    ? false
                    : !pushMail || !accessData
                    ? true
                    : false
                }
                style={{
                  minHeight: 50,
                  backgroundColor:
                    checkedSegment == 1
                      ? COLORS?.primary
                      : !pushMail || !accessData
                      ? COLORS?.darkGray
                      : COLORS?.primary,
                }}
                
              />
            </View>
            <View style={styles.separator}>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: COLORS.darkGray,
                
                }}
              />
            </View>
            <View style={styles.BTnSocial}>
              <ButtonSocialMedia
                text={i18next.t(TEXT.BUTTONS.Google)}
                img={ICONS.google_icon}
                textSyle={{color: COLORS.darkGray}}
              />
              <ButtonSocialMedia
                text={i18next.t(TEXT.BUTTONS.Facebook)}
                img={ICONS.facebook_icon}
                style={{backgroundColor: '#1877F2'}}
                textSyle={{color: COLORS.background}}
              />
              {Platform.OS === 'ios' && (
                <ButtonSocialMedia
                  text={i18next.t(TEXT.BUTTONS.Apple)}
                  img={ICONS.apple_icon}
                  style={{backgroundColor: '#050708'}}
                  textSyle={{color: COLORS.background}}
                />
              )}
            </View>
          </View>
       
      </ScrollView>
    </>
  );
};
<<<<<<< HEAD
>>>>>>> 4cdec91b (first unit project)
=======
<<<<<<< HEAD
>>>>>>> 54475f41 (Create module auth signIn)

const Login = ({}: LoginProps): ReactElement => {
  return (<View></View>);
};

export default Login;
<<<<<<< HEAD
>>>>>>> ab93aef2 (first unit project)
=======
export default SignIn;
>>>>>>> ef87bf9c (Create module auth signIn)
=======
>>>>>>> e6aa837d (first unit project)
<<<<<<< HEAD
>>>>>>> 4cdec91b (first unit project)
=======
=======
export default SignIn;
>>>>>>> 69415541 (Create module auth signIn)
>>>>>>> 54475f41 (Create module auth signIn)
