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
import  StoreProvider  from '../store';
import { SideBar } from '@/components/nav/SideBar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const initialRouteName = '/home';

export default function RootLayout() {

  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    "s_m": require('../assets/fonts/SpaceMono-Regular.ttf'),
    "n_b": require("../assets/fonts/n_b.ttf"),
    "n_sb": require("../assets/fonts/n_sb.ttf"),
    "n_r": require("../assets/fonts/n_r.ttf"),
  });

  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      router.replace(initialRouteName);
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <StoreProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Drawer screenOptions={{ headerShown: false,  }} drawerContent={(props) => <SideBar {...props} />}>
            <Drawer.Screen name="home" />
            <Drawer.Screen name="products" />
            <Drawer.Screen name="profile" />
            <Drawer.Screen name="map" />
            <Drawer.Screen name="payment" />
            <Drawer.Screen name="settings" />
            <Drawer.Screen name="feedback" />
            <Drawer.Screen name="share" />
            <Drawer.Screen name="+not-found" />
          </Drawer>
          <StatusBar style="auto" />
        </ThemeProvider>
      </GestureHandlerRootView>
    </StoreProvider>
  );
}
