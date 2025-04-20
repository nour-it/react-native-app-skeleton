/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSelector } from 'react-redux';

export function useThemeColor(
  props?: { light?: string; dark?: string },
  colorName?: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useSelector((state: {theme: "light" | "dark"}) => state?.theme) ?? useColorScheme() ?? 'light';
  return theme
}
