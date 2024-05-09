import { ROUTES, TEXT } from "../../constant";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ChatScreen, ForgetPasswordScreen, HomeScreen, Intro, LoginScreen, OnboardingScreen, ProgressionScreen, ScreenCourseDetails, UpdateProfileScreen } from "../../screens";
=======
=======
>>>>>>> af751c6f (- add new screen onbording)
=======
>>>>>>> 54475f41 (Create module auth signIn)
=======
>>>>>>> 9cfb1182 (add Desing Screen course details)
import { ForgetPasswordScreen, HomeScreen, Intro, LoginScreen, OnboardingScreen, ScreenCourseDetails } from "../../screens";
>>>>>>> 4cdec91b (first unit project)
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
=======
import { ForgetPasswordScreen, HomeScreen, Intro, LoginScreen, OnboardingScreen, ScreenCourseDetails } from "../../screens";
>>>>>>> 4005439c (add Desing Screen course details)
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
<<<<<<< HEAD
>>>>>>> ab93aef2 (first unit project)
=======
  {
    route: ROUTES.ForgetPasswordScreen,
    label: ROUTES.ForgetPasswordScreen,
    component: ForgetPasswordScreen,
    options:{ headerShown: false }
  },
<<<<<<< HEAD
>>>>>>> ef87bf9c (Create module auth signIn)
=======
  {
    route: ROUTES.HomeScreen,
    label: ROUTES.HomeScreen,
    component: HomeScreen,
    options:{ headerShown: false }
    
  },
  
  
<<<<<<< HEAD
>>>>>>> 4005439c (add Desing Screen course details)
=======
=======
import { Intro } from "../../screens";
=======
import { Intro, OnboardingScreen } from "../../screens";
>>>>>>> 9c8d4eae (- add new screen onbording)
=======
import { ForgetPasswordScreen, Intro, LoginScreen, OnboardingScreen } from "../../screens";
>>>>>>> 69415541 (Create module auth signIn)
=======
import { ForgetPasswordScreen, HomeScreen, Intro, LoginScreen, OnboardingScreen, ScreenCourseDetails } from "../../screens";
>>>>>>> feaa7651 (add Desing Screen course details)
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
<<<<<<< HEAD
>>>>>>> e6aa837d (first unit project)
<<<<<<< HEAD
>>>>>>> 4cdec91b (first unit project)
=======
=======
  {
    route: ROUTES.ForgetPasswordScreen,
    label: ROUTES.ForgetPasswordScreen,
    component: ForgetPasswordScreen,
    options:{ headerShown: false }
  },
<<<<<<< HEAD
>>>>>>> 69415541 (Create module auth signIn)
<<<<<<< HEAD
>>>>>>> 54475f41 (Create module auth signIn)
=======
=======
  {
    route: ROUTES.HomeScreen,
    label: ROUTES.HomeScreen,
    component: HomeScreen,
    options:{ headerShown: false }
    
  },
  
  
>>>>>>> feaa7651 (add Desing Screen course details)
>>>>>>> 9cfb1182 (add Desing Screen course details)
];
