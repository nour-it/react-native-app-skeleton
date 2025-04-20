import { useRouter } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors, Dimension, Styles } from '@/constants';
import { Card, ThemedView } from '@/components/ui';
import { BottomBar, TopBar } from '@/components/nav';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import Filter from '@/components/ui/Filter';

export default function MapScreen() {
  const router = useRouter();
  const theme = useThemeColor();
  const s = Styles[theme];
  function SectionAvailale({ }) {
    return (
      <View style={[s.g_2, s.ml_2, s.mr_2]}>
        {[1, 2, 3,].map((item, index) => <Card card={"3"} key={index} />)}
      </View>
    )
  }
  return (
    <ThemedView style={s.container}>
      <TopBar style={[s.p_2]} />
      <View style={[{ height: Dimension.space(20), backgroundColor: Colors[theme].tint }]} />
      <ScrollView >
        <View style={[s.mt_4]} />
        <Filter filter="1" />
        <View style={[s.mt_4]} />
        <SectionAvailale />
      </ScrollView>
      <BottomBar />
    </ThemedView>
  );
}
