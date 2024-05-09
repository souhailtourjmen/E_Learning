import { ROUTES, TEXT } from "../../constant";
import { ForgetPasswordScreen, HomeScreen, Intro, LoginScreen, OnboardingScreen, ScreenCourseDetails } from "../../screens";
import i18n from "../../config/mulitLang";
import { CustomHeader } from "../../components";
export const ARRAYROUTES = [
  {
    route: ROUTES.ONBOARDING,
    label: i18n.t(TEXT.ROUTES.ONBOARDING),
    component: OnboardingScreen,
    options:{ headerShown: false }
  },
  {
    route: ROUTES.LOGIN,
    label: ROUTES.LOGIN,
    component: LoginScreen,
    options:{ headerShown: false }
  },
  {
    route: ROUTES.INTRO,
    label: i18n.t(TEXT.ROUTES.Intro),
    component: Intro,
    options:{ headerShown: false }
  },
  {
    route: ROUTES.ForgetPasswordScreen,
    label: ROUTES.ForgetPasswordScreen,
    component: ForgetPasswordScreen,
    options:{ headerShown: false }
  },
  {
    route: ROUTES.HomeScreen,
    label: ROUTES.HomeScreen,
    component: HomeScreen,
    options:{ headerShown: false }
    
  },
  
  
];
