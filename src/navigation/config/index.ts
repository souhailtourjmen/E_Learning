import { ROUTES, TEXT } from "../../constant";
import { ForgetPasswordScreen, HomeScreen, Intro, LoginScreen, OnboardingScreen } from "../../screens";
import i18n from "../../config/mulitLang";
export const ARRAYROUTES = [
  {
    route: ROUTES.ONBOARDING,
    label: i18n.t(TEXT.ROUTES.ONBOARDING),
    component: OnboardingScreen,
  },
  {
    route: ROUTES.LOGIN,
    label: ROUTES.LOGIN,
    component: LoginScreen,
  },
  {
    route: ROUTES.INTRO,
    label: i18n.t(TEXT.ROUTES.Intro),
    component: Intro,
  },
  {
    route: ROUTES.ForgetPasswordScreen,
    label: ROUTES.ForgetPasswordScreen,
    component: ForgetPasswordScreen,
  },
  {
    route: ROUTES.HomeScreen,
    label: ROUTES.HomeScreen,
    component: HomeScreen,
  },
];
