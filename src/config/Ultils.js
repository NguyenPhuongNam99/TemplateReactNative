import { Dimensions, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Media from "../Media";
import language from "./../locales/index";
import themeapp from "./../Theme/index";
const { width, height } = Dimensions.get('screen');
export const Ultils = {
    dimensions: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    translate(locale, screen, key) {
        const cache = language.cache
        if (cache && cache[locale] && cache[locale][screen] && cache[locale][screen][key] && cache[locale][screen][key] !== "") {
            return cache[locale][screen][key];
        }
        return cache['vi'][screen][key];
    },
    Theme(theme, key) {
        const cache = themeapp.cache
        if (cache && cache[theme] && cache[theme][key] && cache[theme][key] !== "") {
            return cache[theme][key];
        }
        return cache['Light'][key];
    },
    Dark0: "#0E101B",
    FontName: fontName,
    White: "#FFFFFF",
    Dark3: "#47506F",
    Light1: "#E1E4F2",
    Light2: "#F5F6FC",
    Light0: "#989EBE",
    Highlight1: "#4C67ED",
    Dark1: "#1C2037",
    FontInter: fontInter
}
const fontName = "Inter-Thin";
const fontInter = "Inter";

const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const fontText11 = {
    fontWeight: '600',
    fontFamily: Ultils.FontName,
    fontSize: RFValue(11),
    color: Ultils.Dark3,
}
export const fontText17 = {
    fontWeight: '700',
    fontFamily: Ultils.FontName,
    fontSize: RFValue(17),
    lineHeight: 20.57
}
export const fontText17_400 = {
    fontWeight: '400',
    fontFamily: Ultils.FontName,
    fontSize: RFValue(17),
    lineHeight: 20.57
}
export const fontText14 = {
    fontWeight: '400',
    fontFamily: Ultils.FontName,
    fontSize: RFValue(14),
    lineHeight: 19.6
}
export const fontText14_700 = {
    fontWeight: '700',
    fontFamily: Ultils.FontName,
    fontSize: RFValue(14),
    lineHeight: 19.6
}
export const fontText32 = {
    fontWeight: '700',
    fontFamily: Ultils.FontName,
    fontSize: RFValue(32),
}
export const scale = size => shortDimension / guidelineBaseWidth * size;
export const verticalScale = size => longDimension / guidelineBaseHeight * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size, factor = 0.5) => size + (verticalScale(size) - size) * factor;
export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
export const formatTime = secs => {
    let minutes = Math.floor(secs / 59);
    let seconds = Math.ceil(secs - minutes * 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
};
export const CVMedia = (theme, imgDark, imgLight) => theme == 'Dark' ? imgDark : imgLight;
