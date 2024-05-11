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
 
  
  
];
export const BottomRoutes = [
  {
    route: ROUTES.HomeScreen,
    label: i18n.t(TEXT.ROUTES.home),
    component: HomeScreen,
    options:{ headerShown: false ,icon:'home'}
    
  },
  {
    route: ROUTES.MESSAGESCREENBOTTOM,
    label: i18n.t(TEXT.ROUTES.message),
    component: HomeScreen,
    options:{ headerShown: false ,icon:'comments'}
    
  },
  {
    route: ROUTES.MYCOURSESCREENBOTTOM,
    label: i18n.t(TEXT.ROUTES.myCourse),
    component: HomeScreen,
    options:{ headerShown: false ,icon:'book'}
    
  },
  {
    route: ROUTES.PROFILESCREENBOTTOM,
    label: i18n.t(TEXT.ROUTES.profile),
    component: HomeScreen,
    options:{ headerShown: false ,icon:'user'}    
  },
  
  
];
