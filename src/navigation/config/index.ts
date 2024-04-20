import { ROUTES, TEXT } from "../../constant";
import { Intro } from "../../screens";
import i18n from "../../config/mulitLang";
export const ARRAYROUTES = [
  {
    route: ROUTES.INTRO,
    label: i18n.t(TEXT.ROUTES.Intro),
    component: Intro,
  },
];
