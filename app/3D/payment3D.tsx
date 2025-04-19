import { StyleSheet, View, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { ThemedText } from '@/components/ui/ThemedText';

export default function Payment3DScreen() {
  const flipCard = useSharedValue(0);

  const frontStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateY: `${flipCard.value}deg` },
    ],
    backfaceVisibility: 'hidden',
  }));

  const backStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateY: `${180 + flipCard.value}deg` },
    ],
    backfaceVisibility: 'hidden',
    position: 'absolute',
  }));

  const handleFlip = () => {
    flipCard.value = withSpring(flipCard.value === 0 ? 180 : 0);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleFlip}>
        <Animated.View style={[styles.card, frontStyle]}>
          <ThemedText style={styles.cardNumber}>**** **** **** 1234</ThemedText>
          <ThemedText style={styles.cardHolder}>JOHN DOE</ThemedText>
        </Animated.View>
        <Animated.View style={[styles.card, styles.cardBack, backStyle]}>
          <View style={styles.magneticStrip} />
          <ThemedText style={styles.cvv}>***</ThemedText>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 180,
    backgroundColor: '#2196F3',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardBack: {
    backgroundColor: '#1976D2',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 22,
    letterSpacing: 2,
  },
  cardHolder: {
    color: '#fff',
    fontSize: 16,
  },
  magneticStrip: {
    height: 40,
    backgroundColor: '#000',
    marginVertical: 20,
  },
  cvv: {
    color: '#fff',
    textAlign: 'right',
    marginRight: 40,
  },
});
