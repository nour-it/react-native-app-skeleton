import { View, StyleSheet, Share, Platform, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { ThemedView } from '@/components/ui/ThemedView';

import { Ionicons } from '@expo/vector-icons';

export default function ShareScreen() {
  const handleShare = async (platform: string) => {
    try {
      const result = await Share.share({
        message: 'Découvrez notre super application !',
        url: 'https://votre-app.com',
        title: 'Partagez notre application',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type of', result.activityType);
        } else {
          console.log('Shared');
        }
      }
    } catch (error: any) {
      alert(error.message);
    }
  };


  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Partager l'application</ThemedText>
      
      <View style={styles.shareOptions}>
        <TouchableOpacity 
          style={styles.shareButton} 
          onPress={() => handleShare('whatsapp')}
        >
          <Ionicons name="logo-whatsapp" size={32} color="#25D366" />
          <ThemedText style={styles.buttonText}>WhatsApp</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.shareButton}
          onPress={() => handleShare('facebook')}
        >
          <Ionicons name="logo-facebook" size={32} color="#4267B2" />
          <ThemedText style={styles.buttonText}>Facebook</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.shareButton}
          onPress={() => handleShare('twitter')}
        >
          <Ionicons name="logo-twitter" size={32} color="#1DA1F2" />
          <ThemedText style={styles.buttonText}>Twitter</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.shareButton}
          onPress={() => handleShare('email')}
        >
          <Ionicons name="mail" size={32} color="#EA4335" />
          <ThemedText style={styles.buttonText}>Email</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
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
    marginBottom: 30,
    textAlign: 'center',
  },
  shareOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  shareButton: {
    alignItems: 'center',
    padding: 15,
    width: 100,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 12,
  },
});
