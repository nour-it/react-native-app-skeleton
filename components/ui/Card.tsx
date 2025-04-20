import { Colors, Dimension, Styles } from '@/constants';
import { useThemeColor } from '@/hooks/useThemeColor';
import { View, Text } from 'react-native'


const Card = ({ card, children }) => {
    const theme = useThemeColor();
    const s = Styles[theme];
  
    switch (card) {
        case "2":

            break;
        default:
            return (
                <View style={[{height: Dimension.space(15), width:`100%`, backgroundColor: Colors[theme].tint}, s.card]}>
                </View>
            )
            break;
    }

}

export default Card