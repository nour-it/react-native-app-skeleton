import React from 'react';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors, Dimension, Styles } from '@/constants';
import { ThemedView } from '@/components/ui';
import { TopBar } from '@/components/nav';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';

const Settings = () => {
  const router = useRouter();
  const theme = useThemeColor();
  const s = Styles[theme];
  return (
    <ThemedView style={s.container}>
      <TopBar style={[s.p_2]} />
      <ScrollView >
        <View style={[{ height: Dimension.space(2.5), width: Dimension.space(16), backgroundColor: Colors[theme].tint }, s.ml_2]} />
        <View style={[{ height: Dimension.space(30), }, s.p_2]} >
          <ScrollView style={[{ backgroundColor: Colors[theme].tint }]}>
          </ScrollView>
        </View>
        <View style={[{ height: Dimension.space(2.5), width: Dimension.space(16), backgroundColor: Colors[theme].tint }, s.ml_2]} />
        <View style={[{ height: Dimension.space(30), }, s.p_2]} >
          <ScrollView style={[{ backgroundColor: Colors[theme].tint }]}>
          </ScrollView>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

export default Settings
