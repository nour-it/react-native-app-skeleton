import {
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  
} from "react-native";

import React from "react";
import { TouchableRipple } from "react-native-paper";
import Colors from "@/constants/Colors";
import styles from "@/constants/Styles";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Styles } from "@/constants";

const Pressable = ({ children, onPress, outerStyle, innerStyle, longPress }) => {
  if (Platform.OS == "ios") {
    return <View style={outerStyle}>
      <TouchableOpacity onPress={onPress} onLongPress={longPress}>
        <View style={innerStyle}>
          {children}
        </View>
      </TouchableOpacity>
    </View>;
  }
  if (Platform.OS == "android") {
    let theme = useThemeColor();
   
    const style = Colors[theme].ripple;
 
    return <View style={outerStyle}>
      <TouchableRipple onPress={onPress} rippleColor={style} onLongPress={longPress}>
        <View style={innerStyle}>
          {children}
        </View>
      </TouchableRipple>
    </View>;
  }
};


export default Pressable;
