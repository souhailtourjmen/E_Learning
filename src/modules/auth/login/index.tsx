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
  const { handleSegment, checkedSegment, navigateToFPS,onSubmit } =
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
      email:"tourjmenEleve@gmail.com",
      password:'Azerty1234',
      path: "eleve",
      classe:'7ème',
      gouvernorat:`Gouvernorat de l'Ariana`
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
