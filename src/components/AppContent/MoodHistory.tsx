import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import type { MoodEntry } from './AppContent';

type Props = {
  history: MoodEntry[];
};

export const MoodHistory: React.FC<Props> = ({ history }) => {
  if (history.length === 0) {
    return (
    <Text style={styles.placeholder}>No records yet</Text>
    );
  }

  return (
    <FlatList
      data={history}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.historyItem}>
          <Text style={styles.historyText}>
            {item.time} — {item.emoji} {item.label}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  placeholder: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginVertical: 8,
  },
  historyItem: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 6,
  },
  historyText: {
    fontSize: 16,
  },
});
