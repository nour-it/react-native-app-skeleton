import { StyleSheet, View, Switch } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import { ThemedText } from '@/components/ui/ThemedText';
import { useState } from 'react';

export default function Settings3DScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const rotateX = useSharedValue(0);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    rotateX.value = withSequence(
      withSpring(-30),
      withSpring(0)
    );
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateX: `${rotateX.value}deg` },
    ],
  }));

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Animated.View style={[styles.settingsCard, animatedStyle]}>
        <View style={styles.settingItem}>
          <ThemedText style={styles.settingText}>Mode sombre</ThemedText>
          <Switch
            value={isDarkMode}
            onValueChange={handleToggle}
          />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  settingsCard: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  settingText: {
    fontSize: 18,
  },
});
