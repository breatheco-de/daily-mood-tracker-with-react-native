import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { MoodOption } from './AppContent';

type Props = {
  options: MoodOption[];
  onSelect: (mood: MoodOption) => void;
};

export const MoodSelector: React.FC<Props> = ({ options, onSelect }) => {
  return (
    <View style={styles.emojiRow}>
      {options.map(mood => (
        <TouchableOpacity
          key={mood.label}
          onPress={() => onSelect(mood)}
          style={styles.emojiButton}
        >
          <Text style={styles.emoji}>{mood.emoji}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  emojiRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  emojiButton: {
    marginHorizontal: 20,
  },
  emoji: {
    fontSize: 40,
  },
});
