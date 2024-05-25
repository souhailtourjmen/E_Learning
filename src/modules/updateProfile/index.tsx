import React, { ReactElement, memo } from "react";
import { KeyboardAvoidingView, useWindowDimensions } from "react-native";

import { styles } from "./styles";
import { useForm } from "react-hook-form";
import useUpdateProfileController from "./viewController";
import { COLORS, FONTFAMILY, TEXT } from "../../constant";
import { Button, GoBackButton, ScrollView, Text, View } from "../../components";
import i18next from "i18next";
import { CustomInputForm, DateForm } from "../../components/form";
import SelectForm from "../../components/form/SelectForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { eleveSchema } from "../../validation/updateProfile";
import moment from "moment";
import { DefaultValues } from "../../types";

const UpdateProfile = ({defaultValues}:{defaultValues: DefaultValues}): ReactElement => {
  const {
    handleUpdateProfile,
    HandleBack
  } = useUpdateProfileController();
  const {
    reset,
    control,

    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(eleveSchema),
    defaultValues: {
     ...defaultValues,
      datenai: moment(defaultValues?.datenai).format('YYYY-MM-DD'),
      matricule:defaultValues?.matricule||""
     
    },
  });

  const { height } = useWindowDimensions();
  return (
    <View style={[styles.container, { flex: 1 }]}>
      <View style={styles.titleContainer}>
        <GoBackButton
          style={{ borderRadius: 50, width: 40, height: 40, padding: 10 }}
        />
        <View style={styles.titleTextContainer}>
          <Text category="h5" style={{ fontFamily: FONTFAMILY?.poppins_bold }}>
            {i18next.t(TEXT.Profile.textBtnUpdateProfile)}
          </Text>
        </View>
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={50}
      >
        <View style={styles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.form]}>
              <Text  category="h5" style={{textAlign:'center', fontFamily: FONTFAMILY?.poppins_regular }}>
                {i18next.t(TEXT.Profile.personalInformation)}
              </Text>
              <CustomInputForm
                styleComponent={{
                  width: "100%",
                  height: 55,
                  marginBottom: "2%",
                  borderRadius: 30,
                }}
                textStyle={{ width: 300, minHeight: 40 }}
                styleInput={{
                  borderColor: "#e8e8e8",
                  height: 40,
                  backgroundColor: "#D3E0EA32",
                  borderRadius: 30,
                }}
                name="email"
                keyboardType="email-address"
                control={control}
                placeholder={i18next.t(TEXT.Login.palcholder.email)}
                disabled
                label={<Text category="h6">Email</Text>}
              />
              <CustomInputForm
                styleComponent={{
                  width: "100%",
                  height: 55,
                  marginBottom: "2%",
                  borderRadius: 30,
                }}
                textStyle={{ width: 300, minHeight: 40 }}
                styleInput={{
                  borderColor: "#e8e8e8",
                  height: 40,
                  backgroundColor: "#D3E0EA32",
                  borderRadius: 30,
                }}
                name="nom"
                label={<Text category="h6">nom</Text>}
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.prenom)}
              />
              <CustomInputForm
                styleComponent={{
                  width: "100%",
                  height: 55,
                  marginBottom: "2%",
                  borderRadius: 30,
                }}
                textStyle={{ width: 300, minHeight: 40 }}
                styleInput={{
                  borderColor: "#e8e8e8",
                  height: 40,
                  backgroundColor: "#D3E0EA32",
                  borderRadius: 30,
                }}
                label={<Text category="h6">prenom</Text>}
                name="prenom"
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.nom)}
              />
              <CustomInputForm
                styleComponent={{
                  width: "100%",
                  height: 55,
                  marginBottom: "2%",
                  borderRadius: 30,
                }}
                textStyle={{ width: 300, minHeight: 40 }}
                styleInput={{
                  borderColor: "#e8e8e8",
                  height: 40,
                  backgroundColor: "#D3E0EA32",
                  borderRadius: 30,
                }}
                label={<Text category="h6">Numero</Text>}
                name="numero"
                keyboardType="number-pad"
                control={control}
                placeholder={i18next.t(TEXT.SignUp.placeholder.tel)}
              />
              <CustomInputForm
                styleComponent={{
                  width: "100%",
                  height: 55,
                  marginBottom: "2%",
                  borderRadius: 30,
                }}
                textStyle={{ width: 300, minHeight: 40 }}
                styleInput={{
                  borderColor: "#e8e8e8",
                  height: 40,
                  backgroundColor: "#D3E0EA32",
                  borderRadius: 30,
                }}
                label={<Text category="h6">Matricule</Text>}
                name="matricule"
                keyboardType="number-pad"
                control={control}
                placeholder={"Le matricule est requis"}
              />
              <CustomInputForm
                styleComponent={{
                  width: "100%",
                  height: 55,
                  marginBottom: "2%",
                  borderRadius: 30,
                }}
                textStyle={{ width: 300, minHeight: 40 }}
                styleInput={{
                  borderColor: "#e8e8e8",
                  height: 40,
                  backgroundColor: "#D3E0EA32",
                  borderRadius: 30,
                }}
                label={<Text category="h6">Classe</Text>}
                name="classe"
                control={control}
                placeholder={"La classe est requise"}
              />
              <CustomInputForm
                styleComponent={{
                  width: "100%",
                  height: 55,
                  marginBottom: "2%",
                  borderRadius: 30,
                }}
                textStyle={{ width: 300, minHeight: 40 }}
                styleInput={{
                  borderColor: "#e8e8e8",
                  height: 40,
                  backgroundColor: "#D3E0EA32",
                  borderRadius: 30,
                }}
                label={<Text category="h6">Gouvernorat</Text>}
                name="gouvernorat"
                control={control}
                placeholder={"Le gouvernorat est requis"}
              />
              <CustomInputForm
                styleComponent={{
                  width: "100%",
                  height: 55,
                  marginBottom: "2%",
                  borderRadius: 30,
                }}
                textStyle={{ width: 300, minHeight: 40 }}
                styleInput={{
                  borderColor: "#e8e8e8",
                  height: 40,
                  backgroundColor: "#D3E0EA32",
                  borderRadius: 30,
                }}
                label={<Text category="h6">date de naissance</Text>}
                name="datenai"
                control={control}
                placeholder={"La date de naissance est requise"}
              />

              {/* <SelectForm items={gender} control={control} name="gender" />

              <DateForm
                control={control}
                name="birthday"
                styleComponent={styles.styleComponent}
                initialDate={defaultValues.birthday}
              /> */}
            </View>
            <View style={styles.bottomBtnContainer}>
              <Button
                text={"valider"}
                fullWidth
                rounded
                onPress={handleSubmit(handleUpdateProfile)}
                style={{
                  minHeight: 50,
                }}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default memo(UpdateProfile);
