import {Dimensions, PixelRatio, Platform} from "react-native";

export const BASE_URL =
    "https://kz9hu6e5pl.execute-api.us-east-2.amazonaws.com";
export const API_CHECKCAREGIVER = "user/check-caregiver";
export const API_DASHBOARDVIEW = "mobile/caregiver/dashboard";

export let SCREEN_HEIGHT = Dimensions.get("window").height;
export let SCREEN_WIDTH = Dimensions.get("window").width;

export const IsIOS = Platform.OS == "ios";
export const IsAndroid = Platform.OS == "android";

export const windowHeight = (height) => {
    const tempHeight = typeof height === "number" ? height : parseFloat(height);
    return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * tempHeight) / 100);
};

export const windowWidth = (width) => {
    const tempWidth = typeof width === "number" ? width : parseFloat(width);
    return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * tempWidth) / 100);
};

export const fontSizes = {
    FONT1: windowWidth(1),
    FONT2: windowWidth(2),
    FONT2HALF: windowWidth(2.5),
    FONT3: windowWidth(3),
    FONT3HALF: windowWidth(3.5),
    FONT4: windowWidth(4),
    FONT4HALF: windowWidth(4.5),
    FONT5: windowWidth(5),
    FONT6: windowWidth(6),
    FONT6HALF: windowWidth(6.5),
    FONT7: windowWidth(7),
    FONT8: windowWidth(8),
    FONT9: windowWidth(9),
    FONT10: windowWidth(10),
    FONT11: windowWidth(11),
    FONT12: windowWidth(12),
    FONT13: windowWidth(13),
    FONT14: windowWidth(14),
    FONT15: windowWidth(15),
    FONT16: windowWidth(16),
    FONT17: windowWidth(17),
    FONT18: windowWidth(18),
    FONT19: windowWidth(19),
    FONT20: windowWidth(20),
    FONT21: windowWidth(21),
    FONT22: windowWidth(22),
    FONT23: windowWidth(23),
    FONT24: windowWidth(24),
    FONT25: windowWidth(25),
    FONT26: windowWidth(26),
    FONT28: windowWidth(28),
    FONT30: windowWidth(30),
    FONT32: windowWidth(32),
    FONT34: windowWidth(34),
    FONT36: windowWidth(36),
    FONT38: windowWidth(38),
    FONT40: windowWidth(40),
    FONT42: windowWidth(42),
    FONT46: windowWidth(46),
    FONT48: windowWidth(48),
    FONT50: windowWidth(50),
};
