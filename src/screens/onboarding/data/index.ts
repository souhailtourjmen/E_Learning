import { i18next } from "../../../config";
import { COLORS, TEXT } from "../../../constant";


export interface OnboardingData {
  id: number;
  img: any;
  text: string;
  textColor: string;
  descColor: string;
  desc: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    img: require('../../../../assets/app_images/OnboardingImg1.jpeg'),
    text: i18next.t(TEXT.ONBOARDING.titleOne),
    desc: i18next.t(TEXT.ONBOARDING.descOne),
    textColor: COLORS.primary,
    descColor: COLORS.primary,
    backgroundColor: COLORS.background,
  },
  {
    id: 2,
    img: require('../../../../assets/app_images/OnboardingImg2.jpeg'),
    text: i18next.t(TEXT.ONBOARDING.titleTwo),
    desc: i18next.t(TEXT.ONBOARDING.descTwo),
    textColor: COLORS.primary,
    descColor: COLORS.primary,
    backgroundColor: COLORS.background,
  },
  {
    id: 3,
    img: require('../../../../assets/app_images/OnboardingImg3.jpeg'),
    text: i18next.t(TEXT.ONBOARDING.titleThree),
    desc: i18next.t(TEXT.ONBOARDING.descThree),
    textColor:COLORS.primary,
    descColor: COLORS.primary,
    backgroundColor: COLORS.background,
  },
];

export default data;
