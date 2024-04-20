import { ROUTES, TEXT } from "../../constant";
import { Intro, OnboardingScreen } from "../../screens";
import i18n from "../../config/mulitLang";
export const ARRAYROUTES = [
  {
    route: ROUTES.ONBOARDING,
    label: i18n.t(TEXT.ROUTES.ONBOARDING),
    component: OnboardingScreen,
  },
  {
    route: ROUTES.INTRO,
    label: i18n.t(TEXT.ROUTES.Intro),
    component: Intro,
  },
];
