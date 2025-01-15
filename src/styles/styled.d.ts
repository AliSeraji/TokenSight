export enum SupportedThemes {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export const Color: string;

export interface Colors {
  themeName: SupportedThemes;
  white: Color;
  black: Color;

  White: Color;
  White90: Color;
  White80: Color;
  White70: Color;
  White60: Color;
  White50: Color;
  White40: Color;
  White30: Color;
  White20: Color;
  White10: Color;
  White5: Color;

  Black: Color;
  Black90: Color;
  Black80: Color;
  Black70: Color;
  Black60: Color;
  Black50: Color;
  Black40: Color;
  Black30: Color;
  Black20: Color;
  Black10: Color;
  Black5: Color;

  Green: Color;
  Green90: Color;
  Green80: Color;
  Green70: Color;
  Green60: Color;
  Green50: Color;
  Green40: Color;
  Green30: Color;
  Green20: Color;
  Green10: Color;
  Green5: Color;

  BlackBoxBG: Color;
  BlackBoxBG90: Color;
  BlackBoxBG80: Color;
  BlackBoxBG70: Color;
  BlackBoxBG60: Color;
  BlackBoxBG50: Color;
  BlackBoxBG40: Color;
  BlackBoxBG30: Color;
  BlackBoxBG20: Color;
  BlackBoxBG10: Color;
  BlackBoxBG5: Color;

  GrayText: Color;
  GrayText90: Color;
  GrayText80: Color;
  GrayText70: Color;
  GrayText60: Color;
  GrayText50: Color;
  GrayText40: Color;
  GrayText30: Color;
  GrayText20: Color;
  GrayText10: Color;
  GrayText5: Color;

  GrayBlueDark: Color;
  GrayBlueDark90: Color;
  GrayBlueDark80: Color;
  GrayBlueDark70: Color;
  GrayBlueDark60: Color;
  GrayBlueDark50: Color;
  GrayBlueDark40: Color;
  GrayBlueDark30: Color;
  GrayBlueDark20: Color;
  GrayBlueDark10: Color;
  GrayBlueDark5: Color;

  BlueDark: Color;
  BlueDark90: Color;
  BlueDark80: Color;
  BlueDark70: Color;
  BlueDark60: Color;
  BlueDark50: Color;
  BlueDark40: Color;
  BlueDark30: Color;
  BlueDark20: Color;
  BlueDark10: Color;
  BlueDark5: Color;

  Yellow: Color;
  Yellow90: Color;
  Yellow80: Color;
  Yellow70: Color;
  Yellow60: Color;
  Yellow50: Color;
  Yellow40: Color;
  Yellow30: Color;
  Yellow20: Color;
  Yellow10: Color;
  Yellow5: Color;

  Orange: Color;
  Orange90: Color;
  Orange80: Color;
  Orange70: Color;
  Orange60: Color;
  Orange50: Color;
  Orange40: Color;
  Orange30: Color;
  Orange20: Color;
  Orange10: Color;
  Orange5: Color;

  // text
  ntext0: Color;
  text0: Color;
  text1: Color;
  text2: Color;
  text3: Color;
  text4: Color;
  text5: Color;

  primaryText1: Color;
  primaryText2: Color;

  //borders
  border1: Color;
  border2: Color;
  borderGrad: Color;

  // backgrounds
  bg00: Color;
  bg0: Color;
  bg1: Color;
  bg2: Color;
  bg3: Color;
  bg4: Color;
  bg5: Color;
  bg6: Color;
  bg7: Color;
  bg8: Color;
  bg9: Color;
  bgOverlay: Color;

  bgGrad1: Color;
  bgGrad2: Color;
  bgGrad3: Color;
  bgDisabled: Color;
  gradRightLight: Color;
  gradLightLeft: Color;
  gradPrimary: Color;
  glassNav: Color;

  //temp
  tempGrad1: Color;

  //short Colors
  shortTxt: Color;
  Orange: Color;
  short1: Color;
  short2: Color;
  short3: Color;

  //long Colors
  longTxt: Color;
  Green: Color;
  long1: Color;
  long2: Color;
  long3: Color;

  //blues
  primary0: Color;
  primary1: Color;
  primary2: Color;
  primary3: Color;
  primary4: Color;
  primary5: Color;
  primary6: Color;

  txtPrimaryBtn: Color;
  txtDisableBtn: Color;

  //warnings
  bgWarning1: Color;
  txtWarning2: Color;

  //glass
  glass0: Color;
  glass0n: Color;
  glass1: Color;

  error1: Color;
  error2: Color;
  success: Color;
  warning: Color;
}

export type Shadow = string;
export interface Shadows {
  shadow1: Shadow;
  boxShadow1: Shadow;
  boxShadow2: Shadow;
}

export interface BorderRadiuses {
  radius1: BorderRadius;
  radius2: BorderRadius;
  radius3: BorderRadius;
  radius4: BorderRadius;
  radius5: BorderRadius;
  radius6: BorderRadius;
  radius7: BorderRadius;
}

declare module "styled-components" {
  export interface DefaultTheme extends Colors, Shadows, BorderRadiuses {
    darkMode: boolean;
    mediaQueries: {
      xs: ThemedCssFunction<DefaultTheme>;
      sm: ThemedCssFunction<DefaultTheme>;
      md: ThemedCssFunction<DefaultTheme>;
      lg: ThemedCssFunction<DefaultTheme>;
      xl: ThemedCssFunction<DefaultTheme>;
      xxl: ThemedCssFunction<DefaultTheme>;
      xxxl: ThemedCssFunction<DefaultTheme>;
    };
  }
}
