// app/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const EntryPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Password Manager</Text>
      <Text style={styles.features}>Securely store and manage your passwords.</Text>
      <Button title="Register" onPress={() => router.push('/signup')} />
      <Button title="Already have an account?" onPress={() => router.push('/login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  features: { marginVertical: 20, textAlign: 'center' },
});

export default EntryPage;
