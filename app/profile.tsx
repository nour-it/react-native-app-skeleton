import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors, Dimension, Styles } from '@/constants';
import { ThemedView } from '@/components/ui';
import { BottomBar, TopBar } from '@/components/nav';
import { ScrollView } from 'react-native-gesture-handler';

export default function ProfileScreen() {
  const router = useRouter();
  const theme = useThemeColor();
  const s = Styles[theme];
  return (
    <ThemedView style={s.container}>
      <TopBar style={[s.p_2]} />
      <ScrollView >
        <View style={[s.row, s.g_4, s.p_2, s.items_center]}>
          <View style={[s.r_6, { height: Dimension.space(8), width: Dimension.space(8), backgroundColor: Colors[theme].tint }]}></View>
          <View style={[s.g_2]}>
            <View style={[{ height: Dimension.space(2.5), width: Dimension.space(8), backgroundColor: Colors[theme].tint }]} />
            <View style={[{ height: Dimension.space(1.5), width: Dimension.space(16), backgroundColor: Colors[theme].tint }]} />
          </View>
        </View>
        <View style={[s.p_2, s.g_4]}>
          <View style={[{ height: Dimension.space(30), backgroundColor: Colors[theme].tint }]} />
          <View style={[{ height: Dimension.space(30), backgroundColor: Colors[theme].tint }]} />
        </View>
      </ScrollView>
    </ThemedView>
  );
}
