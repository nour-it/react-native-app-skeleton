import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Colors, Dimension, Styles } from '@/constants'
import { useThemeColor } from '@/hooks/useThemeColor';

const Filter = ({ filter }: { filter?: string }) => {
  const theme = useThemeColor();
  const s = Styles[theme];

  switch (filter) {
    case '2':
      return (
        <ScrollView style={[s.row]} horizontal={true} showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5, 6].map((item, index) => <View key={index} style={[{ height: Dimension.space(8), backgroundColor: Colors[theme].tint, width: Dimension.space(7) }, s.ml_2, s.mr_2]} />)}
        </ScrollView>
      )
      break;
    default:
      return (
        <ScrollView style={[s.row]} horizontal={true} showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5, 6].map((item, index) => <View key={index} style={[{ height: Dimension.space(3), backgroundColor: Colors[theme].tint, width: Dimension.space(7) }, s.ml_2, s.mr_2]} />)}
        </ScrollView>
      )
      break;
  }
}

export default Filter