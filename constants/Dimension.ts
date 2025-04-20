import { Dimensions } from "react-native"
import font from "./Font";

const window = Dimensions.get("window")
const screen = Dimensions.get("screen")

const fontSizeFromScale = (size = 5) => size / window.fontScale * window.scale
const space = (i: number) => i * 10 / window.fontScale;
const text = {
    "0": {f: font.n_r, s: fontSizeFromScale(4)},
    "1": {f: font.n_r, s: fontSizeFromScale(6)},
    "2": {f: font.n_r, s: fontSizeFromScale(8)},
    "3": {f: font.n_r, s: fontSizeFromScale(10)},
    "4": {f: font.n_r, s: fontSizeFromScale(12)},
};
const icon = {
    "1": {width: 12, height: 12},
    "2": {width: 20, height: 20},
    "3": {width: 24, height: 24},
    "4": {width: 32, height: 32},
};
const image = {
    "1": {width: 48, height: 48},
    "2": {width: 96, height: 96},
    "3": {width: 144, height: 144},
    "4": {width: 192, height: 192},
};
const spaces = {
    "1": .5,
    "2": 1,
    "3": 1.5,
    "4": 2,
    "5": 4,
    "6": 10,
};

export default {
    window,
    screen,
    fontSizeFromScale,
    space,
    text, icon, image, spaces
}