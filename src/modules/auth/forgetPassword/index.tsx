import React, { ReactElement } from "react";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import useForgetPasswordController from "./viewController";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, GoBackButton, Text, View } from "../../../components";
import { i18next } from "../../../config";
import { CustomInputForm } from "../../../components/form";
import { COLORS, TEXT } from "../../../constant";
import { emailValidationSchema } from "../../../validation/formSignin";
import { useWindowDimensions } from "react-native";

type ForgetPasswordProps = {};

const ForgetPassword = ({}: ForgetPasswordProps): ReactElement => {
  const { handleGoBack, handleForgetPassword, emailSent, isLoading } =
    useForgetPasswordController();
  const {
    reset,
    control,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(emailValidationSchema),
  });
  const { height, width } = useWindowDimensions();
  return (
    <View style={{ height, width }}>
      <View style={styles.titleContainer}>
        <GoBackButton
          style={{
            marginTop: "10%",
            borderRadius: 50,
            width: 40,
            height: 40,
            padding: 10,
            backgroundColor: COLORS.primary,
          }}
          color={COLORS.background}
        />
      </View>
      <View
        style={[
          styles.contentContainer,
          { display: emailSent ? "none" : "flex" },
        ]}
      >
        <View style={styles.form}>
          <Text style={styles.titleText}>
            {i18next.t(TEXT.Login.ForgetPasswordTitle)}
          </Text>
          <Text style={styles.titleSubText}>
            {i18next.t(TEXT.Login.ForgetPasswordSubTitle)}
          </Text>
          <CustomInputForm
            styleComponent={{ width: "100%", minHeight: 54, borderRadius: 30 }}
            textStyle={{ width: 300, minHeight: 40 }}
            styleInput={{
              borderColor: "#e8e8e8",
              height: 54,
              backgroundColor: "#D3E0EA52",
              borderRadius: 30,
            }}
            name="email"
            control={control}
            placeholder={i18next.t(TEXT.Login.palcholder.emailForMPO)}
          />
          <View style={styles.bottomBtnContainer}>
            <Button
              text={i18next.t(TEXT.BUTTONS.btnConf)}
              fullWidth
              rounded
              isLoading={isLoading}
              disabled={!isValid}
              onPress={handleSubmit(handleForgetPassword)}
              style={{
                minHeight: 50,
                backgroundColor: isValid ? COLORS?.primary : COLORS?.darkGray,
              }}
            />
            <Button
              text={i18next.t(TEXT.Login.SeConnecter)}
              fullWidth
              rounded
              // isLoading={isLoading}
              // disabled={!isValid}
              fontStyle={{ color: COLORS?.primary }}
              onPress={handleGoBack}
              style={{
                minHeight: 50,
                marginTop: 10,
                backgroundColor: COLORS?.background,
                borderWidth: 1,
                borderColor: COLORS?.primary,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.contentContainer,
          { display: emailSent ? "flex" : "none" },
        ]}
      >
        <Text style={styles.titleText}>
          {i18next.t(TEXT.Login.ForgetPasswordTitleSent)}
        </Text>
        <Text style={styles.titleSubText}>
          {i18next.t(TEXT.Login.ForgetPasswordInstruction, {
            email: getValues("email"),
          })}
        </Text>
      </View>
    </View>
  );
};

export default ForgetPassword;
