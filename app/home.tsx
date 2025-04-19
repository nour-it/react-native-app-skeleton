import { StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from 'expo-router';

export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Navigation</Text>
        <Text style={styles.subtitle}>Choisissez votre destination</Text>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  buttonContainer: {
    marginTop: 30,
    gap: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
