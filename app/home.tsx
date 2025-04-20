
import { useRouter } from 'expo-router';
import { Styles } from "@/constants";
import { useColorScheme } from '../hooks/useColorScheme';
import { ThemedView } from '@/components/ui/ThemedView';
import { ThemedText } from '@/components/ui/ThemedText';
import { TopBar } from '@/components/nav/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function Page({}) {
  const router = useRouter();
  const theme = useThemeColor();
  const s = Styles[theme];

  return (
    <ThemedView style={[s.container]}>
      <TopBar style={[s.p_2]} />
      <ScrollView>
        <ThemedText style={[]}>Navigation</ThemedText>
        <ThemedText style={[]}>Choisissez votre destination</ThemedText>
        
      </ScrollView>
    </ThemedView>
  );
}
