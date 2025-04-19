import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { ThemedText } from '@/components/ui/ThemedText';

export default function Profile3DScreen() {
  const translateZ = useSharedValue(0);
  const scale = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = event.scale;
      translateZ.value = (1 - event.scale) * 100;
    })
    .onEnd(() => {
      scale.value = withSpring(1);
      translateZ.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { scale: scale.value },
      // { translateZ: translateZ.value },
    ],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={pinchGesture}>
        <Animated.View style={[styles.profileCard, animatedStyle]}>
          <View style={styles.avatar}>
            <ThemedText style={styles.avatarText}>JD</ThemedText>
          </View>
          <ThemedText style={styles.name}>John Doe</ThemedText>
          <ThemedText style={styles.bio}>Profil 3D interactif</ThemedText>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    width: 250,
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
