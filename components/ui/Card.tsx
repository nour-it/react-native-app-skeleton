import { Colors, Dimension, Styles } from '@/constants';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ReactNode } from 'react';
import { View, Text } from 'react-native'


const Card = ({ card, children }: {card?: string, children?: ReactNode}) => {
    const theme = useThemeColor();
    const s = Styles[theme];

    switch (card) {
        case "5":
            return (
                <View style={[{ height: Dimension.space(30), width: Dimension.window.width - Dimension.space(8), backgroundColor: Colors[theme].tint }]}>
                </View>
            )
            break;
        case "4":
            return (
                <View style={[{ height: Dimension.space(5), width: Dimension.space(5), backgroundColor: Colors[theme].tint }]}>
                </View>
            )
            break;
        case "3":
            return (
                <View style={[{ height: Dimension.space(10), width: Dimension.window.width - Dimension.space(2), backgroundColor: Colors[theme].tint }]}>
                </View>
            )
            break;
        case "2":
            return (
                <View style={[{ height: Dimension.space(22), width: Dimension.space(20), backgroundColor: Colors[theme].tint }]}>
                </View>
            )
            break;
        default:
            return (
                <View style={[{ height: Dimension.space(15), width: `100%`, backgroundColor: Colors[theme].tint }]}>
                </View>
            )
            break;
    }

}

export default Card