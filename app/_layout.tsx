import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const initialRouteName = 'home';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      router.replace(initialRouteName);
      SplashScreen.hideAsync();
      // Set products as initial route in the router
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Drawer>

          <Drawer.Screen name="3D/home3D" />
          <Drawer.Screen name="3D/products3D" />
          <Drawer.Screen name="3D/profile3D" />
          <Drawer.Screen name="3D/payment3D" options={{ title: 'Paiement' }} />
          <Drawer.Screen name="3D/settings3D" options={{ title: 'Paramètres' }} />
          <Drawer.Screen name="3D/feedback3D" options={{ title: 'Votre avis' }} />
          <Drawer.Screen name="3D/share3D" options={{ title: 'Partager' }} />

          <Drawer.Screen name="products" />
          <Drawer.Screen name="profile" />
          <Drawer.Screen name="map" />
          <Drawer.Screen name="home" />
          <Drawer.Screen name="payment" options={{ title: 'Paiement' }} />
          <Drawer.Screen name="settings" options={{ title: 'Paramètres' }} />
          <Drawer.Screen name="feedback" options={{ title: 'Votre avis' }} />
          <Drawer.Screen name="share" options={{ title: 'Partager' }} />
          <Drawer.Screen name="+not-found" />
        </Drawer>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
