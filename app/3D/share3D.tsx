import { StyleSheet, Share, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { ThemedView } from '@/components/ui/ThemedView';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const AnimatedThemedView = Animated.createAnimatedComponent(View);
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function Share3DScreen() {
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      rotateX.value = withSpring(event.translationY / 10);
      rotateY.value = withSpring(event.translationX / 10);
    })
    .onEnd(() => {
      rotateX.value = withSpring(0);
      rotateY.value = withSpring(0);
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 1000 },
        { rotateX: `${rotateX.value}deg` },
        { rotateY: `${rotateY.value}deg` },
        { scale: scale.value },
      ],
    };
  });

  const socialButtons = [
    { platform: 'whatsapp', icon: 'logo-whatsapp', color: '#25D366' },
    { platform: 'facebook', icon: 'logo-facebook', color: '#4267B2' },
    { platform: 'twitter', icon: 'logo-twitter', color: '#1DA1F2' },
    { platform: 'email', icon: 'mail', color: '#EA4335' },
  ];

  function handleShare (platform: any) {}

  return (
    <GestureDetector gesture={gesture}>
      <AnimatedThemedView style={[styles.container3D, rStyle]}>
        <ThemedText style={styles.title3D}>Partager en 3D</ThemedText>
        <View style={styles.shareOptions3D}>
          {socialButtons.map((button) => (
            <AnimatedTouchable
              key={button.platform}
              style={[styles.shareButton3D]}
              onPressIn={() => (scale.value = withSpring(0.95))}
              onPressOut={() => (scale.value = withSpring(1))}
              onPress={() => handleShare(button.platform)}
            >
              <Ionicons name={button.icon} size={40} color={button.color} />
              <ThemedText style={styles.buttonText3D}>{button.platform}</ThemedText>
            </AnimatedTouchable>
          ))}
        </View>
      </AnimatedThemedView>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container3D: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
  },
  title3D: {
    fontSize: 32,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 30,
    textAlign: 'center',
  },
  shareOptions3D: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
  },
  shareButton3D: {
    alignItems: 'center',
    padding: 20,
    width: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText3D: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
