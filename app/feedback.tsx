import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, Button } from 'react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { ThemedView } from '@/components/ui/ThemedView';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Styles } from '@/constants';
import { BottomBar, TopBar } from '@/components/nav';
import { ScrollView } from 'react-native-gesture-handler';

export default function FeedbackScreen() {
  const router = useRouter();
  const theme = useThemeColor();
  const s = Styles[theme];
  return (
    <ThemedView style={s.container}>
      <TopBar style={[s.p_2]} />
      <ScrollView >

      </ScrollView>
      <BottomBar />
    </ThemedView>
  );
}

