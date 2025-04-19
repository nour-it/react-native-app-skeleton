import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, Button } from 'react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { ThemedView } from '@/components/ui/ThemedView';

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = () => {
    if (feedback.trim() === '' || rating.trim() === '') {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }
    Alert.alert('Merci !', 'Votre avis a été envoyé avec succès');
    setFeedback('');
    setRating('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donnez-nous votre avis</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Note (1-5)"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
        maxLength={1}
      />
      
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Votre commentaire"
        value={feedback}
        onChangeText={setFeedback}
        multiline
        numberOfLines={4}
      />
      
      <Button
        onPress={handleSubmit}
        title="Envoyer"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
