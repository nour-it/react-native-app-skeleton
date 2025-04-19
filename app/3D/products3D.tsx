import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
import { ThemedText } from '@/components/ui/ThemedText';
import { useEffect } from 'react';

export default function Products3DScreen() {
  const rotate = useSharedValue(0);
  const scale = useSharedValue(1);

  useEffect(() => {
    rotate.value = withRepeat(withSpring(360), -1, true);
    scale.value = withRepeat(withSpring(1.2), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateY: `${rotate.value}deg` },
      { scale: scale.value },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.productCard, animatedStyle]}>
        <ThemedText style={styles.title}>Produit 3D</ThemedText>
        <View style={styles.cube} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCard: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cube: {
    width: 100,
    height: 100,
    backgroundColor: '#007AFF',
    borderRadius: 10,
  },
});
