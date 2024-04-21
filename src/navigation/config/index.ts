import { ROUTES, TEXT } from "../../constant";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ChatScreen, ForgetPasswordScreen, HomeScreen, Intro, LoginScreen, OnboardingScreen, ProgressionScreen, ScreenCourseDetails, UpdateProfileScreen } from "../../screens";
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
    component: ChatScreen,
    options:{ headerShown: false ,icon:'comments'}
    
  },
  {
    route: ROUTES.MYCOURSESCREENBOTTOM,
    label: i18n.t(TEXT.ROUTES.myCourse),
    component: ProgressionScreen,
    options:{ headerShown: false ,icon:'book'}
    
  },

  {
    route: ROUTES.UpdateProfile,
    label: i18n.t(TEXT.ROUTES.profile),
    component: UpdateProfileScreen,
    options:{ headerShown: true ,icon:'user'}    
  },
  

  
  
=======
import { Intro } from "../../screens";
=======
import { Intro, OnboardingScreen } from "../../screens";
>>>>>>> 5c6f7ff1 (- add new screen onbording)
=======
import { ForgetPasswordScreen, Intro, LoginScreen, OnboardingScreen } from "../../screens";
>>>>>>> ef87bf9c (Create module auth signIn)
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
<<<<<<< HEAD
>>>>>>> ab93aef2 (first unit project)
=======
  {
    route: ROUTES.ForgetPasswordScreen,
    label: ROUTES.ForgetPasswordScreen,
    component: ForgetPasswordScreen,
  },
>>>>>>> ef87bf9c (Create module auth signIn)
];
