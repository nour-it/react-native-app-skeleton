import { StyleSheet, StatusBar } from "react-native";

import Diemension from "./Dimension";
import Colors from "./Colors";


const color = Colors;
const dimension = Diemension;

function colorStyles() {
    let style: any = {};
    for (let c in color) {
        style[`t_${c}`] = {
            color: color[c]
        }
        style[`bg_${c}`] = {
            backgroundColor: color[c]
        }
        style[`img_${c}`] = {
            tintColor: color[c]
        }
    }
    return style;
}

function textStyles() {
    let style: any = {};
    let blackStyle: any = {}
    for (let t in dimension.text) {
        style[`t_${t}`] = {
            fontFamily: dimension.text[t].f,
            fontSize: dimension.text[t].s,
            color: color.black,
        }
        blackStyle[`t_${t}`] = {
            fontFamily: dimension.text[t].f,
            fontSize: dimension.text[t].s,
            color: color.white,
        }
    }
    return [style, blackStyle];
}

function imageStyles() {
    let style: any = {};
    let blackStyle = {}
    for (let i in dimension.icon) {
        style[`ic_${i}`] = {
            ...dimension.icon[i],
            tintColor: color.black,
        }
        blackStyle[`ic_${i}`] = {
            ...dimension.icon[i],
            tintColor: color.white,
        }
    }
    for (let i in dimension.image) {
        style[`img_${i}`] = {
            ...dimension.image[i],
        }
    }
    return [style, blackStyle];
}

function spaceStyle() {
    let style: any = {};
    for (let i in dimension.spaces) {
        style[`m_${i}`] = {margin: dimension.space(dimension.spaces[i])}
        style[`ml_${i}`] = {marginLeft: dimension.space(dimension.spaces[i])}
        style[`mr_${i}`] = {marginRight: dimension.space(dimension.spaces[i])}
        style[`mt_${i}`] = {marginTop: dimension.space(dimension.spaces[i])}
        style[`mb_${i}`] = {marginBottom: dimension.space(dimension.spaces[i])}

        style[`p_${i}`] = {padding: dimension.space(dimension.spaces[i])}
        style[`pl_${i}`] = {paddingLeft: dimension.space(dimension.spaces[i])}
        style[`pr_${i}`] = {paddingRight: dimension.space(dimension.spaces[i])}
        style[`pt_${i}`] = {paddingTop: dimension.space(dimension.spaces[i])}
        style[`pb_${i}`] = {paddingBottom: dimension.space(dimension.spaces[i])}

        style[`g_${i}`] = {gap: dimension.space(dimension.spaces[i])}
        style[`r_${i}`] = {borderRadius: dimension.space(dimension.spaces[i])}
    }
    return style;
}

const light = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        paddingTop: StatusBar.currentHeight || 0,
        
    },
    fill: {
        flex: 1,

    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    // text
    t_l: {
        textAlign: "left"
    },
    t_r: {
        textAlign: "right"
    },
    t_c: {
        textAlign: "center"
    },

    // layout
    row: {
        flexDirection: "row",
    },
    justify_between: {
        justifyContent: "space-between",
        alignItems: "center"
    },
    justify_center: {
        justifyContent: "center",
        alignItems: "center"
    },
    items_center: {
        alignItems: "center"
    },
    img: {
        // height: '100%',
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: "black",
        height: '100%',
        
    },
    ...colorStyles(),
    ...textStyles()[0],
    ...imageStyles()[0],
    ...spaceStyle(),
})

const dark = StyleSheet.create({
    ...light,
    ...textStyles()[1],
    ...imageStyles()[1],
})


const styles = { light, dark }

export default styles;