import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const router = useRouter()

  const handlePayment = () => {
    // Implement payment logic here
    alert('Paiement effectué avec succès!')
    // router.back()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paiement</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Numéro de carte"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Date d'expiration (MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />

      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        maxLength={3}
      />

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Payer</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
