import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hi there!</Text>
      <Text style={styles.text2}>This is also some text</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },

  text: {
    color: '#F8F8F8',
    fontSize: 50,
    marginTop: 150,
  },

  text2: {
    color: '#F8F8F8'
  }
});
