import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { MoodSelector } from './MoodSelector';
import { CurrentMood } from './CurrentMood';
import { MoodHistory } from './MoodHistory';
import { ResetButton } from './ResetButton';

export type MoodOption = {
  emoji: string;
  label: string;
};

export type MoodEntry = {
  id: string;
  emoji: string;
  label: string;
  time: string;
};

const MOODS: MoodOption[] = [
  { emoji: '😃', label: 'Happy' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😢', label: 'Sad' },
];

const AppContent: React.FC = () => {
  const [currentMood, setCurrentMood] = useState<MoodEntry | null>(null);
  const [history, setHistory] = useState<MoodEntry[]>([]);

  const handleSelectMood = (mood: MoodOption) => {
    const entry: MoodEntry = {
      id: Date.now().toString(),
      emoji: mood.emoji,
      label: mood.label,
      time: new Date().toLocaleTimeString(),
    };

    setCurrentMood(entry);
    setHistory(prev => [entry, ...prev]);
  };

  const handleReset = () => {
    setCurrentMood(null);
    setHistory([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How do you feel today?</Text>

      <MoodSelector options={MOODS} onSelect={handleSelectMood} />

      <CurrentMood currentMood={currentMood} />

      <Text style={styles.subtitle}>History</Text>
      <MoodHistory history={history} />

      <ResetButton onReset={handleReset} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default AppContent;
