import { Platform, SafeAreaView, ScrollView, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const theme = useThemeColor();

  if (Platform.OS === 'android') {
    return <View style={[{ backgroundColor: Colors[theme].background }, style]} {...otherProps} >
        {otherProps.children}
    </View>;
  }

  return <SafeAreaView style={[{ backgroundColor: Colors[theme].background }, style]} {...otherProps} >
      {otherProps.children}
  </SafeAreaView>;
}
