import { View, Text } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors, Dimension, Styles } from '@/constants';

const Search = () => {
    const theme = useThemeColor();
	const s = Styles[theme];
  return (
    <View style={[{height: Dimension.space(4), backgroundColor: Colors[theme].tint}, s.ml_2, s.mr_2]}>
    </View>
  )
}

export default Search