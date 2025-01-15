import {
  css,
  ThemeProvider as StyledComponentsThemeProvider,
} from "styled-components";
import { transparentize } from "polished";
import { SupportedThemes } from "./type";
import { useSearchParams } from "next/navigation";
import { useIsDarkMode } from "store/user/hooks";
import { useMemo } from "react";
import { BorderRadiuses, Colors, Shadows } from "./styled";

export enum Z_INDEX {
  content = 1,
  dropdown = 1000,
  fixed = 1030,
  modal = 1060,
  tooltip = 1080,
}

export const BREAKPOINTS = {
  xs: 396,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
  xxxl: 1920,
};

const mediaQueryTemplates = Object.keys(BREAKPOINTS).reduce(
  (accumulator, size) => {
    (accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(BREAKPOINTS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `;
    return accumulator;
  },
  {}
) as any;

enum TRANSITION_DURATIONS {
  slow = 500,
  medium = 250,
  fast = 125,
}

export const transition = {
  duration: {
    slow: `${TRANSITION_DURATIONS.slow}ms`,
    medium: `${TRANSITION_DURATIONS.medium}ms`,
    fast: `${TRANSITION_DURATIONS.fast}ms`,
    infinite: "infinite",
  },
  timing: {
    ease: "ease",
    in: "ease-in",
    out: "ease-out",
    inOut: "ease-in-out",
    linear: "linear",
  },
};

const MainColors = {
  White: "#FFFFFF",
  Black: "#13181B",
  SemiBlack: "#12181C",
  BlackBoxBG: "#171E22",
  GrayText: "#7B8D99",
  GrayBlueDark: "#2F4049",
  BlueDark: "#184D6B",
  Yellow: "#FDAE72",
  Orange: "#FD8972",
  Green: "#92E6A7",
  BlueLight: "#3DAFBF",
};

const white = "#FFFFFF";
const black = "#000000";

function colors(themeName: SupportedThemes): Colors {
  // define color scheme for each supported theme

  const themeColors = {
    [SupportedThemes.DARK]: {
      themeName: SupportedThemes.DARK,

      // base
      white,
      black,

      // base
      White: MainColors.White,
      White90: transparentize(0.1, MainColors.White),
      White80: transparentize(0.2, MainColors.White),
      White70: transparentize(0.3, MainColors.White),
      White60: transparentize(0.4, MainColors.White),
      White50: transparentize(0.5, MainColors.White),
      White40: transparentize(0.6, MainColors.White),
      White30: transparentize(0.7, MainColors.White),
      White20: transparentize(0.8, MainColors.White),
      White10: transparentize(0.9, MainColors.White),
      White5: transparentize(0.95, MainColors.White),

      Black: MainColors.Black,
      Black90: transparentize(0.1, MainColors.Black),
      Black80: transparentize(0.2, MainColors.Black),
      Black70: transparentize(0.3, MainColors.Black),
      Black60: transparentize(0.4, MainColors.Black),
      Black50: transparentize(0.5, MainColors.Black),
      Black40: transparentize(0.6, MainColors.Black),
      Black30: transparentize(0.7, MainColors.Black),
      Black20: transparentize(0.8, MainColors.Black),
      Black10: transparentize(0.9, MainColors.Black),
      Black5: transparentize(0.95, MainColors.Black),

      Green: MainColors.Green,
      Green90: transparentize(0.1, MainColors.Green),
      Green80: transparentize(0.2, MainColors.Green),
      Green70: transparentize(0.3, MainColors.Green),
      Green60: transparentize(0.4, MainColors.Green),
      Green50: transparentize(0.5, MainColors.Green),
      Green40: transparentize(0.6, MainColors.Green),
      Green30: transparentize(0.7, MainColors.Green),
      Green20: transparentize(0.8, MainColors.Green),
      Green10: transparentize(0.9, MainColors.Green),
      Green5: transparentize(0.95, MainColors.Green),

      BlackBoxBG: MainColors.BlackBoxBG,
      BlackBoxBG90: transparentize(0.1, MainColors.BlackBoxBG),
      BlackBoxBG80: transparentize(0.2, MainColors.BlackBoxBG),
      BlackBoxBG70: transparentize(0.3, MainColors.BlackBoxBG),
      BlackBoxBG60: transparentize(0.4, MainColors.BlackBoxBG),
      BlackBoxBG50: transparentize(0.5, MainColors.BlackBoxBG),
      BlackBoxBG40: transparentize(0.6, MainColors.BlackBoxBG),
      BlackBoxBG30: transparentize(0.7, MainColors.BlackBoxBG),
      BlackBoxBG20: transparentize(0.8, MainColors.BlackBoxBG),
      BlackBoxBG10: transparentize(0.9, MainColors.BlackBoxBG),
      BlackBoxBG5: transparentize(0.95, MainColors.BlackBoxBG),

      GrayText: MainColors.GrayText,
      GrayText90: transparentize(0.1, MainColors.GrayText),
      GrayText80: transparentize(0.2, MainColors.GrayText),
      GrayText70: transparentize(0.3, MainColors.GrayText),
      GrayText60: transparentize(0.4, MainColors.GrayText),
      GrayText50: transparentize(0.5, MainColors.GrayText),
      GrayText40: transparentize(0.6, MainColors.GrayText),
      GrayText30: transparentize(0.7, MainColors.GrayText),
      GrayText20: transparentize(0.8, MainColors.GrayText),
      GrayText10: transparentize(0.9, MainColors.GrayText),
      GrayText5: transparentize(0.95, MainColors.GrayText),

      GrayBlueDark: MainColors.GrayBlueDark,
      GrayBlueDark90: transparentize(0.1, MainColors.GrayBlueDark),
      GrayBlueDark80: transparentize(0.2, MainColors.GrayBlueDark),
      GrayBlueDark70: transparentize(0.3, MainColors.GrayBlueDark),
      GrayBlueDark60: transparentize(0.4, MainColors.GrayBlueDark),
      GrayBlueDark50: transparentize(0.5, MainColors.GrayBlueDark),
      GrayBlueDark40: transparentize(0.6, MainColors.GrayBlueDark),
      GrayBlueDark30: transparentize(0.7, MainColors.GrayBlueDark),
      GrayBlueDark20: transparentize(0.8, MainColors.GrayBlueDark),
      GrayBlueDark10: transparentize(0.9, MainColors.GrayBlueDark),
      GrayBlueDark5: transparentize(0.95, MainColors.GrayBlueDark),

      BlueDark: MainColors.BlueDark,
      BlueDark90: transparentize(0.1, MainColors.BlueDark),
      BlueDark80: transparentize(0.2, MainColors.BlueDark),
      BlueDark70: transparentize(0.3, MainColors.BlueDark),
      BlueDark60: transparentize(0.4, MainColors.BlueDark),
      BlueDark50: transparentize(0.5, MainColors.BlueDark),
      BlueDark40: transparentize(0.6, MainColors.BlueDark),
      BlueDark30: transparentize(0.7, MainColors.BlueDark),
      BlueDark20: transparentize(0.8, MainColors.BlueDark),
      BlueDark10: transparentize(0.9, MainColors.BlueDark),
      BlueDark5: transparentize(0.95, MainColors.BlueDark),
      BlueLight: MainColors.BlueLight,

      Yellow: MainColors.Yellow,
      Yellow90: transparentize(0.1, MainColors.Yellow),
      Yellow80: transparentize(0.2, MainColors.Yellow),
      Yellow70: transparentize(0.3, MainColors.Yellow),
      Yellow60: transparentize(0.4, MainColors.Yellow),
      Yellow50: transparentize(0.5, MainColors.Yellow),
      Yellow40: transparentize(0.6, MainColors.Yellow),
      Yellow30: transparentize(0.7, MainColors.Yellow),
      Yellow20: transparentize(0.8, MainColors.Yellow),
      Yellow10: transparentize(0.9, MainColors.Yellow),
      Yellow5: transparentize(0.95, MainColors.Yellow),

      Orange: MainColors.Orange,
      Orange90: transparentize(0.1, MainColors.Orange),
      Orange80: transparentize(0.2, MainColors.Orange),
      Orange70: transparentize(0.3, MainColors.Orange),
      Orange60: transparentize(0.4, MainColors.Orange),
      Orange50: transparentize(0.5, MainColors.Orange),
      Orange40: transparentize(0.6, MainColors.Orange),
      Orange30: transparentize(0.7, MainColors.Orange),
      Orange20: transparentize(0.8, MainColors.Orange),
      Orange10: transparentize(0.9, MainColors.Orange),
      Orange5: transparentize(0.95, MainColors.Orange),

      // text
      ntext0: "#0a0b0d",
      text0: "#F1F1F1",
      text1: "#DADFEA",
      text2: "#9EA8AB",
      text3: "#788186",
      text4: "#555A5D",
      text5: "#43454F",

      primaryText1: "#C4EDED",
      primaryText2: "#809C9F",

      // borders
      border1: "#1d1d37",
      border2: "#341559",
      borderGrad:
        "linear-gradient(90deg, rgb(114, 57, 196) 0%, rgb(204, 56, 255) 100%)",

      // backgrounds / greys
      bg00: "#0A0B0D",
      bg0: "#131519",
      bg1: "#1A1D23",
      bg2: "#22252E",
      bg3: "#292C33",
      bg4: "#30333C",
      bg5: "#33373F",
      bg6: "#3d404a",
      bg7: "#454952",
      bg8: "#4F545E",
      bg9: "#6B727F",
      bgOverlay: "#05070bbf",

      bgGrad1: "linear-gradient(rgb(204, 56, 255) 0%, rgb(122, 53, 203) 100%)",
      bgGrad2: "linear-gradient(90deg, #bcdbdb 0%, #92E6A7 50%, #bcdbdb 100%)",
      bgGrad3: "linear-gradient(90deg, #bcdbdb 0%, #FD8972 50%, #bcdbdb 100%)",
      bgDisabled:
        "linear-gradient(rgb(180, 150, 200) 0%, rgb(100, 90, 150) 100%)",
      gradRightLight: "",
      gradLightLeft:
        "linear-gradient(90deg, #3A3F4B 0%, #22252D 20.33%, #22252C 100%)",
      glassNav: "#0f0f1299",
      tempGrad1:
        "linear-gradient(180deg, #607A85 0%, rgba(45, 56, 61, 0%) 100%);",
      gradPrimary:
        "linear-gradient(90deg, #CBF8F8 0%, #CDF0F0 50%, #CBF8F8 100%)",

      //short Colors
      shortTxt: "#FFC4E4",
      short1: "#C48EAB",
      short2: "#614255",
      short3: "#614255",

      //long Colors
      longTxt: "#BCFFD7",
      long1: "#96BAA4",
      long2: "#475B56",
      long3: "#313A3C",

      // primary colors
      primary0: "#95d9ea",
      primary1: "#81abb6",
      primary2: "#526B7A",
      primary3: "#48606e",
      primary4: "#394B55",
      primary5: "#2A343B",
      primary6: "#141F26",

      txtPrimaryBtn: "#C6FAFD",
      txtDisableBtn: "#5C6068",

      //warnings
      bgWarning1: "#252121",
      txtWarning2: "#BC942D",

      //glass
      glass0: "#13151990",
      glass1: "#1a1d237f",
      glass0n: "#17181d",

      error1: "#c75052",
      error2: "#7a3637",
      success: "#27AE60",
      warning: "#DCAB2E",
    },
  };

  // default the theme to dark mode
  return themeName in SupportedThemes
    ? themeColors[SupportedThemes.DARK]
    : themeColors[SupportedThemes.DARK];
}

function shadows(themeName: SupportedThemes): Shadows {
  const themeShadows = {
    [SupportedThemes.LIGHT]: {
      shadow1: "#2F80ED",
      boxShadow1: "0px 0px 4px rgba(0, 0, 0, 0.125)",
      boxShadow2: "0px 5px 5px rgba(0, 0, 0, 0.15)",
    },
    [SupportedThemes.DARK]: {
      shadow1: "#000",
      boxShadow1: "0px 0px 4px rgba(0, 0, 0, 0.125)",
      boxShadow2: "0px 5px 5px rgba(0, 0, 0, 0.15)",
    },
  };
  // default the theme to light mode
  return themeName in SupportedThemes
    ? themeShadows[themeName]
    : themeShadows[SupportedThemes.DARK];
}

const opacities = {
  hover: 0.6,
  click: 0.4,
  disabled: 0.5,
  enabled: 1,
};

function borderRadius(): BorderRadiuses {
  const themeRadiuses = {
    [SupportedThemes.DARK]: {
      themeName: SupportedThemes.DARK,

      //border radius
      radius1: "4px",
      radius2: "4px",
      radius3: "2px",
      radius4: "2px",
      radius5: "2px",
      radius6: "2px",
      radius7: "0px",
    },
    [SupportedThemes.LIGHT]: {
      themeName: SupportedThemes.LIGHT,

      //border radius
      radius1: "4px",
      radius2: "4px",
      radius3: "2px",
      radius4: "2px",
      radius5: "2px",
      radius6: "2px",
      radius7: "0px",
    },
  };
  return themeRadiuses[SupportedThemes.DARK];
}

export function theme(themeName: SupportedThemes) {
  return {
    ...colors(themeName),
    ...borderRadius(),
    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    //shadows
    ...shadows(themeName),

    transition,
    opacity: opacities,
    darkMode: themeName === SupportedThemes.DARK,
    // media queries
    mediaQueries: mediaQueryTemplates,
  };
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // get theme name from url if any
  const parsed = useSearchParams();
  const parsedTheme = parsed && typeof parsed === "string" ? parsed : undefined;

  const darkMode = useIsDarkMode();

  let themeName: SupportedThemes;
  if (
    parsedTheme &&
    Object.values(SupportedThemes).some(
      (theme: string) => theme === parsedTheme
    )
  ) {
    themeName = parsedTheme as SupportedThemes;
  } else {
    themeName = darkMode ? SupportedThemes.DARK : SupportedThemes.LIGHT;
  }

  const themeObject = useMemo(() => theme(themeName), [themeName]);

  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
