import { useState } from 'react';
import { StyleSheet, Alert, Dimensions, TextInput, View, Text, Button } from 'react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { ThemedView } from '@/components/ui/ThemedView';
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const AnimatedThemedView = Animated.createAnimatedComponent(View);
const AnimatedTextInput = Animated.createAnimatedComponent(Text);

export default function Feedback3DScreen() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');
  
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

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
      ],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <AnimatedThemedView style={[styles.container, rStyle]}>
        <ThemedText style={styles.title3D}>Feedback 3D</ThemedText>
        <AnimatedTextInput
          style={[styles.input, styles.input3D]}
          placeholder="Note (1-5)"
          value={rating}
          onChangeText={setRating}
          keyboardType="numeric"
          maxLength={1}
        />
        <AnimatedTextInput
          style={[styles.input, styles.textArea, styles.input3D]}
          placeholder="Votre commentaire"
          value={feedback}
          onChangeText={setFeedback}
          multiline
          numberOfLines={4}
        />
        <Animated.View style={styles.button3D}>
          <Button
            onPress={() => {
              Alert.alert('Merci !', 'Votre avis 3D a été envoyé avec succès');
            }}
            title="Envoyer en 3D"
          />
        </Animated.View>
      </AnimatedThemedView>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title3D: {
    fontSize: 32,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 30,
  },
  input3D: {
    transform: [{ perspective: 800 }],
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button3D: {
    transform: [{ perspective: 800 }, { rotateX: '10deg' }],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  // ...existing styles...
});
