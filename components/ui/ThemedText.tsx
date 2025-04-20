import { Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors, Styles } from '@/constants';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const theme = useThemeColor();
  const s = Styles[theme];

  return (
    <Text
      style={[
        s.t_1,
        { color: Colors[theme].text },
        (style instanceof Array) ? [...style] : style,
      ]}
      {...rest}
    />
  );
}
