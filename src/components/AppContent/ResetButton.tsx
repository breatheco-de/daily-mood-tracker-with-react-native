import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  onReset: () => void;
};

export const ResetButton: React.FC<Props> = ({ onReset }) => {
  return (
    <TouchableOpacity style={styles.resetButton} onPress={onReset}>
      <Text style={styles.resetText}>Reset history</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  resetButton: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  },
  resetText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
