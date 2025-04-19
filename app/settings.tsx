import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'

const Settings = () => {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [locationServices, setLocationServices] = useState(true)
  const router = useRouter()

  const renderSettingItem = (title: string, value: boolean, onValueChange: (val: boolean) => void) => (
    <View style={styles.settingItem}>
      <Text style={styles.settingText}>{title}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>
  )

  return (
    <View style={styles.container}>
      {renderSettingItem("Notifications", notifications, setNotifications)}
      {renderSettingItem("Mode sombre", darkMode, setDarkMode)}
      {renderSettingItem("Services de localisation", locationServices, setLocationServices)}
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/profile')}
      >
        <Text style={styles.buttonText}>Modifier le profil</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.logoutButton]}
        onPress={() => alert('Déconnexion...')}
      >
        <Text style={styles.buttonText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
