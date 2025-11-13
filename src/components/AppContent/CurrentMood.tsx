import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { MoodEntry } from './AppContent';

type Props = {
  currentMood: MoodEntry | null;
};

export const CurrentMood: React.FC<Props> = ({ currentMood }) => {
  return (
    <View style={styles.currentBox}>
      {currentMood ? (
        <Text style={styles.currentText}>
          Today you feel: {currentMood.emoji} {currentMood.label}
        </Text>
      ) : (
        <Text style={styles.placeholder}>
          You haven't selected a mood yet
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  currentBox: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 20,
    borderRadius: 10,
    elevation: 2,
  },
  currentText: {
    fontSize: 20,
    textAlign: 'center',
  },
  placeholder: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});
