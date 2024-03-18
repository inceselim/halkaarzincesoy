import { Dimensions, PixelRatio } from "react-native";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

const fontScale = PixelRatio.getFontScale();

function normalize(size: number, based = 'width') {
    const newSize = (based === 'height') ?
        size * heightBaseScale : size * widthBaseScale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const fontSize = {
    s: normalize(13),
    m: normalize(14),
    l: normalize(16),
    xl: normalize(20)
}