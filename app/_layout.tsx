import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from '@/hooks/useColorScheme';
import StoreProvider from '../store';
import { SideBar } from '@/components/nav/SideBar';
import { Dimension } from '@/constants';

SplashScreen.preventAutoHideAsync();

const INITIAL_ROUTE = '/payment';

const FONTS = {
  s_m: require('../assets/fonts/SpaceMono-Regular.ttf'),
  n_b: require("../assets/fonts/n_b.ttf"),
  n_sb: require("../assets/fonts/n_sb.ttf"),
  n_r: require("../assets/fonts/n_r.ttf"),
};

const DRAWER_SCREENS = [
  'home', 'details', 'profile', 'map', 'payment', 
  'settings', 'feedback', 'share', '+not-found'
];

const DRAWER_OPTIONS = {
  headerShown: false,
  drawerStyle: { 
    width: Dimension.space(18)
  }
};

export default function RootLayout() {

  const colorScheme = useColorScheme();
  const [loaded] = useFonts(FONTS);
  const router = useRouter();

  const theme = useMemo(() => 
    colorScheme === 'dark' ? DarkTheme : DefaultTheme,
    [colorScheme]
  );

  useEffect(() => {
    if (loaded) {
      router.replace(INITIAL_ROUTE);
      SplashScreen.hideAsync();
    }
  }, [loaded, router]);

  if (!loaded) return null;

  return (
    <StoreProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider value={theme}>
          <Drawer 
            screenOptions={DRAWER_OPTIONS} 
            drawerContent={(props) => <SideBar {...props} />}
          >
            {DRAWER_SCREENS.map(screen => (
              <Drawer.Screen key={screen} name={screen} />
            ))}
          </Drawer>
          <StatusBar style="auto" />
        </ThemeProvider>
      </GestureHandlerRootView>
    </StoreProvider>
  );
}
