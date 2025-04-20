import React from 'react';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Styles } from '@/constants';
import { Card, ThemedView } from '@/components/ui';
import { BottomBar, TopBar } from '@/components/nav';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import Filter from '@/components/ui/Filter';

const DetailsScreen = () => {
  const router = useRouter();
  const theme = useThemeColor();
  const s = Styles[theme];
  return (
    <ThemedView style={s.container}>
      <TopBar style={[s.p_2]} />
      <ScrollView >
        <View style={[s.row, s.g_2, s.p_2]}>
          <View style={[s.g_2]}>
            {[1, 2, 3, 4].map((_, index) => <Card key={index} card='4' />)}
          </View>
          <Card card='5' />
        </View>
        <View style={[s.mt_4]} />
        <Filter filter="2"/>
      </ScrollView>
      <BottomBar />
    </ThemedView>
  );
};

export default DetailsScreen;
